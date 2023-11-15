import axios from "axios";

const options = {
    params: {
        geo: 'TR',
        lang: 'tr'
    },
    headers: {
      'X-RapidAPI-Key': 'b9c62e627amsh1f711f5429861eep17f6dejsnabd624c5e57e',
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