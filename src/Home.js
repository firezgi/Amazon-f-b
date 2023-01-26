import React from 'react';
import "./Home.css";
import Product from './Product';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


function Home() {
    return (
      <div className="home">
        <div className="home__container">
          <Carousel
            showIndicators={false}
            showThumbs={false}
            className="home__image"
            autoPlay
            interval={3000}
            infiniteLoop
          >
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/Movie/CIND_2021_GWBleedingHero_1500x600_PRE_Final_en-US_PVD7333_Cinderella._CB664771797_.jpg" />
            </div>
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/OTC/Homepage/OTC_GW-desktop_Phase-2-v1_1x-1500x600._CB669940857_.jpg" />
            </div>
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/creative/amazon/21-1109-ACQ-Gateway-BAU-JulyGateway_Updates_DT_ENG_1x_1500x600_V01._CB666370602_.jpg" />
            </div>
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Y2UwYWM0MDQt/Y2UwYWM0MDQt-YWViNmFlODkt-w1500._CB668786370_.jpg" />
            </div>
            <div>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-NzNkM2UxYTgt-w1500._CB663799083_.jpg" />
            </div>
          </Carousel>

          {/* <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          /> */}

          <div className="home__row">
            <Product
              id="12321341"
              title='ASUS Chromebook Flip C436 2-in-1 Laptop, 14" Touchscreen FHD 4-Way NanoEdge, Intel Core i3-10110U, 128GB PCIe SSD, Fingerprint, Backlit KB, Wi-Fi 6, Chrome OS, C436FA-DS388T, Magnesium-Alloy, Silver
Visit the ASUS Store'
              price={781.13}
              rating={5}
              image="https://m.media-amazon.com/images/I/91QWgeJHMAL._AC_SR180,120_QL70_.jpg"
            />
            <Product
              id="49538094"
              title="Fullstar Mandoline Slicer Spiralizer Vegetable Slicer - Vegetable Chopper Onion Chopper Food Chopper Vegetable Spiralizer Mandoline Slicer Cutter Chopper and Grater Slicer Zucchini Spaghetti Maker"
              price={36.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/91FaDhyATZL._AC_UL320_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="4903850"
              title="New Apple Watch Series 6 (GPS, 40mm) - Blue Aluminum Case with Deep Navy Sport Band"
              price={349.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/71bf9IpGjtL._AC_UY218_.jpg"
            />
            <Product
              id="23445930"
              title="Boyata M5 Laptop Stand, Aluminum Ergonomic Laptop Riser Computer Stand for Desk"
              price={25.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/71EkmPeyI0L._AC_UY218_.jpg"
            />
            <Product
              id="3254354345"
              title="Picun X7 True Wireless Earbuds, Dual-Driver TWS Hi-Fi Stereo Bluetooth Headphones"
              price={22.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/61QMisgFk+S._AC_UL320_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="90829332"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="4903850"
              title="SAMOFU Ergonomic Office Chair with Foot Rest, High Back Desk Chair with 3D Adjustable Backrest"
              price={429.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/7113cwNJgQS._AC_UL320_.jpg"
            />
            <Product
              id="23445930"
              title="Gyroor C3 Electric Bike for Adults, 450W eBike with 18.6MPH up to 28 Mileage, 14in Air-Filled Tires, Dual Disc Braking"
              price={599.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/71gxr9tQcgL._AC_UY218_.jpg"
            />
            <Product
              id="3254354345"
              title="HUANUO-Height Adjustable Gas Spring Arm Swivel Monitor Desk Mount Fits Two 22 to 32 inch Computer "
              price={49.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/71zDaeZ6oHL._AC_UY218_.jpg"
            />
          </div>
        </div>
      </div>
    );
}

export default Home;
