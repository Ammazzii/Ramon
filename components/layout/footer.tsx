import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        &copy; {new Date().getFullYear()} Ramon. All rights reserved.
                    </p>
                </div>
                <div className="flex gap-6">
                    <Link href="/about" className="text-sm font-medium underline-offset-4 hover:text-primary transition-colors">
                        About
                    </Link>
                    <Link href="/terms" className="text-sm font-medium underline-offset-4 hover:text-primary transition-colors">
                        Terms
                    </Link>
                    <Link href="/privacy" className="text-sm font-medium underline-offset-4 hover:text-primary transition-colors">
                        Privacy
                    </Link>
                </div>
            </div>
        </footer>
    )
}
