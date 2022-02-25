import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container , Row , Col} from 'react-bootstrap'
import ProfileImg from '../public/getProfileImage.jpg'
import Markdown from 'markdown-to-jsx'
import homeMarkDown from '../markdown/home-page.md'
const Home: NextPage = () => {
  return (
    <Container>
      <Container className={styles.container}>
        <div className={styles.profileImgCover}> 
          <Image src={ProfileImg} priority className={styles.profileImg} height="200" width="200"></Image>
        </div>
      </Container>    
      <Container>
        <Markdown>
          {homeMarkDown}
        </Markdown>
      </Container>
    </Container>
  )
    
}

export default Home
