import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const LoadingSpinner = ({ size = 24, className = "" }) => {
    return (
        <div className="flex items-center justify-center">
            <Loader2
                className={cn("animate-spin text-white", className)}
                size={size}
            />
        </div>
    );
};

export default LoadingSpinner;
