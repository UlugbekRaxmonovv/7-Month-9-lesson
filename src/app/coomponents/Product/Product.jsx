"use client"
import React from 'react';
import './Product.css'
import Image from 'next/image';
import rasm1 from '../../imgs/rasm2.png'
import rasm3 from '../../imgs/rasm3.png'
import rasm4 from '../../imgs/rasm4.png'
import rasm5 from '../../imgs/rasm5.png'

async function getData() {
    const res = await fetch('https://dummyjson.com/products/?limit=4')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }



  let links =[
    {
        id:1,
        img:rasm4,
        h1:'Business',
        p:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
        id:2,
        img:rasm3,
        h1:'Startup',
        p:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
        id:3,
        img:rasm4,
        h1:'Economy',
        p:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
        id:4,
        img:rasm5,
        h1:'Technology',
        p:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
  ]




const Product = async() => {
    let data = await getData()
    let link =  data?.products?.map((produc) => (
        <div className="section-title" key={produc.id}>
     <Image src={produc.images[0]} alt={produc.title}  width={100} height={100} />
     <p>{produc.price}  <span>{produc.category}</span></p>
     <h1>{produc.description}</h1>
     <h6>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h6>
</div>
    ))



    let javob =links?.map((link) =>(
        <div className="column_all" key={link.id}>
          <div className="img_row">
          <Image  src={link.img}  />
          </div>
           <h5>{link.h1}</h5>
           <p>{link.p}</p>
        </div>
    ))
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                                <h2>Popular blogs</h2>
                        <div className="products">
                            {link}
                        </div>
                       <div className="hiro"></div>
                    </div>

                    <div className="all">
                        <h1>Choose A Catagory</h1>
                        <div className="alt1">
                           {javob}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Product;
