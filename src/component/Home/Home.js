import React from 'react';
import "./home.scss";
import SmilePng from "../Assets/Image/smile.png";
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <div className='home'>
        <div className='home-head'>
            <span className='home-head-text'>SMILE <br/> SECURE</span> <span className='home-head-appointment'>For appointment</span>
        </div>
        <div className='home-bottom'>
                <span className='home-bottom-text'>One-stop-shop for all thing dental</span>
            <div className='home-bottom-menu'>
                <span className='home-bottom-menu-text'>What describes your current dental Condition the beat?</span>
                <div className='home-bottom-menu-container'>
              <NavLink className='home-bottom-menu-container-item' to="/inpain"><span ><img src={SmilePng} alt="smile"/>In Pain</span></NavLink>  
              <NavLink className='home-bottom-menu-container-item' to="/inpain">    <span ><img src={SmilePng} alt="smile"/>Broken teeth</span></NavLink> 
              <NavLink className='home-bottom-menu-container-item' to="/inpain"> <span><img src={SmilePng} alt="smile"/>Missing teeth</span></NavLink>
              <NavLink className='home-bottom-menu-container-item' to="/inpain"> <span><img src={SmilePng} alt="smile"/>Crooked teeth</span></NavLink>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Home