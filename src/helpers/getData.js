import axios from "axios";

const options = {
    params: {
        geo: 'TR',
        lang: 'tr'
    },
    headers: {
        'X-RapidAPI-Key': 'cec29dc189mshb50c096c637d074p1feff5jsn7f6c85d563b6',
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
      }
};

axios.defaults.baseURL = 'https://yt-api.p.rapidapi.com';

export const getData = async (path) => {
    try{
        return await axios.get(path, options);
    } catch (err) {
        console.log('Verileri çekerken hata oluştu');
    }
};