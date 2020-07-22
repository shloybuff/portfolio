import React from 'react'
import { AiOutlineMail, AiFillTwitterCircle, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import './css/Section4.css'

export const Section4 = ()=>{
    return(
        <div style={{display: 'flex', justifyContent:'center', marginTop:50}}>
            <p><a style={{textDecoration:'none'}} href="mailto:buffshloy55@gmail.com"><AiOutlineMail className='icon'/></a></p>
            <p><a href="https://twitter.com/Shloy8"><AiFillTwitterCircle className='icon'/></a></p>
            <p><a href="https://www.facebook.com/shloy.buff.7"><AiFillFacebook className='icon'/></a></p>
            <p><a href="https://www.linkedin.com/in/chloy-buff-9b7628161/"><AiFillLinkedin className='icon'/></a></p>

        </div>

    )
}