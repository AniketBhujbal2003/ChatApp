

import useLogout from "@/hooks/useLogout";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
    const { loading, logout } = useLogout();

    return (
        <div className='mt-auto'>
            {!loading ? (
                <div className="flex gap-1  cursor-pointer" onClick={logout}>
                    <LogOut className='w-6 h-6 text-black' />
                    <span>LOGOUT</span>
                </div>
            ) : (
                <span className='loading loading-spinner'></span>
            )}
            
        </div>
    );
};
export default LogoutButton;