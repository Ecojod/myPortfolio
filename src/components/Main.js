import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


export default function Main() {
    return (
        <>
            <body>
                <header className="header" id="header">
                    <nav className="nav container padd-15">
                        <a href="#" className="nav-logo">
                            <h2>Ecogas</h2>
                        </a>
                        {/* <!-- nav menu  --> */}
                        <div className="nav-menu" id="nav-menu">
                            <ul className="nav-list">
                                <li className="nav-items">
                                    <a href="#home" className="nav-link active-link">Home</a>
                                </li>
                                <li>
                                    <a href="#about" className="nav-link">About</a>
                                </li>
                                <li>
                                    <a href="#experience" className="nav-link">Experience</a>
                                </li>
                                <li>
                                    <a href="#pricing" className="nav-link">Pricing</a>
                                </li>
                                <li>
                                    <a href="#portfolio" className="nav-link">Portfolio</a>
                                </li>
                                <li>
                                    <a href="#contact" className="nav-link">Contact</a>
                                </li>
                            </ul>
                            <nav className="nav-close" id="nav-close">
                                <i className="lni lni-close"></i>
                            </nav>
                        </div>
                        {/* <!-- Nav-BTN  --> */}
                        <div className="nav-btns">
                            {/* <!-- Theme change buttons --> */}
                            <i className="lni lni-pallet change-theme" id="theme-button"></i>
                            {/* <!-- toggle btn  --> */}
                            <div className="nav-toggle" id="nav-toggle">
                                <i className="lni lni-grid-alt"></i>
                            </div>
                        </div>
                    </nav>
                </header>

                {/* <!-- Main  --> */}
                <main className="main-content">
                    <section className="home" id="home">
                        <div className="container">
                            <div className="intro">
                                <img src="/images/37.jpg" alt="Tushar" />
                                <h1>Tushar sumit</h1>
                                <span><span className="info-text">Front-End developer and video editor</span></span>
                                <ul className="social-icons">
                                    <li><a href="#"><i className="lni lni-instagram-original"></i></a></li>
                                    <li><a href="#"><i className="lni lni-facebook-original"></i></a></li>
                                    <li><a href="#"><i className="lni lni-twitter-original"></i></a></li>
                                </ul>
                                <div>
                                    <a href="#" className="btn btn-default">How's going?</a>
                                </div>
                                {/* <!-- scroll down mouse wheel  --> */}
                                <div className="scroll-down">
                                    <a href="#" className="mouse-wrapper">
                                        <span>Scroll Down</span>
                                        <span className="mouse">
                                            <span className="wheel">

                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- ============================= About =========================== --> */}
                    <section className="about section" id="about">
                        <div className="container">
                            <h2 className="section-title padd-15">About Me</h2>
                            <div className="row">
                                <div className="about-img padd-15">
                                    <img src="/images/2.jpg" alt="" />
                                </div>
                                <div className="about-content padd-15">
                                    <div className="rounded">
                                        <div className="row">
                                            <div className="about-text padd-15">
                                                <p>Nothing much to write, instead you would like to test my capabilities and my
                                                    mindset about analysing the scenarios by working with me. This is me,
                                                    Ecogas AKA Tushar.</p>
                                                <div>
                                                    <a href="#" className="btn btn-default">Download CV</a>
                                                </div>
                                            </div>
                                            <div className="skills pad-15">
                                                <div className="row">
                                                    {/* <!-- Skill item  --> */}
                                                    <div className="skill-items">
                                                        <h4>Web Development</h4>
                                                        <div className="progress">
                                                            <div className="progress-in"
                                                                style={{ width: "65%", background: "rgb(255, 209, 92)" }}></div>
                                                            <div className="skill-percent">77%</div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Skill item  --> */}
                                                    <div className="skill-items">
                                                        <h4>Video Editing</h4>
                                                        <div className="progress">
                                                            <div className="progress-in"
                                                                style={{ width: "70%", background: " rgb(255, 70, 96)" }}></div>
                                                            <div className="skill-percent">70%</div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Skill item  --> */}
                                                    <div className="skill-items">
                                                        <h4>Mobile Gaming</h4>
                                                        <div className="progress">
                                                            <div className="progress-in"
                                                                style={{ width: "80%", background: "rgb(108, 209, 92)" }}></div>
                                                            <div className="skill-percent">80%</div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Skill item  --> */}
                                                    <div className="skill-items">
                                                        <h4>Python</h4>
                                                        <div className="progress">
                                                            <div className="progress-in"
                                                                style={{ width: "50%", background: "rgb(209, 139, 92)" }}></div>
                                                            <div className="skill-percent">50%</div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Skill item  --> */}
                                                    <div className="skill-items">
                                                        <h4>Overthinking</h4>
                                                        <div className="progress">
                                                            <div className="progress-in"
                                                                style={{ width: "100%", background: "rgb(228, 19, 19)" }}></div>
                                                            <div className="skill-percent">100%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* <!-- fact item  --> */}
                                <div className="fact-item padd-15">
                                    <i className="lni lni-thumbs-up"></i>
                                    <div className="details">
                                        <h3>25+</h3>
                                        <p>Project Done</p>
                                    </div>
                                </div>
                                {/* <!-- fact item  --> */}
                                <div className="fact-item padd-15">
                                    <i className="lni lni-coffee-cup"></i>
                                    <div className="details">
                                        <h3>9999+</h3>
                                        <p>Tea Done</p>
                                    </div>
                                </div>
                                {/* <!-- fact item  --> */}
                                <div className="fact-item padd-15">
                                    <i className="lni lni-users"></i>
                                    <div className="details">
                                        <h3>10+</h3>
                                        <p>Satisfied clients</p>
                                    </div>
                                </div>
                                {/* <!-- fact item  --> */}
                                <div className="fact-item padd-15">
                                    <i className="lni lni-cup"></i>
                                    <div className="details">
                                        <h3>99+</h3>
                                        <p>College and School awards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- -----------------------------services-------------------------- --> */}
                    <section className="services section" id="services">
                        <div className="container">
                            <h2 className="section-title padd-15">services</h2>
                            <div className="row">
                                {/* <!-- service item  --> */}
                                <div className="service-item padd-15">
                                    <div className="service-item-inner" style={{ background: "rgb(108, 108, 229)" }}>
                                        <img src="/images/service.jpg" alt="" />
                                        <h3>Gaming Video editing</h3>
                                        <p>I used to play online games since 2016. I love to play mobile games i know this is not something you need to mention in your portfolio website even though i did as E-sports is my passion.</p>
                                    </div>
                                </div>
                                {/* <!-- service item  --> */}
                                <div className="service-item padd-15">
                                    <div className="service-item-inner" style={{ background: "rgb(249, 215, 76)" }}>
                                        <img src="/images/service.jpg" alt="" />
                                        <h3>Front-End Developer</h3>
                                        <p>I started Web Development in March, 2022 and i already completed lots of projects. On the bases of that i have very good experience with HTML, CSS and JavaSript. Along with learnt react JS, bootstrap, Tailwind CSS, and little bit of NodeJS.</p>
                                    </div>
                                </div>
                                {/* <!-- service item  --> */}
                                <div className="service-item padd-15">
                                    <div className="service-item-inner" style={{ background: "rgb(249, 123, 139)" }}>
                                        <img src="/images/service.jpg" alt="" />
                                        <h3>Programmer</h3>
                                        <p>JavaSript is a language that exites me to push myself as a programmer. As i am a Web-DEveloper i am good at programmig with JavaSript.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text padd-15">
                                <p>Looking for a WEB-DEVELOPER? <a href="#">Click here</a> to contact me!😎 </p>
                            </div>
                        </div>
                    </section>
                    {/* <!-- =================== Experience ================= --> */}
                    <section className="section " id="experience">
                        <div className="container">
                            <h2 className="section-title padd-15">Experience</h2>
                            <div className="row">
                                {/* <!-- Education  --> */}
                                <div className="education padd-15">
                                    <div className="row">
                                        <div className="timeline-box">
                                            <div className="timeline">
                                                {/* <!-- Timeline item  --> */}
                                                <div className="timeline-item">
                                                    <i className="lni lni-graduation timeline-icon"></i>
                                                    <h3 className="timeline-date">
                                                        <i className="lni lni-calendar"></i> 2018
                                                    </h3>
                                                    <h3 className="timeline-title">School Completed</h3>
                                                    <p className="timeline-text">completed my 12th from spring Dales's School in the year 2018.</p>
                                                </div>
                                                {/* <!-- Timeline item  --> */}
                                                <div className="timeline-item">
                                                    <i className="lni lni-graduation timeline-icon"></i>
                                                    <h3 className="timeline-date">
                                                        <i className="lni lni-calendar"></i> 2018 - 2021
                                                    </h3>
                                                    <h3 className="timeline-title">Bachelors Degree</h3>
                                                    <p className="timeline-text">Completed my Bachelors Degree in Science from Pundit Sambhu Nath Shukla University.</p>
                                                </div>
                                                {/* <!-- Timeline item  --> */}
                                                <div className="timeline-item">
                                                    <i className="lni lni-graduation timeline-icon"></i>
                                                    <h3 className="timeline-date">
                                                        <i className="lni lni-calendar"></i> 2021(Dec) - present
                                                    </h3>
                                                    <h3 className="timeline-title">Programming and Web development</h3>
                                                    <p className="timeline-text">stating programming in December, 2021.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="experience padd-15">
                                    <div className="row">
                                        <div className="timeline-box">
                                            <div className="timeline">
                                                {/* <!-- Timeline item  --> */}
                                                <div className="timeline-item">
                                                    <i className="lni lni-briefcase timeline-icon"></i>
                                                    <h3 className="timeline-date">
                                                        <i className="lni lni-calendar"></i> 2021 - present
                                                    </h3>
                                                    <h3 className="timeline-title">Web designs</h3>
                                                    <p className="timeline-text">Already made lot of Web Desings you can check them in my GitHub profile .</p>
                                                </div>
                                                {/* <!-- Timeline item  --> */}
                                                <div className="timeline-item">
                                                    <i className="lni lni-briefcase timeline-icon"></i>
                                                    <h3 className="timeline-date">
                                                        <i className="lni lni-calendar"></i> 2021 - present
                                                    </h3>
                                                    <h3 className="timeline-title">Front-end developer</h3>
                                                    <p className="timeline-text">Currenty Working as Front End Developer.</p>
                                                </div>
                                                {/* <!-- Timeline item  --> */}
                                                <div className="timeline-item">
                                                    <i className="lni lni-briefcase timeline-icon"></i>
                                                    <h3 className="timeline-date">
                                                        <i className="lni lni-calendar"></i> 2021(Dec) - present
                                                    </h3>
                                                    <h3 className="timeline-title">Bit back-end developer</h3>
                                                    <p className="timeline-text">Learing Backend Development.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- =================== Pricing ================= --> */}
                    <section className="section pricing" id="pricing">
                        <div className="container">
                            <h2 className="section-title padd-15">Pricing Plans</h2>
                            <div className="row">
                                {/* <!-- prices  --> */}
                                <div className="prices">
                                    <div className="price-item">
                                        <img src="/images/37.jpg" alt="Pricing" />
                                        <h3 className="plan">Basic</h3>
                                        <p>A simple option but powerfull to manage your business.</p>
                                        <p>Email support </p>
                                        <h3 className="price"><em>Rs.</em>250 <span>Month</span></h3>
                                        <a href="#" className="btn btn-default">Get started</a>
                                    </div>
                                </div>
                                {/* <!-- prices  --> */}
                                <div className="prices">
                                    <div className="price-item best">
                                        <span className="badge">Recommended</span>
                                        <img src="/images/37.jpg" alt="Pricing" />
                                        <h3 className="plan">Premium</h3>
                                        <p>We can provide you best gaming video editing experience.</p>
                                        <p>Email support </p>
                                        <h3 className="price"><em>Rs.</em>500 <span>Month</span></h3>
                                        <a href="#" className="btn btn-default">Get started</a>
                                    </div>
                                </div>
                                {/* <!-- prices  --> */}
                                <div className="prices">
                                    <div className="price-item">
                                        <img src="/images/37.jpg" alt="Pricing" />
                                        <h3 className="plan">Advanced</h3>
                                        <p>We can provide you best website designs.</p>
                                        <p>24/7 support </p>
                                        <h3 className="price"><em>Rs.</em>1000 <span>Month</span></h3>
                                        <a href="#" className="btn btn-default">Get started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- =================== Portfolio ================= --> */}
                    <section className="section portfolio" id="portfolio">
                        <div className="container">
                            <h2 className="section-title padd-15">Portfolio</h2>
                            <div className="row">
                                <div className="portfolio-filter padd-15">
                                    <div className="portfolio-filter-inner">
                                        <button type="button" className="active">Everything</button>
                                        <button type="button">Art</button>
                                        <button type="button">Creative</button>
                                        <button type="button">Design</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* <!-- portfolio item  --> */}
                                <div className="portfolio-item padd-15">
                                    <div className="portfolio-item-inner">
                                        <div className="portfolio-item-thumbnail">
                                            <img src="/images/portf.jpg" alt="" />
                                            <div className="mask"></div>
                                        </div>
                                        <span className="term">Art, design</span>
                                        <h3 className="portfolio-item-title">Project management illustration</h3>
                                        <span className="more-button">&hellip;</span>
                                    </div>
                                </div>
                                {/* <!-- portfolio item  --> */}
                                <div className="portfolio-item padd-15">
                                    <div className="portfolio-item-inner">
                                        <div className="portfolio-item-thumbnail">
                                            <img src="/images/portf.jpg" alt="" />
                                            <div className="mask"></div>
                                        </div>
                                        <span className="term">Art, design</span>
                                        <h3 className="portfolio-item-title">Project management illustration</h3>
                                        <span className="more-button">&hellip;</span>
                                    </div>
                                </div>
                                {/* <!-- portfolio item  --> */}
                                <div className="portfolio-item padd-15">
                                    <div className="portfolio-item-inner">
                                        <div className="portfolio-item-thumbnail">
                                            <img src="/images/portf.jpg" alt="" />
                                            <div className="mask"></div>
                                        </div>
                                        <span className="term">Art, design</span>
                                        <h3 className="portfolio-item-title">Project management illustration</h3>
                                        <span className="more-button">&hellip;</span>
                                    </div>
                                </div>
                                {/* <!-- portfolio item  --> */}
                                <div className="portfolio-item padd-15">
                                    <div className="portfolio-item-inner">
                                        <div className="portfolio-item-thumbnail">
                                            <img src="/images/portf.jpg" alt="" />
                                            <div className="mask"></div>
                                        </div>
                                        <span className="term">Art, design</span>
                                        <h3 className="portfolio-item-title">Project management illustration</h3>
                                        <span className="more-button">&hellip;</span>
                                    </div>
                                </div>
                                {/* <!-- portfolio item  --> */}
                                <div className="portfolio-item padd-15">
                                    <div className="portfolio-item-inner">
                                        <div className="portfolio-item-thumbnail">
                                            <img src="/images/portf.jpg" alt="" />
                                            <div className="mask"></div>
                                        </div>
                                        <span className="term">Art, design</span>
                                        <h3 className="portfolio-item-title">Project management illustration</h3>
                                        <span className="more-button">&hellip;</span>
                                    </div>
                                </div>
                                {/* <!-- portfolio item  --> */}
                                <div className="portfolio-item padd-15">
                                    <div className="portfolio-item-inner">
                                        <div className="portfolio-item-thumbnail">
                                            <img src="/images/portf.jpg" alt="" />
                                            <div className="mask"></div>
                                        </div>
                                        <span className="term">Art, design</span>
                                        <h3 className="portfolio-item-title">Project management illustration</h3>
                                        <span className="more-button">&hellip;</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="container">
                            <h2 className="section-title padd-15">Clients and reviews</h2>
                            <div className="swiper testimonial-wrapper">
                            <Swiper pagination={true} loop={true} modules={[Pagination]} className="mySwiper">
                                    <SwiperSlide>
                                        {/* <!-- testimonial item  --> */}
                                        <div className="testimonial-item swiper-slide">
                                            <div className="thumb">
                                                <img src="/images/1.jpg" alt="" />
                                            </div>
                                            <h3>Sumit </h3>
                                            <span className="subtitle">Learning Web development</span>
                                            <div className="comment">I love to make web designs and i learn so much. You guys make the
                                                process fun and interesting. LOVE you! ❤😊</div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        {/* <!-- testimonial item  --> */}
                                        <div className="testimonial-item swiper-slide">
                                            <div className="thumb">
                                                <img src="/images/1.jpg" alt="" />
                                            </div>
                                            <h3>Sumit </h3>
                                            <span className="subtitle">Learning Web development</span>
                                            <div className="comment">This guy is the best in all the field and he is a really nice guy. ❤😊
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </section>
                    {/* <!-- =================== Blog ================= --> */}
                    <section className="section" id="blog">
                        <div className="container">
                            <h2 className="section-title pad-15">Latest posts</h2>
                            <div className="row">
                                {/* <!-- blog item  --> */}
                                <div className="blog-item padd-15">
                                    <div className="inner">
                                        <div className="thumb">
                                            <a href="#"><span className="category">Reviews</span></a>
                                            <a href="#"><img src="/images/6.png" alt="" /></a>
                                        </div>
                                        <div className="details">
                                            <h3 className="title"><a href="#">5 Best web development tool for your projects</a></h3>
                                            <ul className="meta">
                                                <li>18 January, 2021</li>
                                                <li>Tushar</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- blog item  --> */}
                                <div className="blog-item padd-15">
                                    <div className="inner">
                                        <div className="thumb">
                                            <a href="#"><span className="category">Tutorial</span></a>
                                            <a href="#"><img src="/images/6.png" alt="" /></a>
                                        </div>
                                        <div className="details">
                                            <h3 className="title"><a href="#">Common misconceptions about payments</a></h3>
                                            <ul className="meta">
                                                <li>26 January, 2021</li>
                                                <li>Tushar</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- blog item  --> */}
                                <div className="blog-item padd-15">
                                    <div className="inner">
                                        <div className="thumb">
                                            <a href="#"><span className="category">Colleges</span></a>
                                            <a href="#"><img src="/images/6.png" alt="" /></a>
                                        </div>
                                        <div className="details">
                                            <h3 className="title"><a href="#">These are some best web development techniques</a></h3>
                                            <ul className="meta">
                                                <li>26 september, 2021</li>
                                                <li>Tushar</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- =================== Contacts ================= --> */}
                    <section className="section contact" id="contact">
                        <div className="container">
                            <h2 className="section-title padd-15">Contact Us</h2>
                            <div className="row">
                                <div className="contact-box padd-15">
                                    <div className="contact-data">
                                        {/* <!-- contact information  --> */}
                                        <div className="contact-information">
                                            <h3 className="contact-subtitle">Call us for instant support </h3>
                                            <span className="contact-description">
                                                <i className="lni lni-phone contact-icon"></i>
                                                +91 87700 54247
                                            </span>
                                        </div>
                                        {/* <!-- contact information  --> */}
                                        <div className="contact-information">
                                            <h3 className="contact-subtitle">Write us by Email </h3>
                                            <span className="contact-description">
                                                <i className="lni lni-user contact-icon"></i>
                                                ty72072@gmail.com
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- contact form  --> */}
                                <form action="" className="contact-form padd-15">
                                    <div className="contact-inputs">
                                        {/* <!-- contact content  --> */}
                                        <div className="contact-content">
                                            <input type="email" className="contact-input" />
                                            <label for="" className="contact-label">Email</label>
                                            <span></span>
                                        </div>
                                        {/* <!-- contact content  --> */}
                                        <div className="contact-content">
                                            <input type="text" className="contact-input" />
                                            <label for="" className="contact-label">Subject</label>
                                            <span></span>
                                        </div>
                                        {/* <!-- contact content  --> */}
                                        <div className="contact-content contact-area">
                                            <textarea name="" id="" cols="30" rows="10" className="contact-input"></textarea>
                                            <label for="" className="contact-label">Message</label>
                                            <span></span>
                                        </div>
                                    </div>
                                    <a href="#" className="btn btn-default">Send message</a>
                                </form>
                            </div>
                        </div>
                    </section>
                    {/* <!-- =================== Footer ================= --> */}
                    <footer className="footer">
                        <div className="container">
                            <div className="footer-text padd-15">
                                <p>&copy; Ecogas Gaming-2022 | All rights reserved</p>
                            </div>
                        </div>
                    </footer>
                </main>
                {/* <!-- =================== Theme customization ================= --> */}
                <div className="theme-customization">
                    <div className="card">
                        <h2>Customize your view</h2>
                        <p>Manage your font size, color, background</p>
                        <div className="font-size">
                            <h3>Font Size</h3>
                            <div>
                                <h6>Aa</h6>
                                <div className="choose-size">
                                    <span className="font-size-1"></span>
                                    <span className="font-size-2"></span>
                                    <span className="font-size-3 active"></span>
                                    <span className="font-size-4"></span>
                                </div>
                                <h3>Aa</h3>
                            </div>
                        </div>
                        {/* <!-- color --> */}
                        <div className="color">
                            <h3>Color</h3>
                            <div className="choose-color">
                                <span className="color-1"></span>
                                <span className="color-2"></span>
                                <span className="color-3 active"></span>
                                <span className="color-4"></span>
                                <span className="color-5"></span>
                            </div>
                        </div>
                        {/* <!-- background  --> */}
                        <div className="background">
                            <h3>Background</h3>
                            <div className="choose-bg">
                                <div className="bg-1 active">
                                    <span></span>
                                    <h5 for="bg-1">Light</h5>
                                </div>
                                <div className="bg-3">
                                    <span></span>
                                    <h5 for="bg-3">Dim</h5>
                                </div>
                                <div className="bg-3">
                                    <span></span>
                                    <h5 for="bg-3">Dark</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </body>
        </>
    )
}
