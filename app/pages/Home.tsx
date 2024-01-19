import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { generatePagination, filterProducts } from '@/app/utils';
import  Product   from '@/app/types/product';


const PAGE_SIZE = 3;

const Page = () => {
  const router = useRouter();
  const { query, page } = router.query;
  const [currentQuery, setCurrentQuery] = useState(query as string || '');
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const [Product, setProduct] = useState<Product | null>(null);

  const filteredProducts = filterProducts(Product, currentQuery);
  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);
  const paginatedProducts = generatePagination(currentPage, totalPages).map(
    (page) => filteredProducts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
  );

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentQuery(event.target.value);
    router.push({ query: { ...router.query, query: event.target.value } }, undefined, { shallow: true });
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    router.push({ query: { ...router.query, page: newPage } }, undefined, { shallow: true });
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch('/api/products?id=1');
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();

  }, []);

  return (
    <div>
      {Product ?(
        <div>
      <h1>Product List</h1>
      <input
        type="text"
        value={currentQuery}
        onChange={handleQueryChange}
        placeholder="Filter by product name..."
      />
      <ul>
        {paginatedProducts[currentPage - 1].map((product: any) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <div>
        {generatePagination(currentPage, totalPages).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
         ):(
           <h3>Loading...</h3>     
      )}
       </div>
  );
};
export default Page;