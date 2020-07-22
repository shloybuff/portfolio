import React from 'react';
import './css/Section3.css'
import {CardPortfolio} from './CardPortfolio'
import corona from './image/corona.jpeg'
import tanails from './image/tanails.jpg'
import insta from './image/insta.jpg'
import smartbrain from './image/smartbrain.png'


export const Section3 = ()=>{
    return(
        <div className='container__section3'>
        <h1>Recent Portfolio</h1>
        <div className='container__card'>
            <CardPortfolio link='https://shloybuff.github.io/coronaviru/' description="Coronavirus traker building with react.js & react hooks,Progressive Web Application" pic={corona} title="Coronavirus Traker"/>
            <CardPortfolio link='https://shloybuff.github.io/tanails/' description="Tanails billing building with react.js pdfJs, PWA " pic={tanails} title="Tanails revenue billing"/>
            <CardPortfolio link='https://tan-pic.web.app/' description="Instagram clone building with react.js and google cloud (firebase), users authentication, cloud storage and realtime database" pic={insta} title="Gallery instagram clone"/>
            <CardPortfolio link='https://smart-brain-tan.herokuapp.com/' description="Full stack smart brain application building with react in a front end, nodejs in backend, and postgress in database" pic={smartbrain} title="Smart Brain Application"/>

        </div>
        </div>
    )
}