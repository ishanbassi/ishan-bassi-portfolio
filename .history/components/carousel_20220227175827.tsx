import Image from 'next/image'
import {Carousel, CarouselItem , Row, Col} from 'react-bootstrap'
import bassiPart1 from '../public/project-1-part-1.png'
import bassiPart2 from '../public/project-1-part-2.png'


export default function ProjectCarousel() {
    return(
        <Row>
            <Col md="5">
                <Carousel variant="dark">
                    <CarouselItem >
                        <Image src={bassiPart1} sizes="50vw" layout='fill'  />
                        
                    </CarouselItem>

                    <CarouselItem >
                        <Image src={bassiPart2} sizes="50vw" layout='responsive'  />
                        
                    </CarouselItem>
                    
                </Carousel>
                <h4>Bassi &amp; Associates</h4>
                <p>Intellectual Property Consultant</p>

            </Col>
        </Row>
       
    )
}