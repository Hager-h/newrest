import React from 'react'
import "./fac.css"
export default function FAQ() {
  return (
    <>
      <div className="faq">
        <div className="container">
          <h2 className="mb-5 pb-2 text-center"> Frequently Asked Questions
          </h2>
          <div className="row">

            <div className="col-md-6 mb-4">
              <h4><span>~ </span> Is Foodera Bread really baked fresh each day?
              </h4>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.

              </p>
            </div>

            <div className="col-md-6 mb-4">
              <h4><span>~</span>  Can I order your products online?

              </h4>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.

              </p>
            </div>


            <div className="col-md-6 mb-4">
              <h4><span>~ </span>Do you bake breads containing animal fats ?
              </h4>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.

              </p>
            </div>


            <div className="col-md-6 mb-4">
              <h4><span>~ </span>When are you opening a shop near me?
              </h4>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.

              </p>
            </div>

          </div>

        </div>


      </div>

      <div className="sub ">
        <div className="container">
          <div className="col-md-6 text-faq">
            <p>                Baked fresh daily by bakers with passion.
            </p>
            <button className=" faq-btn btn buttn ">Learn More</button>

          </div>
        </div>
      </div>
      <div className="subemail">
        <div className="container">
          <h2> Hurry up! Subscribe our newsletter and get 25% Off

          </h2>
          <p>Limited time offer for this month. No credit card required.

          </p>
          <div className="col-md-12 d-flex justify-content-center mb-3">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email Address" />
            <button className="faq-btn btn buttn ">Subscribe</button>

          </div>
        </div>
      </div>
    </>
  )
}
