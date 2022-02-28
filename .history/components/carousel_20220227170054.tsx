import Image from 'next/image'
import {Carousel, CarouselItem} from 'react-bootstrap'
import bassiPart1 from '../public/project-1-part-1.png'
import bassiPart2 from '../public/project-1-part-2.png'


export default function ProjectCarousel() {
    return(
        <Carousel>
            <CarouselItem className="skillsImg">

                <Image src={bassiPart1} sizes="50vw" layout='fill'  />
                <Carousel.Caption>
                    <h3>Bassi &amp; Associates</h3>
                    <p>Intellectual Property Consultant</p>
                </Carousel.Caption>
            </CarouselItem>
        </Carousel>
    )
}