import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

// Custom component for rendering images with fixed dimensions
const CustomImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ maxWidth: 475, height: "auto", maxHeight: 300 }} // Set fixed dimensions here
    />
  );
};

const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const ContentSection = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        ...CodeBlock,
        img: CustomImage, // Use the CustomImage component for rendering images
      }}
      className="markdown-class"
    >
      {content}
    </ReactMarkdown>
  );
};

export default ContentSection;
