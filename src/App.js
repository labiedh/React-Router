import './App.css';
import React ,{useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './component/MovieList';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Movie from './component/Movie';

// import {Container} from 'react-bootstrap';
function App() {
  const productsData = [
    {id:1,title:'Fight Club',description:'Film de David Fincher avec Edward Norton, Brad Pitt, Helena Bonham Carter Insomniaque, désillusionné par sa vie personnelle et professionnelle, un jeune cadre expert en assurances, mène une vie monotone et sans saveur. Face à la...',posterUrl:'https://media.senscritique.com/media/000012359351/150/Fight_Club.jpg',rate:8, to: '/Movie' ,videoUrl:"https://www.youtube.com/embed/tgbNymZ7vqY"},
    {id:2,title:'Pulp Fiction',description:'Film de Quentin Tarantino avec John Travolta, Samuel L. Jackson, Ving Rhames L odyssée sanglante, burlesque et cocasse de petits malfrats dans la jungle de Hollywood à travers trois histoires qui s entremêlent.',posterUrl:'https://media.senscritique.com/media/000012288077/150/Pulp_Fiction.jpg',rate:5, to: '/Movie',videoUrl:"https://www.youtube.com/embed/tgbNymZ7vqY"},
    {id:3,title:'Interstellar',description:"Film de Christopher Nolan avec Matthew McConaughey, Anne Hathaway, Jessica Chastain Un groupe d'explorateurs exploite une faille dans l'espace-temps afin de parcourir des distances incroyables dans le but de sauver l'humanité.",posterUrl:'https://media.senscritique.com/media/000018762465/150/Interstellar.jpg',rate:2, to: '/Movie',videoUrl:"https://www.youtube.com/embed/tgbNymZ7vqY"},
    {id:4,title:'300',description:"L'évocation de la bataille des Thermopyles, qui vit le roi grec Léonidas et ses 300 spartiates affronter des milliers de soldats perses...",posterUrl:'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/36/26/41/18737112.jpg',rate:5, to: '/Movie',videoUrl:"https://www.dailymotion.com/embed/video/x1c68ws?autoplay=1"},
    {id:5,title:'Pulp Fiction',description:'Film de Quentin Tarantino avec John Travolta, Samuel L. Jackson, Ving Rhames L odyssée sanglante, burlesque et cocasse de petits malfrats dans la jungle de Hollywood à travers trois histoires qui s entremêlent.',posterUrl:'https://media.senscritique.com/media/000012288077/150/Pulp_Fiction.jpg',rate:5, to: '/Movie',videoUrl:"https://www.youtube.com/embed/tgbNymZ7vqY"},
    {id:6,title:'Interstellar',description:"Film de Christopher Nolan avec Matthew McConaughey, Anne Hathaway, Jessica Chastain Un groupe d'explorateurs exploite une faille dans l'espace-temps afin de parcourir des distances incroyables dans le but de sauver l'humanité.",posterUrl:'https://media.senscritique.com/media/000018762465/150/Interstellar.jpg',rate:2, to: '/Movie',videoUrl:"https://www.youtube.com/embed/tgbNymZ7vqY"}

];
  return (
    <BrowserRouter>
      <Switch>
             
        <Route exact path="/" >
          <MovieList filmsprop={productsData}/>
          </Route>
        <Route  path="/details/:id"  render={ (props) => <Movie data= {productsData} {...props} />} />

    </Switch>
    </BrowserRouter>
  );
}

export default App;
