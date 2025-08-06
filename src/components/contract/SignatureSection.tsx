import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Edit2, Save, RotateCcw, Edit3 } from 'lucide-react';
import { loadSignature, saveSignature as saveSignatureToStorage } from '../../lib/signatureUtils';

interface SignatureProps {
  role: 'client' | 'provider';
  name: string;
  company?: string;
  title?: string;
  date: string;
  onSign?: (signature: string) => void;
}

export default function SignatureSection({ role, name, company, title, date, onSign }: SignatureProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  const [editableName, setEditableName] = useState(name);
  const [editableCompany, setEditableCompany] = useState(company || '');
  const [editableTitle, setEditableTitle] = useState(title || '');
  const [signature, setSignature] = useState<string | null>(null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingCompany, setIsEditingCompany] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  // Load saved signature on mount
  useEffect(() => {
    const savedSignature = loadSignature(role);
    if (savedSignature) {
      setSignature(savedSignature);
      onSign?.(savedSignature);
    }
  }, [role, onSign]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let x, y;
    if ('touches' in e) {
      const rect = canvas.getBoundingClientRect();
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.nativeEvent.offsetX;
      y = e.nativeEvent.offsetY;
    }

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let x, y;
    if ('touches' in e) {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.nativeEvent.offsetX;
      y = e.nativeEvent.offsetY;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
    setHasSignature(true);
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };

  const saveSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas || !hasSignature) return;
    const signature = canvas.toDataURL();
    
    // Save to localStorage and update state
    saveSignatureToStorage(role, signature);
    setSignature(signature);
    onSign?.(signature);
    setShowCanvas(false);
  };

  const clearSavedSignature = () => {
    saveSignatureToStorage(role, null);
    setSignature(null);
    setShowCanvas(false);
    setHasSignature(false);
    onSign?.(null);
  };

  const initializeCanvas = () => {
    setShowCanvas(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  };

  return (
    <div className="space-y-4">
      <div>
        <p className="font-medium mb-2">{role === 'client' ? 'Client:' : 'Service Provider:'}</p>
        <div className="mb-1 flex items-center gap-2">
          <span className="w-20">Name:</span>
          {isEditingName ? (
            <input
              type="text"
              value={editableName}
              onChange={(e) => setEditableName(e.target.value)}
              onBlur={() => setIsEditingName(false)}
              autoFocus
              className="border-b border-gray-300 focus:border-blue-500 outline-none px-1"
            />
          ) : (
            <div className="flex items-center gap-2">
              <span>{editableName}</span>
              <button
                onClick={() => setIsEditingName(true)}
                className="p-1 text-gray-400 hover:text-gray-600"
              >
                <Edit3 className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
        <div className="mb-1 flex items-center gap-2">
          <span className="w-20">Company:</span>
          {isEditingCompany ? (
            <input
              type="text"
              value={editableCompany}
              onChange={(e) => setEditableCompany(e.target.value)}
              onBlur={() => setIsEditingCompany(false)}
              autoFocus
              className="border-b border-gray-300 focus:border-blue-500 outline-none px-1"
            />
          ) : (
            <div className="flex items-center gap-2">
              <span>{editableCompany || (role === 'client' ? '' : 'P0STMAN (AI-Powered Product Studio)')}</span>
              {role === 'client' && (
                <button
                  onClick={() => setIsEditingCompany(true)}
                  className="p-1 text-gray-400 hover:text-gray-600"
                >
                  <Edit3 className="w-3 h-3" />
                </button>
              )}
            </div>
          )}
        </div>
        <div className="mb-4 flex items-center gap-2">
          <span className="w-20">Title:</span>
          {isEditingTitle ? (
            <input
              type="text"
              value={editableTitle}
              onChange={(e) => setEditableTitle(e.target.value)}
              onBlur={() => setIsEditingTitle(false)}
              autoFocus
              className="border-b border-gray-300 focus:border-blue-500 outline-none px-1"
            />
          ) : (
            <div className="flex items-center gap-2">
              <span>{role === 'client' ? editableTitle : 'Founder, P0STMAN'}</span>
              {role === 'client' && (
                <button
                  onClick={() => setIsEditingTitle(true)}
                  className="p-1 text-gray-400 hover:text-gray-600"
                >
                  <Edit3 className="w-3 h-3" />
                </button>
              )}
            </div>
          )}
        </div>
        
        {signature ? (
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2">Signature:</p>
            <img
              src={signature}
              alt="Signature"
              className="max-w-[200px] h-auto"
            />
            <button
              onClick={clearSavedSignature}
              className="text-sm text-blue-600 hover:text-blue-700 mt-2"
            >
              Clear signature
            </button>
          </div>
        ) : showCanvas ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <canvas
                ref={canvasRef}
                width={300}
                height={150}
                className="touch-none bg-white w-full"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={endDrawing}
                onMouseLeave={endDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={endDrawing}
              />
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={clearSignature}
                className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
              >
                <RotateCcw className="w-4 h-4" />
                Clear
              </button>
              <button
                onClick={saveSignature}
                disabled={!hasSignature}
                className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                <Save className="w-4 h-4" />
                Save Signature
              </button>
            </div>
          </motion.div>
        ) : (
          <button
            onClick={initializeCanvas}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Edit2 className="w-4 h-4" />
            Add Signature
          </button>
        )}
        
        <p className="mt-4">Date: {date}</p>
      </div>
    </div>
  );
}