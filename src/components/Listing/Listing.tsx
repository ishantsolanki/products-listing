import React, { useEffect } from 'react'
import { List, Record } from 'immutable'
import { connect } from 'react-redux'

import { ProductType } from '../../types/Product'

import { fetchProducts } from '../../redux/actions/productActions'

import ProductCard from '../ProductCard/ProductCard'

export const mapStateToProps = (state: any) => ({
  products: state.products.listing
})

export const mapDispatchToProps = {
  fetchProductsBound: fetchProducts
}

interface Props {
  products: List<Record<ProductType>>
  fetchProductsBound: () => Promise<any>
}

export const Listing: React.FC<Props> = ({
  products,
  fetchProductsBound,
}) => {

  useEffect(() => {
    fetchProductsBound()
  }, [fetchProductsBound])

  return (
    <>
      {products.map(product => (
        <ProductCard id={product.get('id')} />
      ))}
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)
