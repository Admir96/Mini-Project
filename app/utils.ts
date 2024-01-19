export const generatePagination = (currentPage: number, totalPages: number) => {
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(currentPage + 2, totalPages);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    return pages.slice(startPage - 1, endPage);
  };
  
  export const filterProducts = (products: any, query: string) => {
    return Object.values(products).filter((product: any) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  };