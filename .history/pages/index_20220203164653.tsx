import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container , Row , Col} from 'react-bootstrap'
import ProfileImg from '../public/getProfileImage.jpg'
import Markdown from 'markdown-to-jsx'
import {promises as fsPromises} from 'fs'
const Home: NextPage<{markdown:string}> = ({markdown}) => {
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
        <Markdown className="text-center">
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
