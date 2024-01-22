
import { useEffect, useState } from 'react';
import { getProducts } from '@/app/utils';


const Products: React.FC = () => {

  const [products, setProduct] = useState({});
  const [loading,setLoading] = useState(true);

 
  useEffect(() => {
 getProducts().then((res) => res.data()).then((resp) => {
  setProduct(resp.data);
  setLoading(false);
 });
},[]);
  

  return (
    <div className='"container mx-auto"'>   
        <div>
      <h1>Product List</h1>
      <input
        type="text"
        placeholder="Filter by product name..."/>
        <table>
        <thead>
      <tr>
          <th>Name</th>
          <th>Price</th>          
          <th>Linked Products</th>
       </tr>
        </thead>
<tbody>

  {Object.values(products).map((product :any) =>(
    <tr key={product.id}>
      <td>{product.name}</td>
      <td>${product.price}</td>
    <td>
      {product.linkedProducts ? (
        <ul>
          {Object.values(product.linkedProducts).map((linkedProduct:any) =>(
            <li key={linkedProduct.name}>
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
           <h3>Loading...</h3>     
      
       </div>
  );
};
export default Products;