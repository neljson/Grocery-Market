import React, { useState, useEffect } from 'react';
import Product from './Product.js';
import useFetch from './useFetch.js';
import Loader from './Loader.js';

export default function Products(props) {
  // const [products, setProducts] = useState([]);
  const products = [
    {
      description: '200g cheese block',
      id: 1,
      image:
        'https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png',
      name: 'Cheese',
      price: 1.5,
      price_id: 'price_1JAiEPAvqK1K95t2AWfdBsYL',
    },
    {
      description: '200ml milk bottle',
      id: 2,
      image:
        'https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/milk.png',
      name: 'Milk',
      price: 3.6,
      price_id: 'price_1JAiBtAvqK1K95t2cS7IrvkR',
    },
    {
      description: '1 whole tomato',
      id: 3,
      image:
        'https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/tomato.png',
      name: 'Tomato',
      price: 0.5,
      price_id: 'price_1JAiAQAvqK1K95t2WPwukaX6',
    },
    {
      description: '500g pineapple',
      id: 4,
      image:
        'https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/pineapple.png',
      name: 'Pineapple',
      price: 2.0,
      price_id: 'price_1JAiErAvqK1K95t2vUDVUVe3',
    },
  ];
  // const { get, loading } = useFetch(
  //   'https://react-tutorial-demo.firebaseio.com/'
  // );

  // useEffect(() => {
  //   get('supermarket.json')
  //     .then((data) => {
  //       console.log(data);
  //       setProducts(data);
  //     })
  //     .catch((error) => console.log('Could not load products', error));
  // }, []);

  return (
    <div className='products-layout'>
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className='products-grid'>
        {/* loading  && <Loader /> */}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              details={product}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
