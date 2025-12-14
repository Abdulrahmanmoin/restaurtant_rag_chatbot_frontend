import { FC } from 'react';
import { cn } from '@/lib/utils';
import { User, Sparkles } from 'lucide-react';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  isStreaming?: boolean;
}

export const ChatMessage: FC<ChatMessageProps> = ({ role, content, isStreaming }) => {
  const isUser = role === 'user';

  return (
    <div
      className={cn(
        'flex gap-3 animate-fade-in',
        isUser ? 'flex-row-reverse' : 'flex-row'
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center',
          isUser ? 'bg-secondary' : 'bg-primary'
        )}
      >
        {isUser ? (
          <User className="w-4 h-4 text-secondary-foreground" />
        ) : (
          <Sparkles className="w-4 h-4 text-primary-foreground" />
        )}
      </div>

      {/* Message bubble */}
      <div
        className={cn(
          'max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3',
          isUser
            ? 'bg-primary text-primary-foreground rounded-br-sm'
            : 'bg-card text-card-foreground border border-border rounded-bl-sm'
        )}
      >
        <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">
          {content}
          {isStreaming && (
            <span className="inline-block w-1.5 h-4 ml-0.5 bg-primary animate-pulse rounded-sm" />
          )}
        </p>
      </div>
    </div>
  );
};
