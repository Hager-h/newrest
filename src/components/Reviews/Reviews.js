import React from 'react'
import "./rev.css"
export default function Reviews() {
  return (
    <div className="test  ">

      <div className="container">
        <h3 className=" text-light pb-1 pt-3">Testimonials</h3>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>


          <div className="carousel-inner">

            <div className="carousel-item active" data-bs-interval="10000">
              <img className="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" />
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h5 className="mb-3">Maria Kate</h5>
                  <p>Photographer</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                    nesciunt sint eligendi reprehenderit reiciendis            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit

                  </p>

                </div>
              </div>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="far fa-star fa-sm"></i></li>
              </ul>
            </div>
            <div className="carousel-item" data-bs-interval="2000" >
              <img className="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" />
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h5 className="mb-3">John Doe</h5>
                  <p>Web Developer</p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                    nesciunt sint eligendi reprehenderit reiciendis            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit

                  </p>
                </div>
              </div>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="far fa-star fa-sm"></i></li>
              </ul>
            </div>
            <div className="carousel-item" data-bs-interval="3000" >
              <img className="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" />
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h5 className="mb-3">Anna Deynah</h5>
                  <p>UX Designer</p>

                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2"></i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                    nesciunt sint eligendi reprehenderit reiciendis            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit

                  </p>
                </div>
              </div>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="fas fa-star fa-sm"></i></li>
                <li><i className="far fa-star fa-sm"></i></li>
              </ul>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </div>
  )
}
