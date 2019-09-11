import axios from 'axios';
import BASE_URL from '../constants/constants';

export default  function optimizeSvg(dataUrl){
  return axios.post(`${BASE_URL}optimizeSvg`, { dataUrl })
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err));
}
