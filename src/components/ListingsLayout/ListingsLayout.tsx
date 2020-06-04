import React from "react"
import Listing from "../Listing/Listing"
import Sidebar from "../Sidebar/Sidebar"

export const ListingsLayout = () => {
  return (
    <div className="container flex flex-row mx-auto py-5">
      <div className="w-3/4">
        <Listing />
      </div>
      <div className="w-1/4">
        <Sidebar />
      </div>
    </div>
  )
}

export default ListingsLayout
