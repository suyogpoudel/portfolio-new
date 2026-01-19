"use client";
import { useState } from "react";
import { IconCopy, IconCopyCheck } from "@tabler/icons-react";

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton = ({ textToCopy }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <button
      onClick={copyText}
      aria-label="Copy text"
      className="hover:opacity-60 hover:scale-105 transition-all duration-300"
    >
      {copied ? <IconCopyCheck className="text-teal-400" /> : <IconCopy />}
    </button>
  );
};

export default CopyButton;
