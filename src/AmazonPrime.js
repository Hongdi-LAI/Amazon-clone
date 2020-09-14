import React from 'react'
import './AmazonPrime.css'
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';

function AmazonPrime() {
    return (
        /* img change and text align */
        <div className = "amazonPrime">
            <img
            className = "amazonPrime__background"
            src = "https://m.media-amazon.com/images/G/01/kindle/dp/2015/848470/shared/feature-content-V2._CB485955575_.jpg"
            alt = ""
            />
            {/* <img
            className = "amazonPrime__logo"
            src = "https://www.newhope.com/sites/newhope360.com/files/styles/article_featured_retina/public/amazon-prime.png?itok=6un7TeEo"
            alt = ""
            /> */}
            <div className = "amazonPrime__text">
                <ReportProblemOutlinedIcon className = "amazonPrime__Icon" />
                <h1>Amazon Prime Service is currently unavailable...</h1>
            </div>
            <img
            className = "amazonPrime__bottomImage"
            src = "https://www.rollingstone.com/wp-content/uploads/2020/03/Prime-Music.png"
            alt = ""
            />
        </div>
    )
}

export default AmazonPrime
