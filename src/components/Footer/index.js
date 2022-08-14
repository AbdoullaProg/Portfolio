// == Import npm
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
// == Import
import './style.scss';

import wave from '../../assets/images/wave.svg';
import send from '../../assets/images/send.svg';
import github from '../../assets/images/github.svg';
import gmail from '../../assets/images/gmail-logo.svg';
import telephone from '../../assets/images/telephone.svg';

import check from '../../assets/images/check.png';
import close from '../../assets/images/close.png';

// == Composant
const Footer = () => {
    const [messageSendToEmail, setmessageSendToEmail] = useState({
        services: 'app',
        name: '',
        email: '',
        compagnyName: '',
        text: ''
    });

    const [openNotifications, setopenNotifications] = useState(false)

    const handleChangeService = (e) => {
        setmessageSendToEmail({
            ...messageSendToEmail,
            services: e.target.name
        })
    }

    const handleChange = (e) => {
        setmessageSendToEmail({
            ...messageSendToEmail,
            [e.target.name]: e.target.value,
        })
    }

    const sendEmail =  async (e) => {
        e.preventDefault();
        const templateParams = {
            name: messageSendToEmail.name,
            message: messageSendToEmail.text,
            email: messageSendToEmail.email,
            compagnyName: messageSendToEmail.compagnyName,
            services: messageSendToEmail.services
        };
        try {
            const requestmail = await emailjs.send('service_bwzaakf', 'template_k221uaw', templateParams, 'MZFFDsCeO0fMJ74TW');
            if(requestmail.status !== 200) throw("une erreur c'est produite")
            console.log('requestmail', requestmail.status);
            setmessageSendToEmail({
                services: 'app',
                name: '',
                email: '',
                compagnyName: '',
                text: ''
            });
            setopenNotifications(true)
            setTimeout(()=>{
                setopenNotifications(false)
            }, 3000)
        } catch (error) {
            console.log('error', error)
        }
    } 

    const toggleNotifications = () => {
        setopenNotifications(!openNotifications);
    }

    return(
        <>
            <div className={openNotifications ? "notification" : "nonne" }>
                <div className="container" >
                    <img className="close" src={close} onClick={toggleNotifications}></img>
                    <p className="text">
                        Votre Message a bien été envoyé.
                    </p>
                    <img className="image" src={check}></img>
                </div>
            </div>
            <footer className="footer">
                <img className="wave" src={wave} />
                <div className="contact contact-component">
                    <div className="left-container">
                        <h2 className="title">
                        <span> Créons </span> et  <br />
                        progressons ensemble
                        </h2>
                        <div className="services">
                        <h2 className="title">Services</h2>
                        <div className="service-container">
                            <button 
                                className={messageSendToEmail.services === 'app' ? 'btn active' : 'btn'}
                                name="app"
                                onClick={handleChangeService}
                            >Application</button>
                            <button 
                                className={messageSendToEmail.services === 'web' ? 'btn active' : 'btn'}
                                name="web"
                                onClick={handleChangeService}
                            >site web</button>
                            <button 
                                className={messageSendToEmail.services === 'other' ? 'btn active' : 'btn'}
                                name="other"
                                onClick={handleChangeService}
                            >autres</button>
                        </div>
                        </div>
                        <form className="form" onSubmit={sendEmail}>
            
                        <div className="flex">
                            <div className="container-input">
                                <input 
                                    id="Namea"
                                    name='name'
                                    type="text"
                                    className={messageSendToEmail.name !== '' ? 'active' : ''}
                                    onChange={handleChange}
                                    value={messageSendToEmail.name}
                                    required
                                />
                                <label 
                                    htmlFor="Namea" 
                                    className="Namea"
                                >Nom</label>
                            </div>
                            <div className="container-input">
                                <input 
                                    id="Email" 
                                    type="text"
                                    name='email'
                                    className={messageSendToEmail.email !== '' ? 'active' : ''}
                                    onChange={handleChange}
                                    value={messageSendToEmail.email}
                                    required
                                />
                                <label htmlFor="Email" className="Email">Email</label>
                            </div>
                        </div>
            
                        <div className="container-input">
                            <input 
                                id="Company"
                                name='compagnyName' 
                                type="text"
                                className={messageSendToEmail.compagnyName !== '' ? 'active' : ''}
                                onChange={handleChange}
                                value={messageSendToEmail.compagnyName}

                            />
                            <label htmlFor="Company" className="Company">Nom d'entreprise (facultatif)</label>
                        </div>
            
                        <div className="container-input">
                            <textarea 
                                id="project"
                                name='text' 
                                className='textarea'
                                onChange={handleChange}
                                rows="4"
                                placeholder='Description du projet'
                                value={messageSendToEmail.text}
                                required
                            />
                            {/* <label htmlFor="project" className="project">Project Description</label> */}
                        </div>
            
                        <div className="container-btn-send">
                            <button className="btn-send">
                            Envoyer <img src={send} alt="" />
                            </button>
                        </div>
            
                        </form>
                    </div>
                </div>
                <div className="new-footer-contact index">
                    <div className="copyright-new">
                        <p className="text">
                            Ⓒ @2021 Ayoub Midalichov. All rights reserved
                        </p>
                    </div>
                    <div className="mail-new">
                        <a href="">
                            abdoulla.midalichov@gmail.com
                        </a>
                    </div>
                    <div className="other-contact-new">
                        <img src={github} alt="" />
                        <img src={gmail} alt="" />
                        <img src={telephone} alt="" />
                    </div>
                </div>
            </footer>
        </>
        
    )
};

// == Export
export default Footer;