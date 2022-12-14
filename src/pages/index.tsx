import Head from 'next/head'

import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import { Results } from '../components/Results'
import { requests } from '../utils/requests'

export default function Home({ results }: { results: any }) {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
      </Head>

      <Header />

      <Navbar />   

      <Results results={results} />   

    </div>
  )
}

export async function getServerSideProps(context: { query: { genre: string } }) {
  const genre = context.query.genre

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  ).then(res => res.json())
  return {
    props: {
      results: request.results
    }
  }
}