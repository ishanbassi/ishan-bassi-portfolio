import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container , Row , Col} from 'react-bootstrap'
import ProfileImg from '../public/getProfileImage.jpg'
import fullStack from '../public/fullStack.jpg'
import seo from '../public/seo.jpg'
import ui from '../public/ui.jpg'
import spa from '../public/spa.jpg'
import Markdown from 'markdown-to-jsx'
import {promises as fsPromises} from 'fs'
import ProjectCarousel from '../components/carousel'

const Home: NextPage<{markdown:string}> = ({markdown}) => {
  const aboutMeRef = useRef(null)
  const skillsRef1 = useRef(null)
  const heroRef = useRef(null)
  const projectRef = useRef(null)

  const IOCallback:IntersectionObserverCallback = (entries,  observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('fadeDown')
    })

    
  }

  useEffect(() => {

    const observer = new IntersectionObserver(IOCallback,{
      threshold:.2,
      root:null
    })
  
    if(aboutMeRef.current && skillsRef1.current && heroRef.current && projectRef.current) {

      observer.observe(aboutMeRef.current)
      observer.observe(skillsRef1.current)
      observer.observe(heroRef.current)
      observer.observe(projectRef.current)
    }
    return () => {
      if(aboutMeRef.current && skillsRef1.current && heroRef.current && projectRef.current){
        observer.unobserve(aboutMeRef.current)
        observer.unobserve(skillsRef1.current)
        observer.unobserve(heroRef.current)
        observer.unobserve(projectRef.current)
      }

    }
    
  })
  return (
    
    <div className='text-center mt-5'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/7991078b1d.js" crossOrigin="anonymous"></script>
        <title>Ishan Bassi&apos;s Profile</title>
        
      </Head>
      <Container fluid="md" className={styles.container}>
        <div ref={heroRef}>
          <div className={styles.profileImgCover}> 
            <Image src={ProfileImg} priority className={styles.profileImg} height="180" width="180" alt="profile-pic" ></Image>
          </div>
          <h1>Hi</h1>
          <h2>My Name is <b>Ishan Bassi</b></h2>
          <h3>I am a self taught web developer</h3>
        </div>
      </Container>    
  
      <Container fluid="md" className="mt-5" >
        <div className={`${styles.bio} ${styles.baseShadow} `} ref={aboutMeRef} >
          <ul>
            <li>
              <b className={styles.bioHeads}>Name :</b>
                <span className={styles.bioAns}> Ishan Bassi</span>
                </li>
                  
            <li>
              <b className={styles.bioHeads}>Age :</b>
              <span className={styles.bioAns}>21</span>
            </li>
            <li><b className={styles.bioHeads}>Qualification :</b><span className={styles.bioAns}>B.A. LL.B , Panjab Univserity,<br /> Chandigarh (current)</span> </li>
            <li><b className={styles.bioHeads}>Frameworks / Libraries :</b> 
              <span className={styles.bioAns}>
                <ul>
                  <li id={styles.reactIcon} className={styles.frameworkIcons}>
                    React.Js
            
                    </li>
                  <li id={styles.nextIcon} className={styles.frameworkIcons}>Next.js</li>
                  <li id={styles.djangoIcon} className={styles.frameworkIcons}>Django</li>
                </ul>
              </span>
            </li>
            <li><b className={styles.bioHeads}>Skills :</b> 
              <span className={styles.bioAns}>
                  <ul>
                  <li>
                    Full Stack Development
                  </li>
                  <li>SEO optimization</li>
                  <li>Single Page Applications</li>
                  <li>UI development</li>
                </ul>
              </span>
            </li>
            <li><b className={styles.bioHeads}>Experience :</b><span className={styles.bioAns}>Fresher</span>  </li>
          </ul>
        </div>
      </Container>
      <Container className="mt-5" fluid="md">
        <p className={styles.bioPara}>
         <em> Started Programming in 2019, I began my learning with <b>Python</b>, then moved to <b>Javascript</b>. For the past one year I am learning  and doing <b>React.js</b> projects.Currently I am learning <b>Typescript.</b></em>
        </p>
      </Container>
      <Container className="mt-5" fluid="md">
        <div ref={skillsRef1}>
          <h1>Skills </h1>
          <p>I can work on the projects which requires role of full stack developer or UI developer.</p>
          <Row className='mt-3'>
            <Col md="5">
              <div className={`${styles.skillsImg} ${styles.baseShadow}`}>
                <Image  src={fullStack} alt="full stack" layout='fill'   placeholder="blur" sizes="50vw" objectFit="fill"/> 
                
              </div>
              <h4>Full Stack Development</h4>
            </Col>
            <Col md={{offset:2 , span:5}}>
              <div className={`${styles.skillsImg} ${styles.baseShadow}`}>
                <Image  src={seo} alt="seo support" layout='fill'   placeholder="blur" sizes="50vw"  objectFit="fill"/>
                
              </div>
              <h4>SEO Support</h4>
            </Col>
            <Col className="mt-5" md={5}>
              <div className={`${styles.skillsImg} ${styles.baseShadow}`}>
                <Image  src={ui} alt=" UI development" layout='fill'   placeholder="blur" sizes="50vw"  objectFit="fill" />
                
              </div>
              <h4>UI Development</h4>
            </Col>
            <Col className="mt-5" md={{offset:2 , span:5}}>
              <div className={`${styles.skillsImg} ${styles.baseShadow}`}>
                <Image  src={spa} alt="single page applications" layout='fill'   placeholder="blur"   objectFit="fill" sizes='50vw'/>
                
              </div>
              <h4>Single Page Applications</h4>
            </Col>
            
          </Row>
        </div>
      </Container>
      <Container className="mt-5" fluid="md">
        <div ref={projectRef}>
          <ProjectCarousel />
        </div>
      </Container>

      <Container className="mt-5" fluid="md">
        <h1>Social Links</h1>
        <p>You can contact me on my profile.</p>
        <Row>
          <Col  className={`${styles.socialLinks}  `} ><a href="https://www.facebook.com/ishan.bassi.9/" target="_blank" rel="noopener noreferrer " title="Facebook Profile"><i className={`fa-brands fa-facebook-f `} id={styles.fbLink}></i></a></Col>
          <Col className={`${styles.socialLinks} `}><a href="https://www.instagram.com/ishan__bassi/"target="_blank" rel="noopener noreferrer "  title="Instagram Profile"><i className={`fa-brands fa-instagram-square `} id={styles.instaLink}></i></a></Col>
          <Col className={`${styles.socialLinks} `}><a href="https://www.linkedin.com/in/ishan-bassi-259301206/"target="_blank" rel="noopener noreferrer "  title="LinkedIn Profile"><i className={`fa-brands fa-linkedin `} id={styles.linkedinLink}></i></a></Col>
          <Col  className={`${styles.socialLinks} `}><a href="https://stackoverflow.com/users/16685634/ishan-bassi"target="_blank" rel="noopener noreferrer "  title="Stackoverflow Profile"><i className={`fa-brands fa-stack-overflow `} id={styles.stackLink}></i></a></Col>
        </Row>
        
      </Container>
      <Container fluid>
        <footer className="mt-5 pt-4 pb-4">
          <div className={styles.footer}>
            <p>This site is created using <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className={styles.frameworkIcons} id={styles.nextIconfooter}>Next.js</a> </p>
          </div>
        </footer>
      </Container>
      
    </div>
  )
    
}
// export async function getStaticProps() {
//   let HomePageMD;
//   try{
//     HomePageMD = await fsPromises.readFile('markdown/home-page.md' , 'utf8')
//   }catch(err) {
//     console.error('no file present ')
    
//   }
    
//   return{
//     props:{
//       markdown:HomePageMD
//     }
//   }
// }
export default Home
