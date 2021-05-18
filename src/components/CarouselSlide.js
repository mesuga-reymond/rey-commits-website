import React from 'react'
import {Carousel} from 'react-bootstrap'

function CarouselSlide() {
    return (
        <div className="carousel-body">
        <h3 className="header-text">Here is what i can bring to the table:</h3>
            <Carousel fade>
                <Carousel.Item interval={5000}>
                    <img
                        className="carousel-image"
                        src="https://threatwarrior.com/wp-content/uploads/2019/01/tw-press-neural-1024x288.png"
                        alt="First slide"/>
                    <Carousel.Caption>
                        <h3>Data Analysis</h3>
                        <p>I use python as my main language when it comes to data analysis. 
                        Datasets involve in my studies ranging from health, socio-economic and industrial datasets</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="carousel-image"
                        src="https://threatwarrior.com/wp-content/uploads/2019/01/tw-press-neural-1024x288.png"
                        alt="Second slide"/>
                    <Carousel.Caption>
                        <h3>Machine and Deep Learning</h3>
                        <p>I use PyTorch and Tensorflow on most of my projects that mainly focuses on prediction and classification</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="carousel-image"
                        src="https://threatwarrior.com/wp-content/uploads/2019/01/tw-press-neural-1024x288.png"
                        alt="Third slide"/>
                    <Carousel.Caption>
                        <h3>Wep App Development</h3>
                        <p>I mainly use ReactJS and bootstrap as my main front-end framework to build web apps.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselSlide
