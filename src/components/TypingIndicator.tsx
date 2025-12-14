import { FC } from 'react';

export const TypingIndicator: FC = () => {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <div className="w-2 h-2 rounded-full bg-primary animate-typing-dot" />
      <div className="w-2 h-2 rounded-full bg-primary animate-typing-dot-delayed-1" />
      <div className="w-2 h-2 rounded-full bg-primary animate-typing-dot-delayed-2" />
    </div>
  );
};
