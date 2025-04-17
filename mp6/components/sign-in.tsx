import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      className="flex align-middle"
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button type="submit" className="h-3/5 my-auto mx-5 p-1 rounded bg-teal-600 text-white">Signin w/ GitHub</button>
    </form>
  )
} 