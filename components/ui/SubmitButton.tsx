import { Button } from "@/components/ui/button"
import Image from "next/image"
interface ButtonProps {
    isloading: boolean,
    className?: string,
    children: React.ReactNode
}

const SubmitButton = ({isloading , className , children}: ButtonProps) => {
 
    return (
        <Button type="submit" disabled={isloading}
        className={className ?? 'shad-primary-btn w-full'} >
            {
                 isloading ? (
                    <div className="flex items-center gap-4">
                        <Image src="/assets/logo/loader.svg" width={24} height={24} className="animate-spin" alt="spinner"/>
                        Loading...
                    </div>
                 ) : children
            }
        </Button>
    )
}

export default SubmitButton