import Product from "./types/product";


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


  export const products = new Product(
    "1",
    "Product name1",
    101,
    {
        "2": new Product(
            "2",
            "Product name2",
            102
        ),
        "3": new Product(
            "3",
            "Product name3",
            103
        )
    })
    const product2 = new Product(
     "2",
      "Product name2",
      102
  
  );
  const product4 = new Product(
    "4",
    "Product name4",
    104
  );
  const product5 = new Product(
    "5",
    "Product name5",
    105
  );
  const product6 = new Product(
    "5",
    "Product name6",
    105
  );
  const product7 = new Product(
    "5",
    "Product name7",
    105);