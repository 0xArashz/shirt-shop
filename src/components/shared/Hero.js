import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import "../../assets/styles/Hero.css";
import banner from "../../assets/images/banner.png";


const seasons = ["Winter", "Spring", "Summer", "Autumn"];

const Hero = () => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex((index) => index + 1),
            2500
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <main>
            <section className="hero">
                <div className="hero-text">
                    <h2>Starting At Only $0.5</h2>
                    <h1>
                        <TextTransition className="season" springConfig={presets.wobbly}>
                            {seasons[index % seasons.length]}
                        </TextTransition>
                        <span>Special Collection</span>
                    </h1>
                    <p>Brand day flat 20% off and free shipping</p>
                    <div className="info">
                        <button className="shop-now-btn">Shop Now</button>
                        <div className="phone-info">
                            <i className="fa-solid fa-phone-volume"></i>
                            <span className="phone-number">+(00)-000-000-0000</span>
                        </div>
                    </div>
                </div>
                <div className="hero-banner">
                    <img src={banner} alt="banner" />
                    <h1>SHIRT SHOP</h1>
                </div>
                <div className="shapes">
                    <div className="orange-circles">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="shirt-icon">
                        <i className="fa-solid fa-shirt"></i>
                    </div>
                </div>
            </section>
        </main>
    );
};


export default Hero;