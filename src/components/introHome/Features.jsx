
import React from 'react'

function features({feature,index}) {
    if(index%2 == 0){
        return (
            <>
                <div className="features-banners">
                    <div>
                        <h2>{feature.heading}</h2>
                        <p>{feature.paragraph}</p>
                    </div>
                    <div>
                        <img src={feature.image} alt="" />
                    </div>
                </div>
                <hr />
            </>
        )
    }else{
        return (
            <>
                <div className="features-banners">
                    <div>
                        <img src={feature.image} alt="" />
                    </div>
                    <div>
                        <h2>{feature.heading}</h2>
                        <p>{feature.paragraph}</p>
                    </div>
                </div>
                <hr />
            </>
        )
    }
    
}

export default features