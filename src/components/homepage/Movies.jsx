import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { API_KEY, iamgeLink } from '../../constants/common'
import { baseUrl } from '../../constants/common'
import { imageLink } from '../../constants/common'
import Youtube from 'react-youtube'


function Movies() {
    let displayStyles='block'
    const [movie, setMovie] = useState([]);
    const [action, setAction] = useState([]);
    const [vedios, setVedios] = useState('');
    useEffect(() => {
        Axios.get(`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`).then((response) => {
            setAction(response.data.results);
        })
        Axios.get(`${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`).then((response) => {
            setMovie(response.data.results);
        })
    }, [])

console.log(movie)
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };


    const handleVedios = (id) => {
        // setVedios(id)
        Axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
             if(!response.data.results[0]){
                console.log('no data')
             }else{
                setVedios(response.data.results[0].key)
             }
        })
    }

    return (
        <div className='background text-uppercase pt-2'>
            <strong>sahad</strong>

            <div className="scrollmenu p-2">
                <div className='d'>
                    {
                        movie.map((data, index) => (
                            <a href="#home" onClick={() => handleVedios(data.id)} key={index}>
                                <img src={`${iamgeLink + data.poster_path}`} alt="" />
                            </a>
                        ))
                    }
                </div>
            </div>

            <div className="scrollmenu p-2">
                <div className='d'>
                    {
                        movie.reverse().map((data, index) => (
                            <a href="#home" onClick={() => handleVedios(data.id)} key={index}>
                                <img src={`${iamgeLink + data.poster_path}`} alt="" />
                            </a>
                        ))
                    }
                </div>
            </div>


            <div className="scrollmenu p-2">
                <div className='d'>
                    {
                        action.map((data, index) => (
                            <a href="#home" onClick={() => handleVedios(data.id)} key={index}>
                                <img src={`${iamgeLink + data.poster_path}`} alt="" />
                            </a>

                        ))
                    }
                </div>
            </div>

            <div className=' container d-flex justify-content-center align-items-center bg-danger pt-5 pl-5 ml-3' >
                <div style={{display:'block '}}>
                    <Youtube videoId={vedios} opts={opts} />
                </div>
            </div>
        </div>
    )
}

export default Movies