import React,{useState} from 'react'

function Filter(props) {
    // ChercherNom
    const [title, setTitle] = useState('');
    // const [note, setNote] = useState(0);
    const [filterF, setFilterF] = useState({title: '', rate: '0' })
    const selectNote=(e)=>{
     
        setFilterF({title:'', rate:Number(e.target.value)})
        console.log(filterF)
        props.filterFilm(filterF)

    }
    const handleChercher=(e)=>{
        e.preventDefault();
        setFilterF({ title: e.target.value})
        setTitle(e.target.value)
       props.filterFilm(filterF)
    }
    return (

        <form className="mt-4" >
                <div className="card border-primary mb-3" style={{width: 260}}>
                    <div className="card-header text-white bg-primary">FILTRER</div>
                    <div className="card-body">
                        <h5 className="card-title">Par Note</h5>
                        <select className="form-select" onChange={selectNote} required aria-label="select example">
                            <option value='0'>Select Note...</option>
                            <option value="1">1 Étoile</option>
                            <option value="2">2 Étoile</option>
                            <option value="3">3 Étoile</option>
                            <option value="4">4 Étoile</option>
                            <option value="5">5 Étoile</option>
                            <option value="6">6 Étoile</option>
                            <option value="7">7 Étoile</option>
                            <option value="8">8 Étoile</option>
                            <option value="9">9 Étoile</option>
                            <option value="10">10 Étoile</option>
                        </select>

                        <hr/>
                        <h5 className="card-title">Titre de film</h5>
                        <div className="input-group mb-3">
                  <input type="text" value={title} onChange={handleChercher} className="form-control" placeholder="Enter le titre de film"/>
                         
                        </div> 
                                      
                    </div>
                </div>
            
        </form>
        
    )
}

export default Filter
