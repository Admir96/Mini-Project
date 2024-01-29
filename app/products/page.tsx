'use client'
import { useState } from 'react';
import './products.css'
import { products } from '../interfaces/interfaces';
import { getProducts } from '../utils';


const Products: React.FC = ({}) => {


  const [products, setProduct] = useState<products[]>();
  const [loading,setLoading] = useState(true);

  try{
   getProducts().then((resp) => setProduct(resp));
  }catch(error){
    console.log(error);
    window.alert('something went wrong, check : ' + `${error}`) ;
  }


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

  { (products)?.map((product) =>(
    <tr key={product.id}>
      <td className='productsTd'>{product.name}</td>
      <td className='productsTd'>${product.price}</td>
    <td className='productsTd'>
      {product.linkedProducts ? (
        <ul className='productsThead'>
          {Object.values(product.linkedProducts).map((linkedProduct:products) =>(
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
    </div>
      
       </div>
  );
};
export default Products;