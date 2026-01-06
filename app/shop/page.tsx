import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { ProductCard } from "@/components/product/product-card"
import { Product } from "@/types"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export const dynamic = 'force-dynamic'

interface ShopPageProps {
    searchParams: {
        category?: string
    }
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
    const supabase = await createClient()
    const category = searchParams.category

    let query = supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false })

    if (category && category !== 'All') {
        query = query.ilike('category', category)
    }

    const { data: products } = await query

    const categories = ["All", "Audio", "Fragrance"]

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container px-4 md:px-6 mx-auto">
                {/* Breadcrumbs / Header */}
                <div className="flex flex-col space-y-4 mb-12">
                    <div className="flex items-center text-muted-foreground text-sm">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight className="h-4 w-4 mx-2" />
                        <span className="text-foreground font-medium">Shop</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Explore the Collection
                    </h1>
                    <p className="text-muted-foreground max-w-2xl text-lg">
                        Discover the latest in high-fidelity audio and premium aesthetics.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={(category === cat) || (cat === 'All' && !category) ? "default" : "outline"}
                            asChild
                            className="rounded-full"
                        >
                            <Link href={cat === 'All' ? '/shop' : `/shop?category=${cat}`}>
                                {cat}
                            </Link>
                        </Button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products && products.length > 0 ? (
                        products.map((product) => (
                            <ProductCard key={product.id} product={product as Product} />
                        ))
                    ) : (
                        <div className="col-span-4 py-24 text-center">
                            <h3 className="text-xl font-bold mb-2">No products found</h3>
                            <p className="text-muted-foreground">Try adjusting your filters.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
