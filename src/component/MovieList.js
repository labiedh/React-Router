import React ,{useState} from 'react';
import MovieCard from './MovieCard';
import Filter from './Filter';
import AddMovie from'./AddMovie';

import { Link} from 'react-router-dom';

// import uuid from "uuid";

function MovieList(props) {
  
        const [films, setFilms] = useState(props.filmsprop)
        const [filtredFilms ,setFiltredFilms] = useState(films);
        const addNewFilm=(newFilm,nId)=>{
            if(newFilm!==''){
            
                setFilms([...films,{
                    id:films.length+1,
                    title:newFilm.title,
                    description :newFilm.description,
                    posterUrl :newFilm.posterUrl,
                    rate: newFilm.rate

                }])
            }
        }
        const filterFilm=(item)=>{
          
            if(item.title!==""){
                let filmFilter = films.filter((val)=>{
                    return val.title.toLowerCase().includes(item.title.toLowerCase());
                }) 
                setFiltredFilms(filmFilter)
            }else if(item.rate!=='0'){
                console.log("object")

                let filmFilter = films.filter((val)=>{
                    return val.rate === item.rate;
                }) 
                setFiltredFilms(filmFilter)
            }else{
                setFiltredFilms(films)
            }
            
        }
       
                   
        console.log("Movie List ")                     
   
    return (
        <div className="ml-5 mr-5">
            <div className="row justify-content-start">
                <div className="col-3">
                  <div className="row justify-content-start">
                  <Filter filterFilm={filterFilm}/>
                  <AddMovie  addNewFilm ={addNewFilm}/>
                  </div>
                 </div>
                <div className="col-9">
                    <div className="row">
                   
                      {
                           
                          filtredFilms.map((val,index)=> <Link to={`/details/${val.id}`} key={index}><MovieCard item={val} key={index}/></Link> )
                      }
                        
                    </div>
                 </div>
           
            </div>

            
            
      

        </div>

    )
}

export default MovieList
