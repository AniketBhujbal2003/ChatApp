import useConversation from "@/zustand/useConversations";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


const useGetMessages = () => {

    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const res = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/messages/${selectedConversation._id}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                        },
                    }
                );
                const data = await res.json();
                if (!data.success) throw new Error(data.message);
                setMessages(data.messages);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages]);

    return { messages, loading };
};
export default useGetMessages;