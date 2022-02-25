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
    
    <div className='text-center'>
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
      <Container>
        <h2>About Me</h2>
        <p>
        I have been doing full stack web development for the last one year. Started learning in
        2019, my first encounter with programming was through <b>Python</b> , but now most of 
        it goes with <b>Javascript Frameworks</b>. Currently I am learning <b>Typescript</b>.
        </p>
      </Container>
    </div>
  )
    
}
export async function getStaticProps() {
  const HomePageMD = await fsPromises.readFile('markdown/home-page.md' , 'utf8')
    
  return{
    props:{
      markdown:HomePageMD
    }
  }
}
export default Home
