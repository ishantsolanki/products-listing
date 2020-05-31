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
  <div className="p-4 border-2 rounded-md hover:shadow flex flex-col">
    <div className="font-bold text-teal-600">{product.get('name')}</div>
    <div className="flex-grow">{product.get('description')}</div>
    <div className="font-bold text-teal-800">£{product.get('price')}</div>
  </div>
)

export default connect(mapStateToProps)(ProductCard)
