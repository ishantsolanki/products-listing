import React from 'react'
import { Record } from 'immutable'
import { connect } from 'react-redux'

import { ProductType } from '../../types/Product'
import { ReduxState } from '../../redux/reducer/rootReducer'

import { getProductById, getProductPriceinGBP } from '../../redux/selectors'

const mapStateToProps = (state: ReduxState, { id }: { id: string}) => ({
  product: getProductById(id)(state),
  priceInGBP: getProductPriceinGBP(id)(state)
})

interface Props {
  product: Record<ProductType> | undefined
  priceInGBP: number | null
}

export const ProductCard: React.FC<Props> | undefined = ({ product, priceInGBP }) => (
  <>
    {product && (
      <div className="p-4 border-2 rounded-md hover:shadow flex flex-col">
        <div className="font-bold text-teal-600">{product.get('name')}</div>
        <div className="flex-grow">{product.get('description')}</div>
        {priceInGBP && (
          <div className="font-bold text-teal-800">£{priceInGBP}</div>
        )}
      </div>
    )}
  </>
)

export default connect(mapStateToProps)(ProductCard)
