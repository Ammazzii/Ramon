import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Product } from "@/types"

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    // Handle both mock data (image) and future database data (images array)
    let mainImage = "/placeholder.png"

    if (product.image) {
        mainImage = product.image
    } else if (product.images) {
        try {
            const images = JSON.parse(product.images)
            if (Array.isArray(images) && images.length > 0) mainImage = images[0]
        } catch (e) {
            // console.error("Failed to parse images", e)
        }
    }

    return (
        <Card className="overflow-hidden transition-all hover:shadow-lg border-muted bg-card/50 backdrop-blur-sm">
            <Link href={`/product/${product.id}`}>
                <div className="aspect-square relative overflow-hidden bg-secondary/50 group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={mainImage}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            </Link>
            <CardContent className="p-4">
                {product.category && (
                    <div className="mb-2 text-xs font-medium text-accent uppercase tracking-wider">{product.category}</div>
                )}
                <Link href={`/product/${product.id}`} className="hover:text-primary transition-colors">
                    <h3 className="font-bold leading-tight tracking-tight text-lg">{product.name}</h3>
                </Link>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                </p>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4 pt-0">
                <div className="font-bold text-xl">${Number(product.price).toFixed(2)}</div>
                <Button size="sm" className="rounded-full">Add to Cart</Button>
            </CardFooter>
        </Card>
    )
}
