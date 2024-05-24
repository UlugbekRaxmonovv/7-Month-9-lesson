import React from 'react';
import './Main.css';
import { FaAngleRight } from "react-icons/fa6";


const Main = () => {
    return (
        <div>
            <section className='box'>
                <div className="container">
                    <div className="hammasi_all">
                        <div className="hammasi_row">
                         <h4>Posted on startup</h4>
                         <h1>Step-by-step guide to choosing great font pairs</h1>
                         <p>By <span> James West </span> |  May 23, 2022 </p>
                         <h5>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h5>
                         <div className="btn">
                            <button>Read More</button>
                            <FaAngleRight />
                         </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;
