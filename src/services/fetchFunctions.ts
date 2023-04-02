import { Movies } from "../utilities/types";

export const basicFetch = async <returnType>(endpoint: string): Promise<returnType> => {

    const response = await fetch(endpoint);

    if(response.ok){
        return response.json();
    }
    
    throw new Error("Error!");
}

export const fetchMovies = async (search = "", page=1): Promise<Movies> => {
    return await basicFetch<Movies>(`http://localhost:3000/api/movies?search=${search}&page=${page}`);
}