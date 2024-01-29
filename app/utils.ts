import axios, { AxiosError, AxiosResponse } from 'axios'; 
import {products, regUser, logUser} from './interfaces/interfaces'




 axios.defaults.baseURL = 'https://junior-test.mntzdevs.com'; 
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('key');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);}
  );


export const getProducts = async () =>{ Promise<products[]>

  let temp:products[] =[];
  await axios.get<products[]>('/api/products/',{headers:{

  'Content-Type': 'application/json',
}})
  .then((response: AxiosResponse<products[]>) => {
   
   temp = response.data as products[];
   corsHeaders(response);
    handleResponse(response);
    console.log(response.data);

  })
  .catch((error) => {
    console.log(error)
  });
  return temp;

}


  export const register = async (newUser:regUser) => {

 return await axios.post<regUser>('/api/register/', newUser)
  .then((response: AxiosResponse<regUser>) => {
    corsHeaders(response);
    handleResponse(response);
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error)
  });
}

export const login = async(user:logUser) =>{

  return await axios.post<logUser>('/api/login/', user)
  .then((response: AxiosResponse<regUser>) => { 
    corsHeaders(response);
    handleResponse(response);
    console.log(response.data);

  })
  .catch((error) => {
    console.log(error)
})
}

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

  function handleResponse(response:AxiosResponse<regUser | logUser | products[]>){

    if(response.status === 400)
    throw new AxiosError('Bad Request','400');
  else if(response.status === 500)
  throw new AxiosError('Internal Server Error','500');
else {
  const success = response.request;
   return success.status(200).json(response);
}
  }

function corsHeaders (response:AxiosResponse<regUser | logUser | products[]>){
  return [  response.headers.setHeader("Access-Control-Allow-Origin", "*"),
  response.headers.setHeader("Access-Control-Allow-Credentials", "true"),
  response.headers.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT"),
  response.headers.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
]
}
