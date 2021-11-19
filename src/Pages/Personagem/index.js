import { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import api from '../../Api';
import HeaderResponsive from '../../Components/HeaderResponsive';
import './styles.css';

function Personagem(){
    const { id } = useParams();
    const [data, setData] = useState(null); 
    const [dateCreated, setDateCreated] = useState(null);

    useEffect( () => {
        const load = async()=>{
            let response = await api.getPersonagemById(id);
            setData(response);

            let data_criacao = new Date(dateCreated);
            data_criacao = data_criacao.toLocaleDateString("pt-BR");

            setDateCreated(data_criacao);
        }
        load();
    }, [id])   

    return(
        <>
         <HeaderResponsive/>
         <div className="personagem-container">
            { data &&
                 (
                     <div className="full-info-data-container">
                     <img src={data.image} alt={data.name}/>
                     <div className="info-data-container">
                         <h1>Informações Completas</h1>
                         <p>Nome:</p>
                         <span>{data.name}</span>

                         <p>Estado:</p>
                         <span>{data.status}</span>

                         <p>Espécie:</p>
                         <span>{data.species}</span>

                         <p>Gênero:</p>
                         <span>{data.gender}</span>

                         <p>Visto pela primeira vez em: </p>
                         <span>{data.origin.name}</span>

                         <p>Visto pela última vez em:</p>
                         <span>{data.location.name}</span>

                         <p>Criado em:</p>
                         <span>{dateCreated}</span>
                        </div>
                    </div>
                 )
            }
        </div>
    </>
       
    );
}
export default Personagem;
