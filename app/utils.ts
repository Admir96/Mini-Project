
import axios from "axios";

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

   export const getProducts = ()=> {
    return axios.get('https://junior-test.mntzdevs.com/api/products/',{
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      },
    })
   }

   export const login =async(username:string,password:string) => {
    return axios.post('https://junior-test.mntzdevs.com/api/login/',{username,password})
   }

   export const register = async(data:any) => {
   try{
      await axios.post('https://junior-test.mntzdevs.com/api/register/', {
        Headers:{
          'Content-Type': 'application/json'
        },
        data : {...data}
      });
      const loginData = await login(data.username,data.password);
      console.log(loginData.data)
   } catch(error:any){console.log(error);}
   }
   