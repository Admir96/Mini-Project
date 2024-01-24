'use client'
import { useEffect, useState } from 'react';
import { getProducts } from '@/app/utils';
import './products.css'

const Products: React.FC = ({}) => {

  const [products, setProduct] = useState({});
  const [loading,setLoading] = useState(true);

 
  useEffect(() => {
 getProducts().then((res:any) => res.data()).then((resp:any) => {
  setProduct(resp.data);
  setLoading(false);
 });
},[]);
  

  return (
    <div className='products'>   
        <div className='productsContent'>
      <h1 className='productsTitle'>Product List</h1>
      <input className='border border-gray-400 p-1 w-full rounded-lg'
        type="text"
        placeholder="Filter by product name..."/>
        <table className='productsTable'>
        <thead className='productsThead'>
      <tr>
          <th className='productsTh'>Name</th>
          <th className='productsTh'>Price</th>          
          <th className='productsTh'>Linked Products</th>
       </tr>
        </thead>
<tbody>

  {Object.values(products).map((product :any) =>(
    <tr key={product.id}>
      <td className='productsTd'>{product.name}</td>
      <td className='productsTd'>${product.price}</td>
    <td className='productsTd'>
      {product.linkedProducts ? (
        <ul className='productsThead'>
          {Object.values(product.linkedProducts).map((linkedProduct:any) =>(
            <li className='productsTd' key={linkedProduct.name}>
              <span>{linkedProduct.name}</span> - ${linkedProduct.price}
            </li>
          ))}
        </ul>
      ) :(
        'xxxxx'
      )}
    </td>
    </tr>
  ))}
</tbody>
        </table>   
      <div>   
          <button>
            page
          </button>
      </div>
           <h3>Loading...</h3>     
    </div>
      
       </div>
  );
};
export default Products;