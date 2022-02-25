import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container , Row , Col} from 'react-bootstrap'
const Home: NextPage = () => {
  return (
    <Container>
      <img src="../public/getProfileImage.jpg" width="680" height="600"></img>
    </Container>
  )
    
}

export default Home
