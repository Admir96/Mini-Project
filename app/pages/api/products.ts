import { NextApiRequest, NextApiResponse } from 'next';
import  Product  from '../../types/product';

const products = [
  new Product(
    '1',
    'Product 1',
    100,
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
    }
  ),

];
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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {

    const productId = req.query.id as string;
    const product = products.find((p) => p.id === productId);

    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    res.status(200).json(product);
  } else {
  
    res.status(405).json({ message: 'Method not allowed' });
  }
}