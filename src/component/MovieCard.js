import React from 'react';
import logo from '../star.svg';

function MovieCard(props) {
   console.log("Movie Card")
        return(
        
        <div className="col ml-2 mr-2 mt-3" style={{width: 220}} key={props.item.id}>
          <div className="card border-primary" style={{width: 220,height: 631}}>
              <img src={props.item.posterUrl} className="card-img-top" alt={props.item.title} style={{height: 200 , width:218}}/>
                  <div className="card-body">
                    <h5 className="card-title">{props.item.title}</h5>
                    <p className="card-text" style={{height: 288 }}>{props.item.description}</p>
                    <div className="card-footer mb-1">
                      <small className="bg-warning">
                        {props.item.rate}
                      <img src={logo}  alt="logo" />
                      </small>
                    </div>
                  </div>
          </div>
        </div>  
       
        )
      
}

export default MovieCard
