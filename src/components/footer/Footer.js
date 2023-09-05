import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsGeoAltFill } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BiLogoInstagram } from 'react-icons/bi';
import { BiLogoLinkedin } from 'react-icons/bi';
import { LuClock9 } from 'react-icons/lu';

import "./footer.css"
export default function Footer() {
    return (
        <div className="footer">
            <footer>
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-md-6 col-lg-3 about-footer">
                                <h3>Lorem Ipsum </h3>
                                <ul>
                                    <li><a href="tel:(010) 1234 4321"><i > <BsFillTelephoneFill /></i>(010) 1234 4321</a></li>
                                    <li><i><BsGeoAltFill /></i>
                                        1 / 105 Bay Lights,
                                        <br />Lorem Ipsum,
                                        <br />LIC 3201
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-2 page-more-info">
                                <div className="footer-title">
                                    <h4>Page links</h4>
                                </div>
                                <ul>
                                    <li><a href="/home">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/test">Testimonial</a></li>
                                    <li><a href="/blog">Blog</a></li>
                                </ul>
                            </div>

                            <div className="col-md-6 col-lg-3 page-more-info">
                                <div className="footer-title">
                                    <h4>More Info</h4>
                                </div>
                                <ul>
                                    <li><a href="/lorem">Lorem ipsum</a></li>
                                    <li><a href="/do">Dolor sit amet</a></li>
                                    <li><a href="/co">Consectetur Adipisicing </a></li>
                                    <li><a href="con">Contact</a></li>

                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-4 open-hours">
                                <div className="footer-title">
                                    <h4>Open hours</h4>
                                    <ul className="footer-social">
                                        <li><a href="/" ><i ><FaFacebookF /> </i></a></li>
                                        <li><a href="/" ><i><BiLogoInstagram /></i></a></li>
                                        <li><a href="/" ><i>< BiLogoLinkedin /></i></a></li>

                                    </ul>
                                </div>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td><i><LuClock9 /></i>Monday</td>
                                            <td>9:00am - 5:00pm</td>
                                        </tr>
                                        <tr>
                                            <td><i><LuClock9 /></i>Friday</td>
                                            <td>9:00am - 4:00pm</td>
                                        </tr>
                                        <tr>
                                            <td><i><LuClock9 /></i>Sturday</td>
                                            <td>9:00am - 1:30pm</td>
                                        </tr>
                                        <tr>
                                            <td><i><LuClock9 /></i>Sunday</td>
                                            <td>9:30am - 12:00pm</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="row">
                            <div className="col-sm-4">
                                <a href="/">Privacy policy</a>
                            </div>
                            <div className="col-sm-8">
                                <p>Made With Love By Hogo @ 2023 All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </div>

    )
}
