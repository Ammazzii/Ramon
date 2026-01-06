import Link from "next/link"
import { Product } from "@prisma/client"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    // Parse images (assuming stored as JSON array string)
    const images = JSON.parse(product.images as string)
    const mainImage = images[0] || "/placeholder.png"

    return (
        <Card className="overflow-hidden transition-all hover:shadow-lg">
            <Link href={`/product/${product.id}`}>
                <div className="aspect-square relative overflow-hidden bg-secondary">
                    <img
                        src={mainImage}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                </div>
            </Link>
            <CardContent className="p-4">
                <div className="mb-2 text-sm text-muted-foreground">{product.category}</div>
                <Link href={`/product/${product.id}`} className="hover:underline">
                    <h3 className="font-semibold leading-none tracking-tight">{product.name}</h3>
                </Link>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                </p>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4 pt-0">
                <div className="font-bold">${Number(product.price).toFixed(2)}</div>
                <Button size="sm">Add to Cart</Button>
            </CardFooter>
        </Card>
    )
}
