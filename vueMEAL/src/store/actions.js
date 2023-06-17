import AxiosClient from '../AxiosClient';

export function searchMeal({commit}, keyword){
    AxiosClient.get(`search.php?s=${keyword}`)
    .then(({data})=>{
        commit('setSearchMeal', data.meals)
    })
}