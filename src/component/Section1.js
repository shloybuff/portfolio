import React from 'react'
import porto from './image/porto.jpeg'
import './css/Section1.css'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import {GoLocation} from 'react-icons/go'

export const Section1 = ()=>{
    return(
        <div className="container__home">
        <div className="details">
            <p className="hello">Hello i am</p>
            <h1 className="name">Shlomo Buff</h1>
            <h3 className="metier">Developer</h3>
            <h6 className="h6"><AiOutlineMail /> buffshloy55@gmail.com</h6>
            <h6 className="h6"><AiOutlinePhone /> +972543481394</h6>
            <h6 className="h6"><GoLocation /> 5, Avraham Sharon, Jérusaleme, Israël</h6>
        </div>
        <div className="img">
            <div className="container__img">
                <img className="img__profile" alt='profile' src={porto} />
            </div>
        </div>
    </div>
    )
}