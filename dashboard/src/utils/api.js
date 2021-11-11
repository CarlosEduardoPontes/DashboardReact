import axios from 'axios';

const SERVER = 'http://localhost:8888'

/**
 * Faz uma requisição a partir do axios
 * @param {string} route Rota da API a ser consumida ex: /aluno 
 * @param {string} method Método a ser acionado (GET, POST, PATCH, PUT ou DELETE) 
 * @param {object} params Parametros a colocar na requisição
 * @returns 
 */
export default async function(route, method = 'get', params = null){

    let contentType = 'application/x-www-form-urlencoded';

    console.log(params);
    
    return axios(SERVER + route,
        {

            method, 
            data: params,
            withCredentials: false

        }
    )
    .then( res => {
        return res.data;
    })


}


/**
 * Faz uma requisição a partir do axios
 * @param {string} route Rota da API a ser consumida ex: /aluno 
 * @param {string} method Método a ser acionado (GET, POST, PATCH, PUT ou DELETE) 
 * @param {object} params Parametros a colocar na requisição
 * @returns 
 
export default async function(route, method = 'get', params = null){

    //params = JSON.stringify(params);
    console.log(params);

    let contentType = 'application/x-www-form-urlencoded';

    let data = new FormData();
    data.append("json", JSON.stringify(params) );
    
    
    return fetch(SERVER + route,
        {

            method, 
            mode: 'no-cors',
            headers: {
                    'Accept': 'application/json',
                    'Content-Type' : 'application/json'
                },
            body: data
        }
    )
    .then( res => {
        return res;
    })
    .then(
        data => console.log(data)
    )
    .catch( e => {
        return console.error(e)
    })
}*/