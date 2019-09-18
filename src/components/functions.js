import axios from 'axios';
import {BASE_URL,OPTIMIZE_SVG} from '../constants/constants';

export const optimizeSvg=(dataUrl,svgo)=>{
    return axios.post(`${BASE_URL}${OPTIMIZE_SVG}`, { dataUrl,svgo })
        .then(res => {
            return res.data.urlData;
        })
        .catch(err => console.log(err));
};


export const changeObj=(value,svgoObjectPlugins)=>{	
    let newSvgoObject = svgoObjectPlugins.filter((option)=>{
        if(option[value] !== null && option[value] !== undefined){
            option[value] = true;
        }
        return true;
        
    });
    return newSvgoObject;
};

