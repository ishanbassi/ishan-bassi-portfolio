import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container , Row , Col} from 'react-bootstrap'
import ProfileImg from '../public/getProfileImage.jpg'

const Home: NextPage = () => {
  return (
    <Container className={styles.container}>
      <Image src={ProfileImg} priority className={styles.profileImg}></Image>
    </Container>
  )
    
}

export default Home
