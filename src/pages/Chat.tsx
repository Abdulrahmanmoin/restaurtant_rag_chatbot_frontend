import { FC, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChatMessage } from '@/components/ChatMessage';
import { ChatInput } from '@/components/ChatInput';
import { TypingIndicator } from '@/components/TypingIndicator';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const Chat: FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const hasMessages = messages.length > 0 || isLoading;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (hasMessages) {
      scrollToBottom();
    }
  }, [messages, streamingContent, hasMessages]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setStreamingContent('');

    // Simulate streaming response (replace with actual API call)
    await simulateStreamingResponse(content);
  };

  const simulateStreamingResponse = async (userMessage: string) => {
    // Sample responses based on keywords
    let response = "I'd be happy to help you with that! At Pizza Alchemy, we take pride in our handcrafted pizzas made with fresh, locally-sourced ingredients. Is there anything specific you'd like to know about our menu or services?";

    if (userMessage.toLowerCase().includes('menu') || userMessage.toLowerCase().includes('pizza')) {
      response = "🍕 Our menu features a variety of artisan pizzas!\n\n**Signature Pizzas:**\n• The Alchemist's Gold - Truffle oil, wild mushrooms, fontina\n• Spicy Sorcerer - Jalapeños, pepperoni, hot honey drizzle\n• Garden Wizard - Fresh veggies, pesto, goat cheese\n• Classic Margherita - San Marzano tomatoes, fresh mozzarella, basil\n\nWould you like to know more about any of these?";
    } else if (userMessage.toLowerCase().includes('hours') || userMessage.toLowerCase().includes('open')) {
      response = "⏰ **Our Hours:**\n\n• Monday - Thursday: 11am - 10pm\n• Friday - Saturday: 11am - 12am\n• Sunday: 12pm - 9pm\n\nWe also offer delivery until 30 minutes before closing!";
    } else if (userMessage.toLowerCase().includes('ingredient') || userMessage.toLowerCase().includes('fresh')) {
      response = "🌿 **Our Ingredients:**\n\nWe're committed to quality! All our pizzas feature:\n\n• Hand-stretched dough made fresh daily\n• San Marzano tomatoes from Italy\n• Locally-sourced mozzarella\n• Organic vegetables from nearby farms\n• Premium meats with no artificial preservatives\n\nWe also offer gluten-free and vegan options!";
    } else if (userMessage.toLowerCase().includes('special') || userMessage.toLowerCase().includes('deal')) {
      response = "✨ **Today's Specials:**\n\n• **Mystic Monday** - Buy one, get one 50% off\n• **Topping Tuesday** - Free extra topping\n• **Wine Wednesday** - Half-price wine with any large pizza\n• **Family Friday** - 2 large pizzas + sides for $45\n\nWant me to tell you about our loyalty rewards program?";
    }

    // Simulate streaming character by character
    for (let i = 0; i < response.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 15));
      setStreamingContent((prev) => prev + response[i]);
    }

    // After streaming completes, add the full message
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: response,
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setStreamingContent('');
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon" className="rounded-xl">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display font-semibold text-foreground">Pizza Alchemy AI</h1>
              <p className="text-xs text-muted-foreground">Your pizza expert assistant</p>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div
        ref={chatContainerRef}
        className={cn(
          'flex-1 transition-all duration-500 ease-out',
          hasMessages ? 'pb-32' : 'flex items-center justify-center pb-0'
        )}
      >
        {hasMessages ? (
          <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
            {messages.map((message) => (
              <ChatMessage key={message.id} role={message.role} content={message.content} />
            ))}

            {isLoading && streamingContent && (
              <ChatMessage role="assistant" content={streamingContent} isStreaming />
            )}

            {isLoading && !streamingContent && (
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="bg-card border border-border rounded-2xl rounded-bl-sm">
                  <TypingIndicator />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        ) : (
          <div className="w-full px-4">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <span className="text-4xl">🍕</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div
        className={cn(
          'transition-all duration-500 ease-out px-4',
          hasMessages
            ? 'fixed bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background to-transparent pt-6 pb-6'
            : 'w-full flex justify-center'
        )}
      >
        <div className={cn('w-full flex justify-center', hasMessages && 'max-w-4xl mx-auto')}>
          <ChatInput
            onSend={handleSendMessage}
            disabled={isLoading}
            centered={!hasMessages}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
