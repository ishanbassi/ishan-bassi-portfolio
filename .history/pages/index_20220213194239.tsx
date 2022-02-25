import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container , Row , Col} from 'react-bootstrap'
import ProfileImg from '../public/getProfileImage.jpg'
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
        <script src="https://kit.fontawesome.com/0bad2c8be1.js" crossOrigin="anonymous"></script>
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
      <Container>
        <h1>About Me</h1>
        <div className={styles.bio}>
          <ul>
            <li>Name : Ishan Bassi</li>
            <li>Age : 21</li>
            <li>Qualification : B.A. LL.B , Panjab Univserity, Chandigarh (current)</li>
            <li>Frameworks/Libraries : 
              <ul>
                <li>React.Js <i className="fa-brands fa-js"></i></li>
                <li>Next.js</li>
                <li>Django</li>
              </ul>
            </li>
            <li>Skills :
              <ul>
                <li>
                  Full Stack Development
                </li>
                <li>SEO optimization</li>
                <li>Single Page Applications</li>
                
              </ul>
            </li>
            <li>Experience : Fresher</li>
          </ul>
        </div>
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
