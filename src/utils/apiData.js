import axios from 'axios';


axios.defaults.baseURL = 'https://www.alphavantage.co';

export const ApiGet = (type) => {
    // const s = type.includes('?') ? '&' : '?';
    return new Promise((resolve, reject) => {
        // console.log(getHttpOptions(), 'getHttpOptions()')
        axios
            .get(`${type}`)
            .then((responseJson) => {
                resolve(responseJson.data)
            })
            .catch((error) => {
                console.log("🚀 ~ file: apiData.js:31 ~ returnnewPromise ~ error:", error)
                reject(error)
            })
    })
}
