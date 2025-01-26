"use client"
import { useTransition } from "react"
import { authClient } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export const SignoutButton = () => {
  const [isPending, startTransition] = useTransition()
	const router = useRouter()
	async function handleSignout() {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					startTransition(() => {
						router.push("/")
					})
        },
      },
    });
	}
	return (
		<Button onClick={handleSignout} disabled={isPending}>
			{isPending ? "Signing Out..." : "Sign Out"}
		</Button>
	)
}
