import './Contact.scss'
import Loader from 'react-loaders';
import Animate from '../animatedLetters/Animate';
import '../layout/Layout.scss';
import { useState ,useEffect} from 'react';
import { useRef } from 'react';
import emailjS from'@emailjs/browser';
import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet';

const Contact=()=>{

    const [letterClass,setLetterClass]= useState('text-animate');

    const refForm = useRef();


    const onSubmit =(e)=>{
        console.log("hiii t");

        e.preventDefault();

        // emailjS.sendForm('gmail','template_doouqv8',refForm.current,'K7HvSaGC5oKWVQTHF')
        // emailjS.sendForm('service_u1r67n4','template_doouqv8','values','K7HvSaGC5oKWVQTHF');
        emailjS.sendForm('service_u1r67n4','template_doouqv8',refForm.current,'K7HvSaGC5oKWVQTHF')
        .then(()=>{
            console.log("hii");
            alert("Message Sucessfully Sent!");
            window.location.reload(false);

        },
        ()=>{
            alert("failed to send the message,please try again!");

        }
        )



    }


    useEffect(()=>{
        // console.log("hii");
        
        setTimeout(()=>{
            return setLetterClass('text-animate-hover');
        },3000)
    },[])



    return(
        <>
       <div className="container contact-page">
        <div className="text-zone">
            <h1><Animate letterClass={letterClass} strArray={ ['C','o','n','t','a','c','t',' ','M','e']} idx={15}/>
        </h1>
        <p>
        I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.

        </p>
            

            <div className="contact-form">
                <form ref={refForm} action onSubmit={onSubmit}>
                    <ul>
                        <li className='half'>
                            <input type="text" name='name' placeholder='Name' required />
                        </li>
                        <li className='half'>
                            <input type="email" name='email' placeholder='Email' required />
                        </li>
                        <li >
                            <input type="text" name='subject' placeholder='Subject' required />
                        </li>
                        <li >
                                                    <textarea name="message" 
                                                    placeholder='Message' required></textarea>
                                            
                    </li>

<li>
    <input type="submit" value="SEND" className='flat-button' />
</li>
                    </ul>
                </form>
            </div>
            </div>
            <div className="info-map">
                Datta Soat,
                <br />
                India,
                <br />
                Manthale Nager,Latur-413512.
                <br />
                <span>dattasot2025@gmail.com</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[18.393198,76.583868]} zoom={13}>
                    <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[18.393198,76.583868]} >
                        <Popup>Datta lives here, come over for a cup of coffee :)</Popup>
                    </Marker>

                </MapContainer>
            </div>

       </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact;