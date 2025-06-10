import React from 'react';
import './intro.css';
import {Link} from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="introText">About <span className="introName">Dr. Xiangfei Li </span> <br /></span>
                <p className="introPara">Tutoring is a meaningful part of my life that reminds me daily of the value of learning and growth. I’m passionate about teaching and specialize in making complex math concepts easy, engaging, and accessible for every student.</p>            
                <Link><button className="btn"><img src={btnImg} alt = "Consultation" className='btnImg'/>Book a Free Consultation!</button></Link>
            </div>
            
        </section>
    )
}

export default Intro;