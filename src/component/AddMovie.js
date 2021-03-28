import React, { useState} from 'react'

function AddMovie(props) {
    const [movie, setMovie] = useState({ title: '', description: '', posterUrl: '', rate: '' })
    const handleFilm = () => {
        console.log(movie)
        props.addNewFilm({...movie})
        setMovie({ title: '', description: '', posterUrl: '', rate: '' })
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        setMovie({ ...movie, [name]: value })
    }
   
    return (
        <div>
            <div className="card border-primary mb-3" style={{ width: 260 }}>
                <div className="card-header text-white bg-primary">Ajouter un film</div>
                <div className="form-group ml-1 mr-1" style={{ width: 250 }}>
                    <label>Titre de film</label>
                    <input className="form-control" value={movie.title} onChange={handleChange} name="title" type="text" placeholder="Enter le titre de film" />
                    <label>Description</label>
                    <textarea className="form-control" value={movie.description} onChange={handleChange} name="description" rows="5" type="text" placeholder="Description de film" />
                    <label>Poster</label>
                    <input className="form-control" value={movie.posterUrl} onChange={handleChange} name="posterUrl"  type="text" placeholder="Enter le titre de film" />
                    <label>Note de film</label>
                    <input className="form-control" value={movie.rate} onChange={handleChange} name="rate"  type="text" placeholder="Enter le Note" />
                    <hr />
                    <button className="btn btn-success mt-4" onClick={() => handleFilm()} >Submit</button>
                </div>
            </div>

        </div>
    )
}

export default AddMovie
