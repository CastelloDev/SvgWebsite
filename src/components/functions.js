import axios from 'axios';
import {BASE_URL,OPTIMIZE_SVG} from '../constants/constants';

export default  function optimizeSvg(dataUrl){
  return axios.post(`${BASE_URL}${OPTIMIZE_SVG}`, { dataUrl })
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err));
}
