/**
 * Mamori Voice Agent - Bundled Version
 * Includes ElevenLabs SDK
 */

import { Conversation } from '@elevenlabs/client';

class MamoriVoiceAgent {
    constructor(config) {
        this.config = config;
        this.isActive = false;
        this.isListening = false;
        this.isSpeaking = false;
        this.conversation = null;
        this.selectedLanguage = 'en';
        this.barHeights = new Array(60).fill(0);
        this.animationFrame = null;

        this.init();
    }

    init() {
        // Get DOM elements
        this.elements = {
            container: document.getElementById(this.config.containerId),
            toggleBtn: document.getElementById(this.config.toggleBtnId),
            waveform: document.getElementById(this.config.waveformId),
            status: document.getElementById(this.config.statusId),
            languageSelect: document.getElementById(this.config.languageSelectId)
        };

        if (!this.elements.toggleBtn) {
            console.error('Voice agent toggle button not found');
            return;
        }

        this.setupWaveform();
        this.setupEventListeners();

        console.log('Mamori Voice Agent initialized');
    }

    setupWaveform() {
        if (!this.elements.waveform) return;

        // Generate 60 waveform bars
        for (let i = 0; i < 60; i++) {
            const bar = document.createElement('div');
            bar.className = 'waveform-bar';
            bar.style.height = '4px';
            this.elements.waveform.appendChild(bar);
        }

        this.bars = this.elements.waveform.querySelectorAll('.waveform-bar');
    }

    setupEventListeners() {
        // Toggle button
        this.elements.toggleBtn.addEventListener('click', () => {
            if (this.isActive) {
                this.stop();
            } else {
                this.start();
            }
        });

        // Language selector
        if (this.elements.languageSelect) {
            this.elements.languageSelect.addEventListener('change', (e) => {
                this.selectedLanguage = e.target.value;
                if (this.isActive) {
                    // Restart with new language
                    console.log('Restarting with new language:', this.selectedLanguage);
                    this.stop();
                    setTimeout(() => this.start(), 500);
                }
            });
        }
    }

    async start() {
        this.isActive = true;
        this.updateUI();
        this.updateStatus('Connecting...', 'connecting');

        try {
            console.log('Starting ElevenLabs conversation with config:', {
                agentId: this.config.agentId,
                language: this.selectedLanguage
            });

            // Initialize ElevenLabs conversation
            this.conversation = await Conversation.startSession({
                agentId: this.config.agentId,
                apiKey: this.config.apiKey,
                overrides: {
                    agent: {
                        language: this.selectedLanguage
                    }
                },
                onConnect: () => {
                    console.log('Connected to Mamori Voice AI');
                    this.updateStatus('Listening... speak now', 'listening');
                    this.startWaveformAnimation();
                },
                onDisconnect: () => {
                    console.log('Disconnected from voice agent');
                    this.stop();
                },
                onError: (error) => {
                    console.error('Conversation error:', error);
                    this.updateStatus('Connection error. Please try again.', 'error');
                    this.stop();
                },
                onModeChange: (mode) => {
                    console.log('Mode changed:', mode.mode);
                    this.isListening = mode.mode === 'listening';
                    this.isSpeaking = mode.mode === 'speaking';

                    if (this.isSpeaking) {
                        this.updateStatus('Speaking...', 'speaking');
                    } else if (this.isListening) {
                        this.updateStatus('Listening...', 'listening');
                    }
                }
            });

        } catch (error) {
            console.error('Failed to start voice agent:', error);
            this.updateStatus('Failed to connect. Check your credentials.', 'error');
            this.isActive = false;
            this.updateUI();
        }
    }

    stop() {
        console.log('Stopping voice agent');

        this.isActive = false;
        this.isListening = false;
        this.isSpeaking = false;

        if (this.conversation) {
            try {
                this.conversation.endSession();
            } catch (error) {
                console.error('Error ending conversation:', error);
            }
            this.conversation = null;
        }

        this.stopWaveformAnimation();
        this.updateUI();
        this.updateStatus('Click "Start" to begin talking', 'idle');
        this.resetWaveform();
    }

    startWaveformAnimation() {
        const updateWaveform = () => {
            if (!this.isActive || !this.conversation) return;

            // Try to get audio frequency data from conversation
            if (typeof this.conversation.getOutputByteFrequencyData === 'function') {
                try {
                    const frequencyData = this.conversation.getOutputByteFrequencyData();

                    if (frequencyData && frequencyData.length > 0) {
                        const step = Math.floor(frequencyData.length / 60);

                        this.bars.forEach((bar, i) => {
                            const value = frequencyData[i * step] || 0;
                            const height = this.isSpeaking ?
                                Math.max((value / 255) * 100, 4) :
                                4;
                            bar.style.height = `${height}%`;
                            bar.style.opacity = this.isActive ? '1' : '0.3';
                        });
                    } else {
                        // Fallback: idle animation
                        this.animateIdleWaveform();
                    }
                } catch (error) {
                    console.warn('Error reading frequency data:', error);
                    this.animateIdleWaveform();
                }
            } else {
                // Fallback: idle animation
                this.animateIdleWaveform();
            }

            this.animationFrame = requestAnimationFrame(updateWaveform);
        };

        updateWaveform();
    }

    animateIdleWaveform() {
        // Simple sine wave animation for idle state
        const time = Date.now() / 1000;
        this.bars.forEach((bar, i) => {
            const offset = (i / 60) * Math.PI * 2;
            const height = 4 + Math.sin(time * 2 + offset) * 2;
            bar.style.height = `${Math.max(height, 4)}px`;
            bar.style.opacity = '0.6';
        });
    }

    stopWaveformAnimation() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = null;
        }
    }

    resetWaveform() {
        this.bars.forEach(bar => {
            bar.style.height = '4px';
            bar.style.opacity = '0.3';
        });
    }

    updateUI() {
        // Toggle interface visibility
        if (this.elements.container) {
            this.elements.container.style.display = this.isActive ? 'block' : 'none';
        }

        // Update button state
        if (this.elements.toggleBtn) {
            const icon = this.elements.toggleBtn.querySelector('i');
            const text = this.elements.toggleBtn.querySelector('span');

            if (icon && text) {
                if (this.isActive) {
                    icon.setAttribute('data-lucide', 'mic-off');
                    text.textContent = 'End Conversation';
                    this.elements.toggleBtn.classList.add('active');
                } else {
                    icon.setAttribute('data-lucide', 'mic');
                    text.textContent = 'Start Conversation';
                    this.elements.toggleBtn.classList.remove('active');
                }

                // Re-initialize Lucide icons
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }
        }
    }

    updateStatus(text, state) {
        if (!this.elements.status) return;

        const indicator = this.elements.status.querySelector('.status-indicator');
        const statusText = this.elements.status.querySelector('.status-text');

        if (statusText) {
            statusText.textContent = text;
        }

        if (indicator) {
            // Remove all state classes
            indicator.className = 'status-indicator';
            // Add new state class
            if (state) {
                indicator.classList.add(`status-indicator--${state}`);
            }
        }
    }
}

// Make globally available
window.MamoriVoiceAgent = MamoriVoiceAgent;

console.log('Mamori Voice Agent (bundled) script loaded');
