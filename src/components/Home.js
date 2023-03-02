import React from 'react'
import {GitHub,Email,LinkedIn} from '@mui/icons-material'
import '../styles/Home.css'
import TypeWriterEffect from 'react-typewriter-effect'; 



function Home() {

  return (
    <div className='home'>
        <div className='about'>
           <h2>Hi, I'am AKASH
            <span>
            <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          fontWeight: 500,
          fontSize: '55px',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'Full Stack Developer',
          'MERN Stack Dev',
          'Enthusiastic Dev',
          'Creative Dev',
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
        multiTextLoop
      />
            </span>
           </h2>
            <div className='prompt'>
                <p>I'am a creative designer based in India.</p>
           <a href='https://github.com/EEakashks'><GitHub/></a>
           <a href='akashks777@gmail.com'><Email/></a>
           <a href='https://www.linkedin.com/in/akash-k-s-9214101b9/'><LinkedIn/></a>
           <div className='profile-picture'>
            <div className='profile-picture-background'>
            </div>
           </div>
            </div>
        </div>
        <div className='header' id='skills'>
          <h2>Skills</h2>
        <div className='container'>
          <div className='skills' >
           
            <h1>HTML</h1>
            <div className='progress-bar' >
              <div className='html' >
                <span>80%</span>
              </div>
            </div>
            <h1>CSS</h1>
            <div className='progress-bar' >
              <div className='css' >
                <span>70%</span>
              </div>
            </div>
            <h1>JavaScrippt</h1>
            <div className='progress-bar' >
              <div className='javascript' >
                <span>50%</span>
              </div>
            </div>
            <h1>React</h1>
            <div className='progress-bar' >
              <div className='react' >
                <span>40%</span>
              </div>
            </div>
          </div>
          
        </div>

    </div>
    </div>
  )
}

export default Home