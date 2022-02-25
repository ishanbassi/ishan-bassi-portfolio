import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container , Row , Col} from 'react-bootstrap'
import ProfileImg from '../public/getProfileImage.jpg'
import Markdown from 'markdown-to-jsx'
import {promises as fsPromises} from 'fs'
import { IOCallback, observer } from '../utility/observer'
const Home: NextPage<{markdown:string}> = ({markdown}) => {
  const bioRef = useRef(null)
  const testRef = useRef(null)


  useEffect(() => {
    
    if(bioRef.current && testRef.current) {
      observer.observe(bioRef.current)
      observer.observe(testRef.current)
    }
    return () => {
      if (bioRef.current && testRef.current) {
        observer.observe(testRef.current)
        observer.unobserve(bioRef.current)
      }
    }
    
  })
  return (
    
    <div>
      <Head>
        <title>Ishan Bassi's Profile</title>
      </Head>
      <Container className={styles.container}>
        

        <div className={styles.profileImgCover}> 
          <Image src={ProfileImg} priority className={styles.profileImg} height="180" width="180"></Image>
        </div>
      </Container>    
      <Container>
        <p ref={testRef}>testing</p>
        <Markdown
         className="text-center"
         options={{
           overrides:{
             p:{
               props:{
                 ref:bioRef,
                 className:'test2'
               }
             }
           }
         }}
          >
          {markdown}
        </Markdown>
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
