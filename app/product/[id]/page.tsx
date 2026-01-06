import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { Product } from "@/types"
import { Button } from "@/components/ui/button"
import { ChevronRight, Truck, ShieldCheck, ShoppingBag } from "lucide-react"

export const dynamic = 'force-dynamic'

interface ProductPageProps {
    params: {
        id: string
    }
}

export default async function ProductPage({ params }: ProductPageProps) {
    const supabase = await createClient()
    const { id } = params

    const { data: product, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single()

    if (error || !product) {
        notFound()
    }

    const p = product as Product

    // Parse images helper
    let images: string[] = []
    try {
        if (p.images) images = JSON.parse(p.images)
    } catch (e) { }
    // Ensure main image is included if not in array
    if (p.image && !images.includes(p.image)) {
        images = [p.image, ...images]
    }
    if (images.length === 0) images = ["/placeholder.png"]

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container px-4 md:px-6 mx-auto">

                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-muted-foreground mb-8">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <span className="text-foreground font-medium truncate max-w-[200px]">{p.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Image Gallery (Simplified for now - Just Main Image) */}
                    <div className="space-y-4">
                        <div className="aspect-square relative overflow-hidden rounded-xl border border-secondary/20 bg-secondary/50">
                            <img
                                src={images[0]}
                                alt={p.name}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        {/* Thumbnails (Visual only for now) */}
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {images.map((img, i) => (
                                <div key={i} className="h-24 w-24 flex-shrink-0 cursor-pointer rounded-lg border border-border overflow-hidden hover:border-primary transition-colors">
                                    <img src={img} alt={`${p.name} view ${i + 1}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col">
                        <div className="mb-2">
                            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wide">
                                {p.category || 'Exclusive'}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{p.name}</h1>
                        <div className="text-3xl font-bold text-accent mb-6">
                            ${Number(p.price).toFixed(2)}
                        </div>

                        <div className="prose prose-invert max-w-none text-muted-foreground mb-8">
                            <p>{p.description}</p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center mb-8 border-t border-b border-border py-6">
                            <div className="flex items-center gap-4">
                                <Button size="lg" className="h-14 px-8 text-lg rounded-full flex-1 sm:flex-none">
                                    <ShoppingBag className="mr-2 h-5 w-5" />
                                    Add to Cart
                                </Button>
                            </div>
                        </div>

                        {/* Features / Trust */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <Truck className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Fast Shipping</h4>
                                    <p className="text-sm text-muted-foreground">Aus-wide delivery within 3-5 days.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Authenticity Guarantee</h4>
                                    <p className="text-sm text-muted-foreground">100% genuine products verified.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
