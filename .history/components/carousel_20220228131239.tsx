import Image from 'next/image'
import {Carousel, CarouselItem , Row, Col} from 'react-bootstrap'
import bassiPart1 from '../public/project-1-part-1.png'
import bassiPart2 from '../public/project-1-part-2.png'
import blogPart1 from '../public/project-2-part-1.png'
import blogPart2 from '../public/project-2-part-2.png'
import styles from '../styles/Home.module.css'
export default function ProjectCarousel() {
    return(
        <>
        <h1>Projects</h1>
        <p>I can build web applications which are SEO friendly.These projects are non-commercial projects.</p>
        <Row className="mt-3">
            <Col md="5">
                <div className={`${styles.baseShadow} ${styles.projCarousel}`} >
                    <Carousel variant="dark" >
                        <CarouselItem interval={3000}>
                            <a href="https://bassi-and-associates.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <Image src={bassiPart1} sizes="50vw" layout='responsive'  />
                            
                        </CarouselItem>

                        <CarouselItem interval={3000}>
                            <Image src={bassiPart2} sizes="50vw" layout='responsive'  />
                            
                        </CarouselItem>
                        
                    </Carousel>
                    <div className="pt-3 pb-1">
                        <h4>Bassi &amp; Associates</h4>
                        <p>Intellectual Property Consultant</p>
                    </div>
                </div>

            </Col>

            <Col md={{offset:2, span:5}}>
                <div className={`${styles.baseShadow} ${styles.projCarousel}`}>
                    <Carousel variant="dark">
                        <CarouselItem >
                            <Image src={blogPart1} sizes="50vw" layout='responsive'  />
                            
                        </CarouselItem>

                        <CarouselItem >
                            <Image src={blogPart2} sizes="50vw" layout='responsive'  />
                            
                        </CarouselItem>
                        
                    </Carousel>
                    <div className='pt-3 pb-1'>
                        <h4>Blog website</h4>
                        <p>A simple blog web app</p>
                    </div>
                </div>

            </Col>
        </Row>
        </>
    )
}