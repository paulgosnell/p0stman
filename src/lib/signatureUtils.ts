export function loadSignature(role: 'client' | 'provider'): string | null {
  try {
    return localStorage.getItem(`signature_${role}`);
  } catch (err) {
    console.error('Error loading signature:', err);
    return null;
  }
}

export function saveSignature(role: 'client' | 'provider', signature: string | null): void {
  try {
    if (signature) {
      localStorage.setItem(`signature_${role}`, signature);
    } else {
      localStorage.removeItem(`signature_${role}`);
    }
  } catch (err) {
    console.error('Error saving signature:', err);
  }
}