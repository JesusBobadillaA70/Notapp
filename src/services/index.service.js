import axios from 'axios';

const baseUrl = '/api/notes'

class index_service {
    getAll = () => {
        return axios.get(baseUrl);
    }

    create = ( newObject ) => {
      return axios.post( baseUrl, newObject );
    }

    update = (id, newObject) => {
        return axios.put(`${baseUrl}/${id}`, newObject)
    }
    
}
export default new index_service();
