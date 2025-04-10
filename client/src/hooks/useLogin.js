import { useAuthContext } from "@/context/Authcontext";
import { useState } from "react";
import { toast } from "react-toastify";


const useLogin = () => {

    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {
        const success = handleInputErrors(username, password);
        if (!success) return;
        setLoading(true);
        try {
            
            // await new Promise((resolve) => setTimeout(resolve, 5000));

            const res = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            if (data.success==false) {
                throw new Error(data.message);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            localStorage.setItem("token", JSON.stringify(data.token));
            setAuthUser(data);
            toast.success(data.message);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
};
export default useLogin;

function handleInputErrors(username, password) {
    if (!username || !password) {
        toast.error("Please fill in all fields");
        return false;
    }

    return true;
}