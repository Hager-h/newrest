import React, { Fragment } from 'react'
import "./open.css"
import Data from "../data"
import { CiLocationArrow1 } from 'react-icons/ci';

export default function Open({ show, setopen }) {


  const dataItems = Data.map(items => {
    return (
      <Fragment key={Math.random()}>
        <option value="1">{items.title}-{items.price}</option>
      </Fragment>

    )

  })


  return (
    <div>
      <div className="open ">
        <div className="container">
          <p onClick={setopen} className="close ">x</p>
          <h2 className="mb-4 mt-2">Make Your Order Now!
          </h2>
          <div className='row'>

            <div className=" col-md-6 mb-3">
              <input type="text" className="form-control" id="exampleFormControlInput11" placeholder="Your Name" />
            </div>
            <div className=" col-md-6 mb-3">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email Adress" />
            </div>

            <div className=" col-md-12 mb-3">
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Address" />
            </div>

            <div className=" col-md-12 mb-3">
              <input type="number" className="form-control" id="exampleFormControlInput12" placeholder="Zip Code" />
            </div>

            <div className=" col-md-12 mb-3">
              <input type="number" className="form-control" id="exampleFormControlInput13" placeholder="Mobile No." />
            </div>
            <div className=" col-md-12 mb-3">

              <select className="form-select" aria-label="Default select example">
                {dataItems}
              </select>
            </div>

            <button className="btn buttn ">Send Message <i ><CiLocationArrow1 /></i></button>

          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  )
}

