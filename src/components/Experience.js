import React from 'react'
import '../styles/Experience.css'
import img1 from '../image/JavaScript.jpg'
import img2 from '../image/HTML.png'
import img3 from '../image/CSS.png'
import img4 from '../image/Frontendify.jpg'

function Experience() {
  return (
    <div className='heading' id='experience'>
        <h2>Experience</h2>
    <div className='container'>
    <div className='card-container'>
       <div className='image-container'>
            <img src= {img1} />
        </div>
        <div className='card-content'>
        <div className='card-title'>
            <h3>JavaScript</h3>
        </div>
        <div className='card-body'>
            <p>Having hands-on Experience in JavaScript. Built a calculator as one of the starting Javascript projects.</p>
        </div>
        </div>
    </div>

    <div className='card-container'>
       <div className='image-container'>
            <img src= {img2} />
        </div>
        <div className='card-content'>
        <div className='card-title'>
            <h3>HTML</h3>
        </div>
        <div className='card-body'>
            <p>Having hands-on Experience in HTML. Built a Blog application using HTML</p>
        </div>
        </div>
    </div>

    <div className='card-container'>
       <div className='image-container'>
            <img src= {img3} />
        </div>
        <div className='card-content'>
        <div className='card-title'>
            <h3>CSS</h3>
        </div>
        <div className='card-body'>
            <p>Having hands-on Experience in CSS. Completed a fully responsive Blog application using CSS</p>
        </div>
        </div>
    </div>

    <div className='card-container'>
       <div className='image-container'>
            <img src= {img4} />
        </div>
        <div className='card-content'>
        <div className='card-title'>
            <h3>Frontendify</h3>
        </div>
        <div className='card-body'>
            <p>Frontendify is a fully responsive Blog application which was built using HTML, CSS & Bootstrap5.</p>
        </div>
        </div>
    </div>


    </div>
    </div>
  )
}

export default Experience