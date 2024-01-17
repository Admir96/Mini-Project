import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '../types/products'

const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
  },
  // ... more products
]

export default function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
  
}