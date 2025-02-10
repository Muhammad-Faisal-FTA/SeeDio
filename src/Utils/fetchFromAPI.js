 import axios from 'axios';

 const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
//  /captions?part=snippet&videoId=M7FIvfx5J10

 const options = {
    url : BASE_URL,
    params: {
        // relatedToVideId: '',
        // part: '',
        // type: '',
        maxResults: '100'
    },
    headers : {
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    }
 };

  export const fetchFromAPI = async(url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
  }
