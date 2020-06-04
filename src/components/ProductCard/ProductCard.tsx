import React from "react"
import { Record } from "immutable"
import { connect } from "react-redux"

import { ProductType } from "../../types/Product"
import { ReduxState } from "../../redux/reducer/rootReducer"
import {
  deleteProduct,
  setProductUpdating,
} from "../../redux/actions/productActions"
import "./ProductCard.css"

import { getProductById, getProductPriceinGBP } from "../../redux/selectors"

const mapStateToProps = (state: ReduxState, { id }: { id: string }) => ({
  product: getProductById(id)(state),
  priceInGBP: getProductPriceinGBP(id)(state),
})

const mapDispatchToProps = {
  deleteProductBound: deleteProduct,
  setProductUpdatingBound: setProductUpdating,
}

interface Props {
  product: Record<ProductType> | undefined
  priceInGBP: number | null
  deleteProductBound: (id: string) => Promise<any>
  setProductUpdatingBound: (product: Record<ProductType>) => void
}

export const ProductCard: React.FC<Props> | undefined = ({
  product,
  priceInGBP,
  deleteProductBound,
  setProductUpdatingBound,
}) => {
  const onDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (product) {
      if (
        window.confirm(
          `Are you sure you want the delete ${product.get("name")}?`,
        )
      ) {
        deleteProductBound(product.get("id"))
      }
    }
  }
  const onUpdateClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (product) {
      setProductUpdatingBound(product)
    }
  }

  return (
    <>
      {product && (
        <div className="p-4 border-2 rounded-md hover:shadow flex flex-col hover:visible product-card">
          <div className="font-bold text-teal-600">{product.get("name")}</div>
          <div className="flex-grow">{product.get("description")}</div>
          <div className="flex flex-row justify-between">
            {priceInGBP && (
              <div className="font-bold text-teal-800 flex-grow">
                £{priceInGBP}
              </div>
            )}
            <button
              className="self-end py px-2 rounded border border-teal-600 bg-teal-100 btn-action invisible mr-2 text-teal-800"
              onClick={onUpdateClick}
            >
              update
            </button>
            <button
              className="self-end py px-2 rounded border border-teal-600 bg-teal-100 btn-action invisible text-teal-800"
              onClick={onDeleteClick}
            >
              delete
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
