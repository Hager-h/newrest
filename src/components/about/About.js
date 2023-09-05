import React from "react";
import imgabout from "../../images/1.png";
import imgabouttwo from "../../images/2.png";
import "./about.css";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

export default function About() {
  console.log("hhh");

  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className=" image col-md-6">
            <img src={imgabout} alt="" />
          </div>
          <div className=" about-text col-md-6">
            <h2>
              We pride ourselves on making real food from the best ingredients.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus.{" "}
            </p>

            <button className="btn buttn ">LEARN MORE</button>
          </div>

          <div className=" about-text mt-5 col-md-6">
            <h2 className="mt-2 pb-2">
              We pride ourselves on making real food from the best ingredients.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus.{" "}
            </p>

            <p>
              <i>
                <AiOutlineCheck />
              </i>{" "}
              Etiam sed dolor ac diam volutpat.
            </p>
            <p>
              <i>
                <AiOutlineCheck />
              </i>{" "}
              Erat volutpat aliquet imperdiet.
            </p>
            <p>
              <i>
                <AiOutlineCheck />
              </i>{" "}
              purus a odio finibus bibendum.
            </p>
            <button className="btn buttn ">LEARN MORE</button>
          </div>

          <div className=" image col-md-6 mt-5">
            <img src={imgabouttwo} alt="" />
          </div>
        </div>
      </div>

      <div className="panner col-mid-12">
        <div className="container">
          <div className="text-part-two">
            <h2>
              When a man's stomach is full it makes no difference whether he is
              rich or poor.
            </h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus.
            </p>
            <a
              className="watch"
              href="https://www.youtube.com/watch?v=bZx8rPd-PKQ"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <BsFillPlayFill />
              </i>{" "}
              Watch Our Story
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
