import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '6ee32d869360418ea12aabfc83171f12'
    }
})