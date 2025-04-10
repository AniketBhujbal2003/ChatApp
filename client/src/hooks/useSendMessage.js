import useConversation from "@/zustand/useConversations";
import { useState } from "react";
import { toast } from "react-toastify";


const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                },
                body: JSON.stringify({ message }),
            });
            const data = await res.json();
            if (!data.success) throw new Error(data.message);

            setMessages([...messages, data.newMessage]);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading };
};
export default useSendMessage;