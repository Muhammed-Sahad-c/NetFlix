import React from 'react'
import './home.css'
import Feature from './Features'
import FAQ from './FAQ'
import Footer from './Footer'
function home() {
    const feature = [{
        heading: 'Enjoy on your TV.',
        paragraph: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
        image: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
    },
    {
        heading: 'Download your shows to watch offline.',
        paragraph: 'Save your favourites easily and always have something to watch.',
        image: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
    },
    {
        heading: 'Watch everywhere.',
        paragraph: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
        image: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png'
    },
    {
        heading: 'Create profiles for children.',
        paragraph: 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
        image: 'https://occ-0-5690-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420'
    }
    ]

    const faqArray = [
        {
            qustion: 'What is Netfix',
            answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`
        },
        {
            qustion: 'How much does Netflix cost?',
            answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.'
        },
        {
            qustion: 'Where can I watch?',
            answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`
        },
        {
            qustion: 'How do I cancel?',
            answer: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`
        },
        {
            qustion: 'What can I watch on Netflix?',
            answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`
        },
        {
            qustion: 'Is Netflix good for kids?',
            answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`
        }
    ]

    return (
        <>
            <div className='homeOuter'>
                <div className='homeInner'>
                    <div className='navbar'>
                        <img src="logo.png" alt="logo not found" />
                        <div className='navlinks'>
                            <button>Sign out</button>
                        </div>
                    </div>
                    <div className='banner'>
                        <p>Welcome back!</p>
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <p style={{ paddingTop: `2rem` }}>Watch anywhere. Cancel anytime.</p>
                        <button>Finish Sign Up </button>
                    </div>
                </div>
            </div>
            <hr />
            {
                feature.map((data, index) => (
                    <Feature feature={data} key={index} index={index}></Feature>
                ))
            }
            <div className='section'>
            <h2 className='text-center'>Frequently Asked Questions</h2>
            </div>
            {
                faqArray.map((data) =>(
                    <FAQ faqArray={data}></FAQ>
                ))
            }

            <div className='lastSignup py-5 d-flex justify-content-center align-items-center'>
                <button className='px-5 py-3 border-0'>Finish Sign Up </button>
            </div>

            <hr />

            <Footer></Footer>
            
        </>
    )
}

export default home