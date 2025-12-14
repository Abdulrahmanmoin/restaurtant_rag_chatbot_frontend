import { FC, useState, KeyboardEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  centered?: boolean;
}

export const ChatInput: FC<ChatInputProps> = ({ onSend, disabled, centered }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className={cn(
        'w-full transition-all duration-500 ease-out',
        centered ? 'max-w-2xl' : 'max-w-4xl'
      )}
    >
      {centered && (
        <div className="text-center mb-6 animate-fade-in">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
            Ask me anything about <span className="text-primary">Pizza Alchemy</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Menu, hours, ingredients, specials - I'm here to help!
          </p>
        </div>
      )}

      <div className="relative bg-card border border-border rounded-2xl shadow-card overflow-hidden transition-all duration-300 focus-within:border-primary focus-within:shadow-glow">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          disabled={disabled}
          rows={1}
          className={cn(
            'w-full bg-transparent text-foreground placeholder:text-muted-foreground resize-none outline-none px-4 py-4 pr-14 text-sm md:text-base',
            'min-h-[56px] max-h-[200px]'
          )}
          style={{ height: 'auto' }}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = 'auto';
            target.style.height = `${Math.min(target.scrollHeight, 200)}px`;
          }}
        />

        <Button
          variant="chat"
          size="icon"
          onClick={handleSend}
          disabled={!input.trim() || disabled}
          className="absolute right-2 bottom-2 h-10 w-10 rounded-xl"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>

      <p className="text-center text-muted-foreground text-xs mt-3">
        Press Enter to send, Shift + Enter for new line
      </p>
    </div>
  );
};
