import React from 'react'
import "./header.css"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';


import Number from "../numbers/Number"
export default function Header() {
  return (
    <div className="One">
      <div className="header">

        <div className="container">
          <div className=" text col-md--6 ">
            <h1>
              Good food choices are good investments.

            </h1>
            <p className="text-header"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.

            </p>
            <div className="btns">
              <button className="btn buttn ">Order Now<i><AiOutlineShoppingCart /></i> </button>
              <button className="btn buttn butWithoutBorder">Learn More <i > <AiOutlineArrowRight /></i></button>

            </div>
          </div>
          <div className="col-md-6">
          </div>
        </div>

      </div>
      <Number />

    </div>

  )
}
