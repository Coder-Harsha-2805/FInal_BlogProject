import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

// import { IF, URL } from "../url"


export default function Home() {
    return (
        <>
        <Navbar brand=" लेखक"/>
        <div>
            
            <div className='container my-5 bg-secondary'>
                <section className="hero-section">
                    <div className="container pt-5">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h1>लेखक</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, facilis quos impedit quas nisi cumque! Provident eum nihil cum officiis!.</p>
                                <a href="/register" className="btn btn-dark">Create an account</a>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-light-lg-8">
                            
                            <h2>Our Goal</h2>
                            <p>At लेखक, our mission is to inspire, educate, and empower our readers to lead happier, healthier, and more fulfilling lives. Through insightful articles, practical tips, and engaging content, we strive to foster personal growth, promote positive change, and provide valuable resources for individuals seeking to improve various aspects of their lives. Whether youre looking for wellness advice, career guidance, or creative inspiration, our goal is to be your trusted companion on the journey towards self-discovery and holistic well-being. Join us as we explore the endless possibilities of personal development, cultivate meaningful connections, and celebrate the joy of living life to the fullest.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
