
import { auth } from "@/auth";
import Nav from "./nav";
import SignIn from "./sign-in";
import SignOut from "./sign-out";

export default async function Header() {
    const session = await auth();

    return (
        <>
            <header className="my-4 bg-sky-300 mt-0 h-12 content-center flex justify-between">
                <h1 className="text-2xl ml-4 font-bold inline">OAuth Demo</h1>
                { !session?.user ? <SignIn /> : <SignOut />}
            </header>
            <Nav />
        </>
    )
}