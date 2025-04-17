import { auth } from "@/auth";
import Image from "next/image";

export default async function UserTag() {
    const session = await auth();

    if (!session?.user) {
        return (
            <></>
        );
    }

    return (
        <div className="mt-10 w-fit border-4 border-sky-300 rounded justify-self-center bg-sky-300">
            <Image 
                src={session.user?.image ? session.user?.image : ""} 
                alt="User Icon" 
                height={150} 
                width={150}
                className="h-1/2"
            />
            <p className="text-black text-center">{session.user?.name}</p>
        </div>
    )
}