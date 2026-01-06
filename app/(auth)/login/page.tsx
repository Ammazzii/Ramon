import Link from "next/link"
import { login } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Zap } from "lucide-react"

export default function LoginPage() {
    return (
        <div className="flex min-h-[80vh] items-center justify-center px-4">
            <div className="w-full max-w-md space-y-8 rounded-2xl border border-muted bg-card/50 p-8 backdrop-blur-xl shadow-2xl">
                <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                        <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight">Welcome Back</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Sign in to access your orders and exclusive drops.
                    </p>
                </div>

                <form action={login} className="space-y-6">
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
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Password</Label>
                            <Link
                                href="/forgot-password"
                                className="text-xs text-primary hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="bg-background/50"
                            placeholder="••••••••"
                        />
                    </div>

                    <Button type="submit" className="w-full text-base py-6 rounded-xl">
                        Sign in
                    </Button>
                </form>

                <div className="text-center text-sm">
                    <p className="text-muted-foreground">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="font-semibold text-primary hover:underline">
                            Sign up for free
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
