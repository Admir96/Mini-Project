class Product {

    id:string;
    name:string
    price : number;
    public linkedProducts?: { [key: string]: Product } 

  constructor( id:string, name:string,  price:number, linkedProducts = {}) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.linkedProducts = linkedProducts;
  }

}


export default Product;