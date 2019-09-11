import axios from 'axios';

export default  function optimizeSvg(dataUrl){
  return axios.post(`http://localhost:3500/optimizeSvg`, { dataUrl })
    .then(res => {
      return res.data;
    })
    .catch();
}
