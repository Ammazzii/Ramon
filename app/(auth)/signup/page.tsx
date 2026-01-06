import Link from "next/link"
import { signup } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignupPage() {
    return (
        <div className="flex min-h-[80vh] items-center justify-center px-4">
            <div className="w-full max-w-md space-y-8 rounded-2xl border border-muted bg-card/50 p-8 backdrop-blur-xl shadow-2xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight">Create Account</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Join Ramon to unlock member-only pricing and faster checkout.
                    </p>
                </div>

                <form action={signup} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                            id="fullName"
                            name="fullName"
                            type="text"
                            autoComplete="name"
                            required
                            className="bg-background/50"
                            placeholder="Ramon User"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email address</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="bg-background/50"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="bg-background/50"
                            placeholder="••••••••"
                        />
                    </div>

                    <Button type="submit" className="w-full text-base py-6 rounded-xl">
                        Create Account
                    </Button>
                </form>

                <div className="text-center text-sm">
                    <p className="text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/login" className="font-semibold text-primary hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
