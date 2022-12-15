import React from "react"

export default function Card(props) {

    return (
        <div className="card--item">

             <div>
               <h4 className="card--location">
                  {props.location}
               </h4>
            </div>
            <div>
             <h2 className="card--title">
                {props.title}
             </h2>
          </div>
          <div className="card--date">
              <p>`{props.startDate} - {props.endDate}`
              </p>
          </div>
          <div className="card--description">
            <p>
             {props.description}
            </p>
          </div>
          <div className="card--image">
            <img src={props.imageUrl} className="image--card"/>
            </div>

        </div>
    )
}
