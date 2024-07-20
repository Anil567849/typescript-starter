import React from 'react'
import { IProduct } from '../App'

interface IProps{
    key: number,
    product: IProduct,
}

function Product({key, product}: IProps) {
  return (
    <>
        <div>Name: {product.name}</div>
        <div>Price: {product.price}</div>
    </>
  )
}

export default Product