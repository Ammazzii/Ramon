const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    const products = [
        {
            name: "AirPods Pro (2nd Gen)",
            description: "Active Noise Cancellation, Adaptive Transparency, and Personalized Spatial Audio.",
            price: 249.99,
            image: "https://images.unsplash.com/photo-1603351154351-5cf99703f6a8?q=80&w=2071&auto=format&fit=crop",
            category: "Electronics",
            stock: 50,
        },
        {
            name: "Dior Sauvage Elixir",
            description: "An extraordinarily concentrated fragrance steeped in the emblematic freshness of Sauvage.",
            price: 180.00,
            image: "https://images.unsplash.com/photo-1594035910387-fea4779426e9?q=80&w=2000&auto=format&fit=crop",
            category: "Cologne",
            stock: 30,
        },
        {
            name: "Bleu de Chanel",
            description: "A wood-aromatic fragrance for the man who defies convention.",
            price: 145.00,
            image: "https://images.unsplash.com/photo-1523293188086-b589b9bee896?q=80&w=2000&auto=format&fit=crop",
            category: "Cologne",
            stock: 25,
        },
        {
            name: "AirPods Max - Silver",
            description: "Computational audio. High-fidelity audio. Active Noise Cancellation. Transparency mode.",
            price: 549.00,
            image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=2070&auto=format&fit=crop",
            category: "Electronics",
            stock: 15,
        },
    ]

    for (const product of products) {
        await prisma.product.create({
            data: {
                name: product.name,
                description: product.description,
                price: product.price,
                images: JSON.stringify([product.image]),
                category: product.category,
                stock: product.stock,
            },
        })
    }

    console.log('Seed data inserted successfully')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
