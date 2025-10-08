import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
     const [movieLists, setMovieLists] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
        getDatas()
    }, [])

    useEffect(() => {
        getData()
        getDatas()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }
        const getDatas = () => {
        fetch(`https://api.themoviedb.org/3/tv/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieLists(data.results))
    }
    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type +"  Movies" : "POPULAR MOVIES").replace("_"," ").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.slice(0, 18).map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
                        <h2 className="list__title">{(type ? type + "  TV SHOWS" : "POPULAR TV SHOWS").replace("_"," ").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieLists.slice(0, 18).map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
        
    )
}

export default MovieList