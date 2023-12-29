import axios from 'axios'

class ReqApi{
     static async Pokemon(value){
        try{
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
            return res.data
        }catch(err){
            throw new Error('Não foi encontrado')
        }
    }
}
export default ReqApi