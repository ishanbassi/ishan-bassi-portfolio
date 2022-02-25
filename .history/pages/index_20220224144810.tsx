import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container , Row , Col} from 'react-bootstrap'
import ProfileImg from '../public/getProfileImage.jpg'
import fullStack from '../public/fullStack.jpg'
import seo from '../public/seo.jpg'
import spa from '../public/spa.jpg'
import Markdown from 'markdown-to-jsx'
import {promises as fsPromises} from 'fs'


const Home: NextPage<{markdown:string}> = ({markdown}) => {
  const bioRef = useRef(null)
  const testRef = useRef(null)
  const IOCallback:IntersectionObserverCallback = (entries,  observer) => {
    entries.forEach(entry => {
        
        if(entry.isIntersecting){
          entry.target.classList.add('test')
        }else{
          entry.target.classList.remove('test')
        }

    })
  }

  useEffect(() => {
    
    const observer = new IntersectionObserver(IOCallback, {
        threshold:.8
    })
  
    if(bioRef.current) {
      observer.observe(bioRef.current)
      
    }
    return () => {
      if (bioRef.current) {
        observer.observe(bioRef.current)
      
      }
    }
    
  })
  return (
    
    <div className='text-center mt-5'>
      <Head>
        
        <title>Ishan Bassi's Profile</title>
        
      </Head>
      <Container className={styles.container}>
        

        <div className={styles.profileImgCover}> 
          <Image src={ProfileImg} priority className={styles.profileImg} height="180" width="180"></Image>
        </div>
      </Container>    
      <Container>
        <h1>Hi</h1>
        <h2>My Name is <b>Ishan Bassi</b></h2>
        <h3>I am a self taught web developer</h3>
      </Container>
      <Container fluid="md" className="mt-5">
        <h1>About Me</h1>
        <div className={styles.bio}>
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
                  
                  
                </ul>
              </span>
            </li>
            <li><b className={styles.bioHeads}>Experience :</b><span className={styles.bioAns}>Fresher</span>  </li>
          </ul>
        </div>
      </Container>
      <Container className="mt-5">
        <p className={styles.bioPara}>
         <em> Started Programming in 2019, I began my learning with <b>Python</b>, then moved to <b>Javascript</b>. For the past one year I am learning  and doing <b>React.js</b> projects.Currently I am learning <b>Typescript.</b></em>
        </p>
      </Container>
      <Container>
        <Row style={{position:"relative"}}>
          <Col md="3">
            
            <Image src={fullStack} alt="full stack"    layout="responsive" placeholder='blur' width="3000" height="2000 "/>
          </Col>
        </Row>
      </Container>
    </div>
  )
    
}
export async function getStaticProps() {
  let HomePageMD;
  try{
    HomePageMD = await fsPromises.readFile('markdown/home-page.md' , 'utf8')
  }catch(err) {
    console.error('no file present ')
    
  }
    
  return{
    props:{
      markdown:HomePageMD
    }
  }
}
export default Home
