import React from 'react'
import { Record } from 'immutable'
import { connect } from 'react-redux'

import { ProductType } from '../../types/Product'

import { getProductById } from '../../redux/selectors'

const mapStateToProps = (state: any, { id }: { id: string}) => ({
  product: getProductById(id)(state)
})

interface Props {
  product: Record<ProductType> | null
}

export const ProductCard: React.FC<Props> = ({ product }) => product && (
  <div>
    <span>{product.get('name')}</span>
    <span>{product.get('description')}</span>
    <span>{product.get('price')}</span>
    <span>{product.get('currency')}</span>
  </div>
)

export default connect(mapStateToProps)(ProductCard)
