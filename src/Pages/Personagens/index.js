import React, {  useState } from 'react';
import HeaderResponsive from '../../Components/HeaderResponsive';
import api from '../../Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import Card from '../../Components/Card';

function Personagens(){
   const [data, setData] = useState(null);
   const [name, setName] = useState (""); 

       async function load(){
           let res = await api.getPersonagemByName(name);
            setData(res)
}   

async function searchCharacter(event){
     event.preventDefault();
     setData(null);
     if(name){
         load();
     }
}

function handleName(event){
    setName(event.target.value);
}

    return(
        <div>
            <HeaderResponsive />
            <div className="search-container">
                <form onSubmit={searchCharacter}>
                    <input onChange={handleName}/>
                    <button type="submit">
                          <FontAwesomeIcon icon={faSearch}  size="lg"/>
                    </button>
                </form>
            </div>
            <div className="results-container">
               {data && 
                    ((data.error)
                     ? <h1>Busca não encontrada</h1>
                     : data.results.map((item, key) => {
                        return <Card 
                         key={key}
                         id={item.id}
                         img={item.image} 
                         name={item.name}
                         />

                        })
                    )
                }
            </div>
        </div>
    );
}
export default Personagens;

