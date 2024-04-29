import axios, { AxiosResponse } from "axios"
import ENDPOINTS from "./EndPoints";

const BASE_URL:string = 'https://api.themoviedb.org/3'
const APIKey:string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDIyYjQwNTgzZjFiNTU5MDJjZDAyY2RhNTVjZWI4YyIsInN1YiI6IjY2Mjk0OWViY2I2ZGI1MDE4NmIzOTFiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIhUfDhp733dBbQZ7bqdaEKOhCdQNvJ2o_JD0mG91-c'
export const IMAGE_BASE_URL:string = 'https://image.tmdb.org/t/p/original'

export interface movieAPI{
    year?:number | undefined,
    genreID?: number | null,
}

class ApiManager{
    static fetchGenres():Promise<AxiosResponse>{ 
        const url: string = BASE_URL + ENDPOINTS.genres;
        return axios.get(url,{
            headers:{
                Accept:'application/json',
                Authorization:`Bearer ${APIKey}`
            }
        })
    }

    static fetchMovies({year,genreID}:movieAPI):Promise<AxiosResponse>{
        const url: string = BASE_URL + ENDPOINTS.movies({year,genreID});
        return axios.get(url,{
            headers:{
                Accept:'application/json',
                Authorization:`Bearer ${APIKey}`
            }
        })
    }
    static fetchCredits(movieID:number):Promise<AxiosResponse>{
        const url: string = BASE_URL + ENDPOINTS.credits(movieID);
        return axios.get(url,{
            headers:{
                Accept:'application/json',
                Authorization:`Bearer ${APIKey}`
            }
        })
    }
}

export default ApiManager