import axios from 'axios';
import {BASE_URL,OPTIMIZE_SVG} from '../constants/constants';

export var svgElementString = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 80 80\" xml:space=\"preserve\">,<defs><style>.colour-class{fill:#FFFFFF;}</style></defs>,<style>.st2,.st3{fill:none;stroke:#000;stroke-width:2}.st3{stroke-linecap:round;stroke-linejoin:bevel}</style><g id=\"Group-5\" transform=\"translate(11 -9)\"><g id=\"Group-3\" transform=\"translate(4 36)\"><path id=\"Path-4\" d=\"M1 7.5v8.6c5.5 2.5 11.5 3.8 18 3.8s12.5-1.3 18-3.8V7.5C30.7 9.8 24.7 11 19 11S7.3 9.8 1 7.5z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#fff\"></path><ellipse id=\"Oval\" cx=\"19\" cy=\"6\" rx=\"18\" ry=\"5\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"2\"></ellipse><path id=\"Path_1_\" class=\"st2\" d=\"M1.4 16c1.8 2.1 9 4 17.6 4s15.8-1.9 17.6-4\"></path><path id=\"Path-19\" class=\"st2\" d=\"M1 6v35\"></path><path class=\"st2\" d=\"M37 6v18\"></path></g><path id=\"Path-3\" class=\"st3\" d=\"M5 77c3 3.5 9.4 5.2 19 5.2\"></path><path class=\"st3\" d=\"M5 68c3 3.5 9.4 5.2 19 5.2M5 60c3 3.5 9.4 5.2 19 5.2\"></path><ellipse class=\"st2\" cx=\"42\" cy=\"66\" rx=\"18\" ry=\"5\"></ellipse><path class=\"st2\" d=\"M24 83c1.9 2.4 9.3 4.6 18.1 4.6s16.3-2.2 18.1-4.6M24.4 76c1.8 2.1 9 4 17.6 4s15.8-1.9 17.6-4M24 66v17.5M60 66v17.5\"></path><g id=\"Group-7\"><path d=\"M6.8 23.4c.2.3.4.5.5.8s.1.5 0 .8c-.1.2-.4.4-.7.5-.7.1-1.4.2-2.2.2H2.3c-.5 0-.8-.1-.9-.4-.2-.3-.2-.6-.2-.9.1-.3.2-.6.5-.9.3-.5.6-.6 1.1-.6v-8h-.6c-.2-.1-.4-.2-.5-.3s-.3-.3-.3-.5c-.1-.2-.1-.4-.1-.6 0-.3.2-.7.5-1s.6-.6 1-.8.8-.4 1.2-.4.8.1 1 .3c.1.1.2.2.3.4.1.2.1.3.1.4v10.5H6c.4.1.6.2.8.5zM19.8 19.7c-.2 1.1-.6 2.1-1.1 3.1s-1.3 1.8-2.3 2.4c-.5.2-1 .4-1.5.5s-1.1.1-1.6 0-1-.3-1.5-.5c-.5-.3-.9-.6-1.2-1.1-.7-1-1.2-2-1.4-3.1s-.2-2.2 0-3.4c.1-.8.4-1.7.7-2.5s.8-1.5 1.4-2.2c.5-.5 1-.9 1.6-1.1.6-.3 1.2-.4 1.8-.4s1.2.1 1.8.3 1.1.6 1.6 1.1.9 1 1.2 1.6c.3.6.5 1.2.6 1.8.1.6.2 1.2.2 1.9-.2.3-.2.9-.3 1.6zm-2.6-.5c.1-.4.1-1 .1-1.6s-.1-1.2-.3-1.7c-.2-.6-.5-1-.8-1.4-.4-.4-.9-.6-1.5-.6-.7 0-1.3.2-1.7.7s-.7 1-1 1.7c-.2.7-.3 1.3-.4 2v1.8c0 .3.1.7.2 1 .1.4.3.7.4 1 .2.3.4.5.7.7s.6.3 1 .2c.5 0 1-.2 1.3-.4s.7-.5.9-.8c.2-.3.5-.7.6-1.1.2-.4.3-.9.4-1.4l.1-.1zM22.8 24.4c-.2-.3-.4-.5-.4-.8s0-.6.1-.8c.1-.2.3-.4.5-.6s.6-.2.9-.2c.2 0 .4.1.6.2s.4.2.5.3c.2.1.5.2.8.3.3.1.6.1.8.1.3 0 .6-.1.9-.2s.5-.2.8-.5.5-.6.6-.9c.2-.6.2-1 0-1.4s-.5-.6-.9-.8c-.4-.2-.8-.3-1.3-.3s-1 0-1.4.1l-.1.1-.1.1c-.2.2-.4.3-.6.3h-.6l-.6-.3c-.2-.2-.3-.3-.4-.6-.1-.3-.2-.6-.1-.9v-.9-.7-.7-.3-.5-.5-.4c-.1-.1-.2-.3-.3-.5-.1-.2-.1-.4 0-.6s.1-.4.2-.5c.1-.2.2-.3.4-.4.3-.2.5-.3.9-.3h4.7c.4 0 .7 0 1-.1s.5 0 .8.1.5.2.6.4c.2.2.2.4.3.7s0 .5-.1.7-.3.4-.5.6c-.3.2-.7.3-1.1.3h-4.1v2c.4-.1.7-.1 1.1-.1s.7 0 1.1.1.8.2 1.1.3.7.3 1.1.6c.4.3.8.6 1.1 1 .3.4.5.9.7 1.3.2.6.3 1.2.3 1.7 0 .6-.2 1.1-.4 1.6s-.6 1-1 1.4-.9.8-1.4 1c-.5.3-1 .5-1.6.6s-1.1.1-1.7 0c-1.2-.1-2.2-.5-3.2-1.1zM33.8 13c.1-.6.2-1.2.5-1.7.2-.5.6-1 1.2-1.3.6-.4 1.2-.6 1.9-.6.6 0 1.2.1 1.8.4.5.3 1 .7 1.4 1.2s.6 1.1.6 1.9c0 .6-.1 1.2-.4 1.7s-.6 1-1.1 1.3c-.5.4-1 .6-1.6.7s-1.2.1-1.7-.1c-.8-.3-1.4-.7-1.8-1.3-.4-.6-.6-1.3-.8-2.2zm11.8-3.2c.3-.3.6-.4.9-.5.3 0 .6.1.8.2s.4.4.5.7.1.7-.1 1c-.1.1-.1.3-.2.4l-.3.3-.6.9c-.2.3-.3.4-.5.7-.2.2-.3.4-.5.7s-.4.6-.7 1c-.9 1.3-1.8 2.7-2.8 4-.9 1.3-1.8 2.6-2.8 4-.2.3-.4.6-.6.8-.2.3-.4.5-.6.8-.1.2-.3.4-.5.6s-.3.4-.5.6l-.6.3c-.2.1-.5 0-.8-.2-.4-.2-.6-.5-.6-.7-.1-.3 0-.6.1-.9s.3-.6.5-.9.4-.5.5-.7l.6-.9.6-.9c1.3-1.9 2.6-3.8 3.9-5.6s3-3.9 4.3-5.7zm-8.7 2.1c-.2.1-.3.2-.4.4-.1.2-.2.4-.2.6.1.4.3.8.5 1s.5.3.8.3.5-.1.7-.3.3-.5.4-1c0-.2-.1-.4-.2-.6-.1-.2-.3-.3-.4-.4-.2-.1-.4-.2-.6-.2-.2.1-.4.1-.6.2zm5.3 10.7c.1-.5.2-1 .4-1.5s.5-.9.9-1.2c.6-.4 1.2-.7 1.9-.8.7-.1 1.3 0 1.9.3s1.1.6 1.5 1.2c.4.5.6 1.2.7 1.9 0 .7-.1 1.3-.4 1.8-.3.5-.7 1-1.2 1.3s-1 .5-1.7.6-1.2 0-1.8-.2c-.7-.3-1.2-.7-1.5-1.3-.3-.6-.6-1.2-.6-1.9l-.1-.2zm2.8-.8c-.1.2-.2.4-.2.7 0 .2 0 .5.2.7.1.2.3.4.5.5s.4.1.6.1c.2 0 .4-.1.6-.2.2-.1.3-.3.4-.6.1-.3.1-.6 0-.9-.1-.2-.3-.4-.5-.6-.2-.1-.5-.2-.7-.1-.5.1-.7.2-.9.4z\"></path></g></g></svg>" ;
export const elementWrapperHead = "<a id=\"state_al\" class=\"state\" xlink:href=\"\"><path";
export const elementToWrapHead = "<path";
export var elementWrapperTail = "</path></a>";
export const elementToWrapTail = "</path>";

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


// Write <a > into svg paths tags
    //1. detect elements to be wrapped
      // if element contains fill attribute
           // wrap with <a> that may contain onclick = {}
    // everywhere their is </path> close with </a>

export const wrapPathsWithLinkElementHead=(svgElementString, elementWrapperHead,elementWrapperTail ,  elementToWrapHead,elementToWrapTail)=>{
        //elementToWrapHead = <path
        //elementToWrapTail = </path>
        console.log("elementToWrapHead : ", elementToWrapHead);
        console.log("elementWrapperHead : ", elementWrapperHead);
        console.log("original svg : ", svgElementString)
        var newSvgElement = svgElementString.replace(new RegExp(elementToWrapHead, 'g'), elementWrapperHead);
        //var iteration = 0 ;
        // for(var index = svgElementString.indexOf("<path");index >= 0 ;index = svgElementString.indexOf("<path", index + 1)){
        //     var prevIndex = iteration == 0 ? 0 : index ;
        //     var nextLen = iteration == 0 ? 0 : linkElementHead.length + 2;
        //     newSvgElement = [newSvgElement.toString().slice(prevIndex, index + nextLen), elementWrapperHead , newSvgElement.toString().slice(index + nextLen, newSvgElement.toString().length) ].join();
        //     storePieces.push(newSvgElement);
        //     iteration += 1 ;
        //     console.log(" newSvgElement : ", newSvgElement ,  "index : ", index);
           
        // }
        console.log("newSvgElement :", newSvgElement);
        return newSvgElement;

}


export const wrapPathsWithLinkElementTail=(svgElementString,elementWrapperTail,elementToWrapTail)=>{
    //elementToWrapHead = <path
    //elementToWrapTail = </path>
    var newSvgElement = svgElementString.replace(elementToWrapTail, elementWrapperTail);

    return newSvgElement;

}
// Remove <a >  from svg paths tags
    // 1. <a> to be removed

// Insert OnClick functionality 
    // 1. detect position where to place OnClick 

