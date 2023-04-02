import { useState } from 'react'
import Link from 'next/link'
import type { NextPage } from 'next'
import Head from 'next/head'
//  fetch hook
import { useFetchMovies } from '../hooks/fetchHooks'
//config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../utilities/config'

//  components
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ListView from '@/components/ListView'
import ListViewCard from '@/components/ListViewCard'
import Spinner from '@/components/Spinner'

const Home: NextPage = () => {

  const [query, setQuery] = useState("");

  const { data, fetchNextPage, isLoading, isFetching, error } = useFetchMovies(query);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const {scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if(scrollHeight - scrollTop === clientHeight) fetchNextPage();
  }

  // if(error) return <div className="text-red-500">Oops there's an error</div>;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Aryzone - The movie zone for the heartless</title>
        <meta name="description" content="The movie zone for the heartless"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header setQuery={setQuery} />
      <main className="relative">
      {!query && data && data.pages ? (
        <Hero 
          imgUrl={
            data.pages[0].results[0].backdrop_path 
            ? IMAGE_BASE_URL + BACKDROP_SIZE + data.pages[0].results[0].backdrop_path 
            : '/no_image.jpg'
          }
          title={data.pages[0].results[0].title}
          text={data.pages[0].results[0].overview}
        />
        ) : null}
        <ListView 
          classname='popular-movie-list' 
          title={query ? `Search Results: ${data?.pages[0].total_results}` : 'Popular movies'}
        >
          {data && data.pages 
            ? data.pages.map(page => 
                page.results.map(movie => (
                  <Link key={movie.id} href={`/${movie.id}`} className="cursor-pointer hover:opacity-80 duration-300">
                    <ListViewCard
                      title={movie.original_title} 
                      imgUrl={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : "/no_image.jpg" } />
                  </Link>
                )
              )
            )
            : null
          }
        </ListView>
        {isLoading || isFetching ? <Spinner/> : null}
      </main>
    </>
  )
}

export default Home