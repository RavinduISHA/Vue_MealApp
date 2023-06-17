import axios from 'axios'

const AxiosClient = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
});

export default AxiosClient;