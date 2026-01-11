
const API_URL = import.meta.env.VITE_API_URL;

export interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

export interface ChatRequest {
    message: string;
    history?: Message[];
}

export interface ChatResponse {
    response: string;
    history: Message[];
}

export const sendMessage = async (message: string, history: Message[] = []): Promise<{ response: string; history: Message[] }> => {
    try {
        const response = await fetch(`${API_URL}/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message,
                history: history.map(h => ({ role: h.role, content: h.content })),
            }),
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
        }

        const data: ChatResponse = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to send message:", error);
        throw error;
    }
};
