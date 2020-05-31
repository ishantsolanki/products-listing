import React, { useEffect } from 'react'
import { List, Record } from 'immutable'
import { connect } from 'react-redux'

import { ProductType } from '../../types/Product'

import { fetchProducts, fetchForexRates } from '../../redux/actions/productActions'

import ProductCard from '../ProductCard/ProductCard'

export const mapStateToProps = (state: any) => ({
  products: state.products.listing
})

export const mapDispatchToProps = {
  fetchProductsBound: fetchProducts,
  fetchForexRatesBound: fetchForexRates
}

interface Props {
  products: List<Record<ProductType>>
  fetchProductsBound: () => Promise<any>
  fetchForexRatesBound: () => Promise<any>
}

export const Listing: React.FC<Props> = ({
  products,
  fetchProductsBound,
  fetchForexRatesBound,
}) => {

  useEffect(() => {
    fetchForexRatesBound().then(fetchProductsBound)
  }, [fetchForexRatesBound, fetchProductsBound])

  return (
    <div className="grid grid-cols-3 grid-flow-row gap-4 mr-5">
      {products.map(product => (
        <ProductCard key={product.get('id')} id={product.get('id')} />
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)
