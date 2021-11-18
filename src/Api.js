import axios from 'axios';

const api = {

    getPersonagemByName: async() => {
        const response = await axios.get("https://rickandmortyapi.com/api/character/2");
        
        return response;
    }
}


export default api;