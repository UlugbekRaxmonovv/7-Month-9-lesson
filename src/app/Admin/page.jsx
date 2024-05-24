import React from 'react';
import './Admin.css'

const Page = () => {
    return (
        <div> 
               <div className="container">
    
                <form action="">
                    <h1>Account</h1>
                 <input type="text" placeholder='Abdulaziz' /> <br />
                 <input type="text" placeholder='Programmer' /> <br />
                 <input type="text"  placeholder='abdulazizprogrammer' /> <br />
                 <input type="password" placeholder='Password' /> <br />
                 <input type="text"   placeholder='Confirm password'/> <br />

                  <button>Save</button>

                </form>
            </div>
        </div>
    );
}

export default Page;
