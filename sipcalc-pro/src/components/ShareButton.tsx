import { useState } from 'react';

interface ShareButtonProps {
  params: Record<string, string | number>;
}

export default function ShareButton({ params }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = new URL(window.location.href);
    // Preserve the path, set query params from current calc state
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, String(v)));

    try {
      await navigator.clipboard.writeText(url.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: select an input
      const inp = document.createElement('input');
      inp.value = url.toString();
      document.body.appendChild(inp);
      inp.select();
      document.execCommand('copy');
      document.body.removeChild(inp);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <button
        type="button"
        className="share-btn"
        onClick={handleShare}
        aria-label="Copy shareable link to clipboard"
      >
        {copied ? '✅ Link Copied!' : '🔗 Share this Result'}
      </button>

      {copied && (
        <div className="toast-container" aria-live="polite">
          <div className="toast">📋 Shareable link copied to clipboard!</div>
        </div>
      )}
    </>
  );
}
