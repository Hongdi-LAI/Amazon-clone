import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className = "home">
            
             
            <img
                className = "home__image"
                src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg"                
                alt = ""
            />

            {/* Product id, title, price, rating, image */}
            <div className = "home__row">
                <Product 
                    id = "123HMS4"
                    title = "Needles Japan - Men's Brown Straight-leg Houndstooth Pants"
                    price = {399.99}
                    rating = {5}
                    image = "https://cdn-images.farfetch-contents.com/15/71/51/72/15715172_28802087_480.jpg"
                />

                <Product 
                    id = "1231234"
                    title = "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price = {11.96}
                    rating = {3}
                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYjJxxUDTTLjS9pQftwnjL75EP3SdxZzxubxXkimJ4RJPJJI7xH6XGTksgs6VaQg20lorEUwE&usqp=CAc"
                />
            </div>
            {/* Product */}

            <div className = "home__row">
                <Product 
                    id = "1234434"
                    title = "Adidas Stan Smith Shoes - White/Green"
                    price = {94.99}
                    rating = {5}
                    image = "https://image.keller-sports.com/storage/products/95/9F/959F25916CD3992826636CE39CA53B7E52dd.800x701.jpeg"
                />

                <Product 
                    id = "122344"
                    title = "Pack GoPro HERO8 Black"
                    price = {379.99}
                    rating = {4}
                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ483PCVnrjuI5k3huvghnd5cznalxouEZkAbHPHzKh6ndKSn5hxOLJZVOBA9zWGf3WHhEUsCkS&usqp=CAc"                
                />

                <Product 
                    id = "2324"
                    title = "Classic Glass Tea Cup 16cl (x6)"
                    price = {6.96}
                    rating = {5}
                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC4YQHpLsJAU5CJCCZQdm0DK4d29YlyOZaL6x-Kdh1HxQOkqIN9iQ&usqp=CAc"
                />
            </div>

            <div className = "home__row">
                <Product 
                    id = "112334"
                    title = "TV LED Samsung UE43TU7125 2020"
                    price = {389.99}
                    rating = {2}
                    image = "https://www.technewsworld.com/images/article_images/74336_620x310.jpg"
                />
            </div>

        </div>
    )
}

export default Home
