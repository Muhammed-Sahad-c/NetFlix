import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { API_KEY, iamgeLink } from '../../constants/common'
import { baseUrl } from '../../constants/common'
import { imageLink } from '../../constants/common'
function Banner() {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        Axios.get(`${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`).then((response) => {
            let random = Math.floor(Math.random() * response.data.results.length);
            setMovie(response.data.results[random]); 
        })
    }, [])
    return (
        <>
            <div>
                <div className="containter-fluid p-0">
                    <div className="banner">
                        <div className='bannerImage'><img src={`${iamgeLink + movie.backdrop_path}`} alt="sdfsdfsa" /></div>
                        <div className="banner-info">
                            <div className="container p-0">
                                <div className="row d-flex justify-content-flex-start align-items-center pt-5">
                                    <div className="col-12 text-start px-5 text-white banner-content py-5">
                                        <div className='py-5'>
                                            <h4 className='text-uppercase'> <strong> Netflix</strong><span className='orj'>Original</span></h4>
                                            <h3 className='series-heading text-uppercase'>{movie.name ? movie.name : movie.title}</h3>
                                            {/* <h5 className='text-danger part text-right '></h5> */}
                                            <div style={{ width: '50%' }}>
                                                <p className="discription text-uppercase">
                                                    {movie.overview}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner