import React, { useState } from 'react'
import "./explore.css"

import Data from "../data"
import Open from "../Open/Open"
export default function Explore() {
  const [openModel, setopenModel] = useState(false)

  const hideModel = () => {
    setopenModel(false)
  }
  const exportItems = Data.map(item => {

    return (
      <div key={Math.random()} className=" menu col-md-4">
        <img src={item.img} alt="sandwich" />
        <h4 className="mt-5"> {item.title}
        </h4>
        <h5>{item.time}

        </h5>
        <h3>{item.price} <span>{item.lastPrice} </span>
        </h3>
        <button onClick={() => {
          setopenModel(true)
        }} className="btn buttn ">Order Now</button>

      </div>
    )

  })
  return (
    <div className='export'>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">

            <h2 className="text-center mt-5 mb-3">Explore Our Foods</h2>
            <p className="text-center explore-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.

            </p>
          </div>
          <div className=" row mt-5 mb-5">

            {exportItems}
          </div>
        </div>

      </div>
      {openModel &&
        <Open show={openModel} setopen={hideModel} />}
    </div>
  )
}
