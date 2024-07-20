import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product';

export interface IProduct{
  id: number,
  name: string,
  price: number,
}

function App() {

  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      name: 'soap',
      price: 20,
    },
    {
      id: 2,
      name: 'toothpaste',
      price: 10,
    },
  ])
  return (
    <div>
      {
        products.map((item, ind) => {
          return <Product key={ind} product={item}/>
        })
      }
    </div>
  );
}

export default App;
