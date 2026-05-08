import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
    return (
        <div>
            <Hero />
            <LeftSection
                imgURL="/images/kite.png"
                productName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemoText={
                    <>
                        Try Demo <i class="fa-solid fa-arrow-right-long"></i>
                    </>
                }
                learnMoreText={
                    <>
                        Learn More <i class="fa-solid fa-arrow-right-long"></i>
                    </>
                }
                tryDemoURL="https://kite-demo.zerodha.com/"
                learnMoreURL="https://zerodha.com/products/kite"
                G_Play="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
                A_Store="https://apps.apple.com/in/app/kite-zerodha/id1449453802"
            />
            <RightSection
                imgURL="/images/console.png"
                padding="11rem"
                productName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnMoreText={
                    <>
                        Learn More <i class="fa-solid fa-arrow-right-long"></i>
                    </>
                }
                learnMoreURL="https://zerodha.com/products/console"
            />
            <LeftSection
                imgURL="/images/coin.png"
                productName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemoURL="https://kite-demo.zerodha.com/"
                tryDemoText={
                    <>
                        Coin <i class="fa-solid fa-arrow-right-long"></i>
                    </>
                }
                G_Play="https://play.google.com/store/apps/details?id=com.zerodha.coin"
                A_Store="https://apps.apple.com/in/app/coin-by-zerodha/id1392892554"
            />
            <RightSection
                imgURL="/images/landing.svg"
                padding="10rem"
                productName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                learnMoreText={
                    <>
                        Kite Connect <i class="fa-solid fa-arrow-right-long"></i>
                    </>
                }
                learnMoreURL="https://zerodha.com/products/api/"
            />
            <LeftSection
                imgURL="/images/varsity-products.svg"
                height="60%"
                productName="Varsity mobile"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                G_Play="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
                A_Store="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
            />
            <p className="fs-5 text-center mt-5 p-5">Want to know more about our technology stack? Check out the <a href="https://zerodha.tech/">Zerodha.tech</a> blog.</p>
            <Universe />
        </div>
    );
}

export default ProductPage;
