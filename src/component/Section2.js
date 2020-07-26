import React from 'react';
import geek from './image/geek.png'
import './css/Section2.css'
import {FaHtml5, FaCss3Alt, FaReact, FaDownload, FaBootstrap, FaGithub, FaNode, FaJs, FaDatabase, FaPhp, FaAws} from 'react-icons/fa'
import {DiGoogleCloudPlatform, DiMongodb, DiMysql} from 'react-icons/di'


export const Section2 =()=>{
    return(
        <div className="container__section2">
        <div className="details__vecteur">
            <img id="img__section2" alt="" src={geek}/>
        </div>
        <div className="detail__setions2">
            <h1 className="about">About me</h1>
            <p>Hello, I’m a Shlomo, software developer based on Jerusalem. I have rich knowledge in front-end & back-end. 
I am very passionate about IT in general and I also have a great desire to learn.</p>
            
            <FaHtml5 style={{fontSize:23,margin:7}}/>
            <FaCss3Alt style={{fontSize:23,margin:7}}/>
            <FaBootstrap style={{fontSize:23,margin:7}}/>
            <FaGithub style={{fontSize:23,margin:7}}/>
            <FaNode style={{fontSize:23,margin:7}}/>
            <FaJs style={{fontSize:23,margin:7}}/>
            <FaReact style={{fontSize:23,margin:7}}/> 
            <FaPhp style={{fontSize:23,margin:7}}/>
            <DiMysql style={{fontSize:23,margin:7}}/>
            <FaAws style={{fontSize:23,margin:7}}/>
            <FaDatabase style={{fontSize:23,margin:7}}/>
            <DiMongodb style={{fontSize:23,margin:7}}/>
            <DiGoogleCloudPlatform style={{fontSize:23,margin:7}}/>
            <br />
            <button className='download'><a href='https://online.flippingbook.com/view/156580/'>Download CV<FaDownload /></a></button>  
        </div>
    </div>
    )
}