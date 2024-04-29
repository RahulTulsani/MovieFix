import { movieAPI } from "./ApiManager";

interface endpointsType {
    genres:String
    movies: (params?:movieAPI)=>String,
    credits:(movieID?:number)=>String
}

const ENDPOINTS:endpointsType = {
    genres: '/genre/movie/list',
    movies: ({year=2023,genreID=1}:movieAPI={}):String =>{
        let endpointURl = `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${year}&sort_by=popularity.desc&vote_count.gte=100`;
        if(genreID!==1)
            endpointURl += `&with_genres=${genreID}`
        return endpointURl;
    },
    credits:(movieID:number=0):String => `/movie/${movieID}/credits`
}

export default ENDPOINTS;