import Image from 'next/image'
import {Carousel, CarouselItem , Row, Col} from 'react-bootstrap'
import bassiPart1 from '../public/project-1-part-1.png'
import bassiPart2 from '../public/project-1-part-2.png'
import blogPart1 from '../public/project-2-part-1.png'
import blogPart2 from '../public/project-2-part-2.png'

export default function ProjectCarousel() {
    return(
        <>
        <h1>Projects</h1>
        <Row>
            <Col md="5">
                <Carousel variant="dark">
                    <CarouselItem >
                        <Image src={bassiPart1} sizes="50vw" layout='responsive'  />
                        
                    </CarouselItem>

                    <CarouselItem >
                        <Image src={bassiPart2} sizes="50vw" layout='responsive'  />
                        
                    </CarouselItem>
                    
                </Carousel>
                <h4>Bassi &amp; Associates</h4>
                <p>Intellectual Property Consultant</p>

            </Col>

            <Col md={{offset:2, span:5}}>
                <Carousel variant="dark">
                    <CarouselItem >
                        <Image src={blogPart1} sizes="50vw" layout='responsive'  />
                        
                    </CarouselItem>

                    <CarouselItem >
                        <Image src={blogPart2} sizes="50vw" layout='responsive'  />
                        
                    </CarouselItem>
                    
                </Carousel>
                <h4>Blog website</h4>
                <p>A simple blog web app</p>

            </Col>
        </Row>
        </>
    )
}