import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import rasm from '../../imgs/rasm1.png'; 
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <nav>
                        <Link href="/">
                            <Image src={rasm} alt="img"  />    
                        </Link> 
                        <ul className='ul_link'>
                            <li>
                           <Link href={'/'}>Home</Link>
                            </li> 
                            <li>
                            <Link href={'/Blog'}>Blog</Link>
                            </li>
                            <li>
                         <Link href={'/About'}>AboutUs</Link>
                            </li>
                            <li>
                        <Link href={'/Admin'}>Account</Link>
                            </li>
                           <Link href={'/Login'}> <button>Login</button></Link>
                        </ul>
                    </nav>

                    
                </div>
            </header>
        </div>
    );
}

export default Navbar;
