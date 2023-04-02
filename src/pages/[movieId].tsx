import { useState } from "react";
import Head from "next/head";
import { movieUrl, creditsUrl, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../utilities/config";
// BASIC FETCH
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import MovieInfo from "@/components/MovieInfo";
import ListView from "@/components/ListView";
import ListViewCard from "@/components/ListViewCard";
//  COMPONENTS
import { basicFetch } from "../services/fetchFunctions";
//TYPES
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { Movie, Credits, Crew, Cast } from "../utilities/types";


type Props = {
    movie: Movie;
    directors: Crew[];
    cast: Cast[];
}

const Movie: NextPage<Props> = ({ movie, cast, directors }) => {

    const [query, setQuery] = useState("");

    return (
        <>
            <Head>
                <title>{movie.original_title} | Aryzone</title>
                <meta name="description" content={movie.overview}/>
            </Head>
            <Header setQuery={setQuery}/>
            <Breadcrumb title={movie.original_title}/>
            <main>
            <MovieInfo 
                thumbUrl={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : "./no_image.jpg"}
                rating={movie.vote_average}
                year={movie.release_date.split("-")[0]}
                title={movie.original_title}
                backgroundImgUrl={movie.backdrop_path ? IMAGE_BASE_URL + BACKDROP_SIZE + movie.backdrop_path : "/no_image.jpg"}
                summary={movie.overview}
                directors={directors}
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <ListView classname="single-movie-actors" title="Actors">
            {cast.map(actor => (
                <ListViewCard 
                    key={actor.credit_id} 
                    title={actor.name} 
                    imgUrl={actor.profile_path ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path : "/no_image.jpg"}
                    subtitle={actor.character}
                />
            ))}
            </ListView>
            </main>
        </>
    );
};

export default Movie;

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    };
};

export const getStaticProps: GetStaticProps = async context => {
    const id = context.params?.movieId as string;

    const movieEndpoint: string =  movieUrl(id);
    const creditsEndpoint: string = creditsUrl(id);

    const movie = await basicFetch<Movie>(movieEndpoint);
    const credits = await basicFetch<Credits>(creditsEndpoint);

    const directors = credits.crew.filter(member => member.job === "Director");

    return {
        props: {
            movie,
            directors,
            cast: credits.cast
        },
        revalidate: 60 * 60 * 24 //rebuild page every 24 hours
    };
};