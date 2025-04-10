import { useEffect, useState } from "react";
import { toast } from "react-toastify";


const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/users`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                    },
                });
                const data = await res.json();
                if (!data.success) {
                    throw new Error(data.message);
                }
                setConversations(data.filteredUsers);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        getConversations();
    }, []);

    return { loading, conversations };
};
export default useGetConversations;