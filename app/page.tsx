import Link from "next/link"
import { ArrowRight, Zap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product/product-card"

// Mock data for Phase 1 - Foundation
const FEATURED_PRODUCTS = [
  {
    id: "1",
    name: "AirPods Pro Gen 2",
    description: "Active Noise Cancellation",
    price: 399,
    image: "/images/airpods-placeholder.jpg",
  },
  {
    id: "2",
    name: "Dior Sauvage Elixir",
    description: "60ml Concentrated Perfume",
    price: 240,
    image: "/images/cologne-placeholder.jpg",
  },
  {
    id: "3",
    name: "Sony WH-1000XM5",
    description: "Industry Leading Noise Canceling",
    price: 549,
    image: "/images/sony-placeholder.jpg",
  },
  {
    id: "4",
    name: "Bleu de Chanel",
    description: "Parfum Spray 100ml",
    price: 260,
    image: "/images/chanel-placeholder.jpg",
  }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden py-24 text-center md:py-32">
        {/* Abstract Background Blurs */}
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Zap className="mr-2 h-4 w-4 fill-current" />
              New Drop Available
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Elevate Your <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Daily Vibe.
              </span>
            </h1>

            <p className="max-w-[800px] text-lg text-muted-foreground md:text-xl">
              The hottest tech and fragrances, curated for the next generation.
              Authentic. Premium. Yours.
            </p>

            <div className="flex flex-col gap-4 min-[400px]:flex-row pt-4">
              <Button size="lg" className="rounded-full text-lg h-12 px-8" asChild>
                <Link href="/shop">
                  Shop Drop <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="pt-12 grid grid-cols-3 gap-8 text-center text-sm text-muted-foreground">
              <div className="flex flex-col items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span>Auth Verified</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Fast Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="font-bold text-lg text-foreground">AU</span>
                <span>Aus Owned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Trending Now</h2>
            <Button variant="link" className="text-primary" asChild>
              <Link href="/shop">View All Drops</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PRODUCTS.map((product) => (
              // @ts-ignore - Temporary ignore until we fix the ProductCard type
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
