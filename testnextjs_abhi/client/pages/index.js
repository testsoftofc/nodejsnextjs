import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import ListCode from '../components/ListCode';

export default function Home() {
  return (
    <div className={styles.container}>
        <h1>Hi Welcome in Next-Js</h1>

        <ListCode></ListCode>

    </div>
  )
}
