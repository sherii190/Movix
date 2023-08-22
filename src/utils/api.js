import axios from "axios";

const BASE_URL = "https://www.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer" + TMDB_TOKEN,
    
}