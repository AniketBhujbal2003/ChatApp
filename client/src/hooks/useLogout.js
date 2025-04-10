import { useAuthContext } from "@/context/Authcontext";
import { useState } from "react";
import { toast } from "react-toastify";



const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/auth/logout`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            if (data.success==false) {
                throw new Error(data.message);
            }

            localStorage.removeItem("chat-user");
            localStorage.removeItem("token")
            setAuthUser(null);
            toast.success(data.message);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
};
export default useLogout;