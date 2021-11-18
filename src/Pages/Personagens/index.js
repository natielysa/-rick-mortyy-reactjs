import React, { useEffect, useState } from 'react';
import HeaderResponsive from '../../Components/HeaderResponsive'
import api from '../../Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Personagens(){
   const [data,setData] = useState(null);

   useEffect( () => {
       async function loadAll(){
           let res = await api.getPersonagemByName();
           setData(res.data)
           console.log(res.data)
       }
       loadAll();
   }, [data]);   

    return(
        <div>
            <HeaderResponsive />
            <div className="search-container">
                <form>
                    <input/>
                    <FontAwesomeIcon icon={faSearch}  size="lg"/>
                </form>
            </div>
        </div>
    );

}

export default Personagens;
