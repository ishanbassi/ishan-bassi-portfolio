import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container , Row , Col} from 'react-bootstrap'

const Home: NextPage = () => {
  return (
    <Container className={styles.container}>
      <Image src="/../public/getProfileImage.jpg" width="680" height="600"></Image>
    </Container>
  )
    
}

export default Home
