import React from 'react';
import './about.css'
import rasm1 from '.././imgs/rasm6.png'
import rasm2 from '.././imgs/rasm7.png'
import Image from 'next/image';
import Footer from '../coomponents/Footer/Footer';

const About = () => {
    return (
        <div>
        <section className='about'>
            <div className="container">
                <div className="about_all">
                    <div className="about_row">
                      <h4>Our mision</h4>
                      <h1>Creating valuable content for creatives all around the world</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                    </div>


                    <div className="about_row">
                      <h4>Our mision</h4>
                      <h1>Creating valuable content for creatives all around the world</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                    </div>
                </div>

                <div className="about_alt">
                    <div className="about_link">
                         <h2>Our team of creatives</h2>
                         <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h5>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                    </div>


                    <div className="about_link">
                         <Image src={rasm1} />
                    </div>
                </div>



                <div className="about_alt">

                <div className="about_link">
                         <Image src={rasm2} />
                    </div>
                    <div className="about_link">
                         <h2>Our team of creatives</h2>
                         <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h5>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                    </div>                    
                </div>
            </div>
        </section>
        <Footer/>
        </div>
    );
}

export default About;
