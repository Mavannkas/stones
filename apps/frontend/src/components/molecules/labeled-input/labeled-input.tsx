import { cn } from "../../../../lib/utils";
import { Input } from "../../atoms/input";
import { Label } from "../../atoms/label";

interface LabeledInputProps {
    children: React.ReactNode;
    className?: string;
    inputId: string;
    placeholder: string;
    type?: string;
}

export default function LabeledInput({ children, className, inputId, placeholder, type = "text", ...props }: LabeledInputProps) {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            <Label htmlFor={inputId}>{children}</Label>
            <Input id={inputId} placeholder={placeholder} type={type} {...props} />
        </div>
    )
};
