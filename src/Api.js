import axios from 'axios';


const BASE_URL = "https://rickandmortyapi.com/api";

async function basicFetch(endpoint){
    const URL = BASE_URL + endpoint;
    let data = null;
    
    try{
        const response = await axios.get(URL);
        data = response.data;  
} catch (error) {
    data = error.response.data;
}
    return data;
}

const api = {
    getPersonagemByName: async(name) => {
      const res =  await basicFetch(`/character/?name=${name}`);
      return res;
    },
    getPersonagemById: async (id) => {
        const res =  await basicFetch(`/character/${id}`);
        return res;
      }, 
    }

export default api;