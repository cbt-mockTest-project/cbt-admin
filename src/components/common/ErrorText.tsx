import React from 'react';

interface ErrorTextProps {
  content: string;
}

const ErrorText: React.FC<ErrorTextProps> = ({ content }) => {
  return <p className="text-red-500 w-full">{content}</p>;
};

export default ErrorText;
