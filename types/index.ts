export interface Product {
    id: string
    name: string
    description: string | null
    price: number
    image?: string
    images?: string // JSON string in DB, but we might parse it out later
    category?: string
    stock_quantity: number
    is_active: boolean
    created_at: string
}

// Helper specific for the card component if needed, but Product should suffice
