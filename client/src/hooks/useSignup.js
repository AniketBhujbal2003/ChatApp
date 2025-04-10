import { useAuthContext } from "@/context/Authcontext";
import { useState } from "react";
import { toast } from "react-toastify";


const useSignup = () => {

    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
        if (!success) return;

        setLoading(true);
        try {

            // console.log(`${import.meta.env.VITE_SERVER_BASE_URL }`);

            const res = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/auth/signup` , {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
            });

            const data = await res.json();
            if (!data.success) {
                throw new Error(data.message);
            }
            console.log(data);
            localStorage.setItem("chat-user", JSON.stringify(data));
            localStorage.setItem("token", JSON.stringify(data.token));
            toast.success(data.message)
            setAuthUser(data);
            
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

export default useSignup;

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill in all fields");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }

    return true;
}