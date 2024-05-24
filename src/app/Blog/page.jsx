"use client";
import React, { useState } from 'react';
import './Blog.css';
import Image from 'next/image';
import rasm1 from '../imgs/rasm8.png';
import Footer from '../coomponents/Footer/Footer';

const blog = [
    {
        id: 1,
        name: 'Top 6 free website mockup tools 2022',
        p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.',
        span: 'Business',
    },
    {
        id: 2,
        name: 'Ten free Google fonts that you should use',
        p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.',
        span: 'Business',
    },
    {
        id: 3,
        name: 'Step-by-step guide to choosing great font pairs',
        p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.',
        span: 'Business',
    },
    {
        id: 4,
        name: 'What did I learn from doing 50+ design sprints?',
        p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.',
        span: 'Business',
    },
];

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBlogs = blog.filter(el =>
        el.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const blogList = filteredBlogs.map(el => (
        <div key={el.id} className="blog_item">
            <div className="img_row">
                <Image src={rasm1} alt={el.name} width={600} height={400} />
            </div>
            <div className="blog_col">
                <h4>{el.span}</h4>
                <h1>{el.name}</h1>
                <p>{el.p}</p>
            </div>
        </div>
    ));

    return (
        <div>
            <section className="blog_log">
                <div className="container">
                    <div className="blog">
                        <h1>Business</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <h5>Blog Business</h5>
                    </div>
                </div>
            </section>
            <div className="container">
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder="Searching ..."
                />
                <div className="blog_row">
                    {blogList}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;
