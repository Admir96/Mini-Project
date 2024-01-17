
import { Product } from '../types/products'

interface ProductListProps {
  products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </li>
      ))}
    </ul>
  )
}

export default ProductList