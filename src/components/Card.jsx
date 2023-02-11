import React from "react"


export default function Card(prop){
    return (
        <div className="card">
            <img src={prop.img} className="card--image"></img>
            <div className="card--stats">
                <span>({prop.rating})</span>
                <span className="gray">{prop.reviewCount} • </span>
                <span className="gray">{prop.location}</span>
            </div>
            <p>{prop.title}</p>
            <p><span className="bold">from {prop.price}</span> / person</p>
        </div>
    )
}

