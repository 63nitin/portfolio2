import React from "react";
import { useState } from "react";
import { Link, NavLink } from 'react-router-dom'
import tinDog from '../../assets/images/tin-dog.png'
import BMI from '../../assets/images/bmi.png'
import Loader from 'react-loaders'
import './index.scss'

const Projects = () =>{
    const [showNav, setShowNav] = useState(false);
 return (
    <div className="container project-page">
    <div className="tindog">
        <Link 
        className="dog"
        to="https://63nitin.github.io/tinDog-project/"
        target="_blank"
        onClick={() => setShowNav(false)}>
        <img src={tinDog} alt="Logo" />
        
      </Link>
      <Link 
        className="bmi"
        to="https://63nitin.github.io/BMI-Calculator/"
        target="_blank"
        onClick={() => setShowNav(false)}>
        <img src={BMI} alt="Logo" />
        
      </Link>
    </div>
    <Loader type="pacman" />
    </div>

 )
}

export default Projects;
