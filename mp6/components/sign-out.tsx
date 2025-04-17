import { signOut } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      className="flex align-middle"
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button className="h-3/5 my-auto mx-5 p-1 rounded bg-blue-600 text-white">Sign out</button>
    </form>
  )
} 