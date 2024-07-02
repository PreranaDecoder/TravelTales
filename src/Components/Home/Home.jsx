import React from 'react';
import './home.scss';
import video from '../../Assets/IMG_8460.MP4';
import {GrLocation} from 'react-icons/gr';
import {HiFilter} from 'react-icons/hi'


const Home = () => {
  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span className='smallText'>Our Packages</span>
          <h1 className='homeTitle'>Search your Holiday</h1>
        </div>

      <div className="cardDiv">
        {/* Adding the Search Destination Section */}
        <div className="searchSection">
            <label htmlFor="city" className="searchLabel">Search your destination:</label>
            <input type="text" id="city" className="searchInput" placeholder="Enter a destination" />
            <GrLocation className="icon"/>
          </div>

        {/* Adding the Date Section */}
        <div className="dateInput">
            <label htmlFor="date" className="dateLabel">Select your date:</label>
            <input type="date"/>
          </div>

        {/* Adding the Price Section */}
        <div className="priceInput">
          <div className='label_total flex'>
            <label htmlFor="price">Max Price:</label>
            <h3 className='total'>$5000</h3>
            </div>

            <div className='input flex'>
              <input type="range" max='5000' min="1000"/>
            </div>  
          </div>

          <div className='searchOptions flex'>
            <HiFilter className="icon"/>
            <span>MORE FILTERS</span>

          </div>
      </div>
     

      </div>
    </section>
  )
}

export default Home;
