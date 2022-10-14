import './Home.scss';
import Logos from '../../assets/images/logo-s.png';
import {Link} from 'react-router-dom';
import Animate from '../animatedLetters/Animate';
import { useState } from 'react';
import { useEffect } from 'react';
import Logo from './logo/Logo';
import Loader from 'react-loaders';

const Home=()=>{

    const [letterClass,setLetterClass]=useState('text-animate');
    const nameArray=['o','a','t'];
    const jobArray=['W','e','b',' ','D','e','v','e','l','o','p','e','r','.'];


    useEffect(()=>{
    //  return 
     setTimeout(()=>{
           return setLetterClass('text-animate-hover');
            // console.log(letterClass);
        }, 4000);
    },[])




    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                     <br/> 
                     
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    
                    <span className={`${letterClass} _15`}>&nbsp;</span>
                    <span className={`${letterClass} _16`}>D</span>
                    <span className={`${letterClass} _18`}>a</span>
                    <span className={`${letterClass} _19`}>t</span>
                    <span className={`${letterClass} _20`}>t</span>
                    <span className={`${letterClass} _21`}>a</span>
                <img src={Logos} alt="developer" />
                 <Animate strArray={nameArray} letterClass={letterClass} idx={22} />
                <br />
                <Animate strArray={jobArray} letterClass={letterClass} idx={29} />
                 </h1>
                <h2>Frontend Developer / Computer Science Graduate / YouTuber</h2>
                <Link to='/contact' className="flat-button">CONTACT ME</Link>

            </div>
            <Logo/>
        </div>
        <Loader type='pacman'/>
        </>
    );
}


export default Home;