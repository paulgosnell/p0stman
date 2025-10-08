# Multi-Language Support for ElevenLabs Voice Agent

## 🌍 Overview

The P0STMAN voice agent now supports **6 languages** with an elegant language selector UI:

- 🇬🇧 English (en)
- 🇮🇹 Italian (it)
- 🇪🇸 Spanish (es)
- 🇫🇷 French (fr)
- 🇩🇰 Danish (da)
- 🇸🇦 Arabic (ar)

## 🎨 Features

✅ **Language selector dropdown** with native language names and flag emojis
✅ **Automatic language configuration** via ElevenLabs SDK overrides
✅ **Disabled during active conversation** (language locked per session)
✅ **Consistent UI** across both overlay and inline voice agent components
✅ **Mobile-responsive design** with smooth animations

## 📁 Files Added/Modified

### New Files
- **`/src/components/voice-agent/LanguageSelector.tsx`**
  - Reusable language selector dropdown component
  - 6 supported languages with flags and native names
  - Disabled state during active conversations
  - Framer Motion animations

### Modified Files
- **`/src/components/voice-agent/VoiceAgentOverlay.tsx`**
  - Added `selectedLanguage` state
  - Language selector in top bar
  - Overrides parameter in `Conversation.startSession()`
  - Language locked during active conversation

- **`/src/components/voice-agent/InlineVoiceAgent.tsx`**
  - Added `language` prop (optional, defaults to 'en')
  - Language selector in header
  - Overrides parameter in `conversation.startSession()`

## 🔧 Implementation Details

### ElevenLabs SDK Overrides

The language is set using the `overrides` parameter when starting a conversation:

```typescript
const conversation = await Conversation.startSession({
  agentId,
  apiKey,
  overrides: {
    agent: {
      language: selectedLanguage, // 'en', 'it', 'es', 'fr', 'da', 'ar'
    },
  },
  // ... other callbacks
});
```

### Language Codes

ElevenLabs uses ISO 639-1 language codes:

| Language | Code | Native Name |
|----------|------|-------------|
| English  | `en` | English     |
| Italian  | `it` | Italiano    |
| Spanish  | `es` | Español     |
| French   | `fr` | Français    |
| Danish   | `da` | Dansk       |
| Arabic   | `ar` | العربية     |

## 🎯 User Experience

### Before Conversation
1. User sees language selector in top-left of overlay
2. User can click to select their preferred language
3. Beautiful dropdown shows all 6 languages with flags
4. Selected language is highlighted with blue dot

### During Conversation
1. Language selector becomes **disabled** (grayed out)
2. User cannot change language mid-conversation
3. Conversation continues in selected language

### After Conversation Ends
1. Language selector is **re-enabled**
2. User can select a different language for next conversation
3. Previous language selection is preserved

## 🔒 Security Note

⚠️ **IMPORTANT**: For language overrides to work, you must enable them in your ElevenLabs agent settings:

1. Go to ElevenLabs Dashboard
2. Navigate to your agent's settings
3. Select the **Security** tab
4. Enable **Language overrides**

Without this setting enabled, the language parameter will be ignored and the agent will use the default language configured in the dashboard.

## 🧪 Testing

Build successful with no TypeScript errors:
```bash
npm run build
✓ built in 7.76s
```

### Manual Testing Checklist

- [ ] Language selector displays correctly in overlay
- [ ] Language selector displays correctly in inline agent
- [ ] All 6 languages are listed with correct flags
- [ ] Language selector is disabled during active conversation
- [ ] Language selector is re-enabled after conversation ends
- [ ] Selected language persists between overlay open/close
- [ ] Conversation starts with correct language
- [ ] Console logs show correct language parameter

### Test Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build
```

## 🎨 UI/UX Design

### Language Selector Component
- **Background**: White with 10% opacity, backdrop blur
- **Border**: White with 20% opacity
- **Hover**: White with 20% opacity background
- **Disabled**: 50% opacity, cursor not-allowed
- **Dropdown**: Dark gray (900/95) with backdrop blur

### Animations
- Smooth scale on hover (1.02x)
- Scale down on tap (0.98x)
- Fade in/out for dropdown (opacity + y-axis)

## 📱 Mobile Responsive

- Touch-optimized tap targets
- Proper spacing on small screens
- Dropdown adjusts to viewport
- Flag emojis render correctly on all devices

## 🚀 Future Enhancements

1. **Language detection**: Auto-detect user's browser language
2. **Remember preference**: Store language choice in localStorage
3. **More languages**: Expand to ElevenLabs' full 32+ language list
4. **Voice selection**: Allow different voices per language
5. **Translation UI**: Translate UI text along with agent language

## 📄 API Reference

### LanguageSelector Component

```typescript
interface LanguageSelectorProps {
  selectedLanguage: string;      // Current language code ('en', 'it', etc.)
  onLanguageChange: (code: string) => void; // Callback when language changes
  disabled?: boolean;            // Optional, disables selector
}
```

### Supported Languages Export

```typescript
export interface Language {
  code: string;        // ISO 639-1 code
  name: string;        // English name
  nativeName: string;  // Native language name
  flag: string;        // Flag emoji
}

export const SUPPORTED_LANGUAGES: Language[];
```

## 🎉 Success Criteria

✅ Language selector component created
✅ 6 languages supported (English, Italian, Spanish, French, Danish, Arabic)
✅ VoiceAgentOverlay updated with language support
✅ InlineVoiceAgent updated with language support
✅ ElevenLabs SDK overrides implemented correctly
✅ Language locked during active conversation
✅ Clean TypeScript build with no errors
✅ Mobile-responsive design
✅ Smooth animations with Framer Motion
✅ Proper accessibility (keyboard navigation)

## 🐛 Troubleshooting

### Language override not working?
- Check ElevenLabs dashboard: Security > Enable Language overrides
- Verify agent supports the selected language
- Check browser console for errors
- Ensure API key has proper permissions

### Language selector not appearing?
- Check component import paths
- Verify LanguageSelector.tsx exists
- Check for TypeScript errors in console

### Dropdown not closing?
- Ensure backdrop click handler is working
- Check z-index values (dropdown should be z-50)
- Verify Framer Motion is installed

## 📞 Support

For ElevenLabs language support questions:
- [ElevenLabs Documentation](https://elevenlabs.io/docs)
- [Supported Languages](https://help.elevenlabs.io/hc/en-us/articles/13313366263441)
- [Conversational AI Overrides](https://elevenlabs.io/docs/agents-platform/customization/personalization/overrides)

---

**Built with ❤️ for P0STMAN**
Multi-language voice AI for global audiences
