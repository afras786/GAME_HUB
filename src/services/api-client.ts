import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1182672e49964d2c87a939f94761e583'
    }
})