import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({
  code,
  language = "javascript",
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="my-6 overflow-hidden rounded-xl bg-gray-950">

      <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
        <span className="text-xs font-medium uppercase text-gray-400">
          {language}
        </span>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-xs text-gray-300 hover:text-white"
        >
          {copied ? (
            <>
              <Check size={15} />
              Copied
            </>
          ) : (
            <>
              <Copy size={15} />
              Copy
            </>
          )}
        </button>
      </div>

      <pre className="overflow-x-auto p-5 text-sm leading-7 text-gray-200">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;