import {
  Button,
  Title,
  Waves,
  Container,
  Column,
  Paragraph,
  View,
  EbCard,
  DeepCard,
} from "@/components/index";
import Image from "next/image";
import { EbData, DeepData } from "../data";

export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Termômetro Employer Branding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Em breve  <a href="https://matchboxbrasil.com/">Termômetro Employer Branding Deploy</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
