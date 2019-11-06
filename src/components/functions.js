import axios from "axios";
import React from "react";
import DisplaySvg from "../components/displaySvg/displaySvg";
import finalSvgDisplay from "../components/displaySvg/finalSvgDisplay.scss";
import { BASE_URL, OPTIMIZE_SVG } from "../constants/constants";
import base64 from "base-64";

export const optimizeSvg = (dataUrl, svgo) => {
  return axios
    .post(`${BASE_URL}${OPTIMIZE_SVG}`, { dataUrl, svgo })
    .then(res => {
      return res.data.urlData;
    })
    .catch(err => console.log(err));
};

export const changeObj = (value, svgoObjectPlugins) => {
  let newSvgoObject = svgoObjectPlugins.filter(option => {
    if (option[value] !== null && option[value] !== undefined) {
      option[value] = true;
    }
    return true;
  });
  return newSvgoObject;
};

export const generate_random_id = string_length => {
  let random_string = "";
  let random_ascii;
  let ascii_low = 65;
  let ascii_high = 90;
  for (let i = 0; i < string_length; i++) {
    random_ascii = Math.floor(
      Math.random() * (ascii_high - ascii_low) + ascii_low
    );
    random_string += String.fromCharCode(random_ascii);
  }
  return `id_${random_string}`;
};

export const wrapElements = (
  SVG_TAG_NAMES,
  array,
  drawingComponetLocal,
  idLengthToGenerate,
  idOfElements
) => {
  for (var svgTagNameIndex in SVG_TAG_NAMES) {
    var drawingComponet = document.getElementsByTagName(
      SVG_TAG_NAMES[svgTagNameIndex]
    );
    for (var drawingComponetIndex of drawingComponet) {
      var element = new XMLSerializer()
        .serializeToString(drawingComponetIndex)
        .toString()
        .replace('xmlns="http://www.w3.org/2000/svg"', "");
      if (!element.includes("id=")) {
        var idInserter =
          "<" +
          SVG_TAG_NAMES[svgTagNameIndex] +
          ' id="id_' +
          generate_random_id(idLengthToGenerate) +
          '"';
        idOfElements.push(idInserter.substring(9));
        element = element.replace(
          "<" + SVG_TAG_NAMES[svgTagNameIndex],
          idInserter
        );
      }
      var elementWrapper = document.createElement("a");
      elementWrapper.setAttribute("class", "className-1");
      elementWrapper.setAttribute("id", "id-1");
      drawingComponetLocal.push(drawingComponetIndex);
      elementWrapper.appendChild(
        new DOMParser().parseFromString(element, "text/html").body.firstChild
      );
      elementWrapper.firstChild.setAttribute(
        "onclick",
        "doSomething(this.id);"
      ); // for FF

      array.push(elementWrapper);
    }
  }
};

export const updateSvgElements = (
  listOfFileNames,
  optimisedArray,
  wrappedPathsElement,
  drawingComponetState
) => {
  for (var key in optimisedArray) {
    var stringElement = base64.decode(optimisedArray[key].optimisedSvg);
    if (wrappedPathsElement.length > 0) {
      for (var index = 0; index < wrappedPathsElement.length; index++) {
        var tempWrapedStr = new XMLSerializer()
          .serializeToString(wrappedPathsElement[index])
          .toString();

        var tempToWrapStr = new XMLSerializer()
          .serializeToString(drawingComponetState[index])
          .toString();
        tempToWrapStr = tempToWrapStr.replace(
          'xmlns="http://www.w3.org/2000/svg"',
          ""
        );
        if (tempToWrapStr.substring(0, 5) == "<path") {
          tempToWrapStr =
            tempToWrapStr.substring(0, 5) +
            " " +
            tempToWrapStr.substring(6, tempToWrapStr.length).trim();
        } else if (tempToWrapStr.substring(0, 5) == "<elli") {
          tempToWrapStr =
            tempToWrapStr.substring(0, 8) +
            " " +
            tempToWrapStr.substring(8, tempToWrapStr.length).trim();
        } else if (tempToWrapStr.substring(0, 5) == "<rect") {
          tempToWrapStr =
            tempToWrapStr.substring(0, 5) +
            " " +
            tempToWrapStr.substring(6, tempToWrapStr.length).trim();
        } else if (tempToWrapStr.substring(0, 5) == "<circ") {
          tempToWrapStr =
            tempToWrapStr.substring(0, 7) +
            " " +
            tempToWrapStr.substring(8, tempToWrapStr.length).trim();
        } else if (tempToWrapStr.substring(0, 5) == "<poly") {
          tempToWrapStr =
            tempToWrapStr.substring(0, 8) +
            " " +
            tempToWrapStr.substring(9, tempToWrapStr.length).trim();
        } else if (tempToWrapStr.substring(0, 5) == "<line") {
          tempToWrapStr =
            tempToWrapStr.substring(0, 8) +
            " " +
            tempToWrapStr.substring(9, tempToWrapStr.length).trim();
        } else if (tempToWrapStr.substring(0, 5) == "<text") {
          tempToWrapStr =
            tempToWrapStr.substring(0, 5) +
            " " +
            tempToWrapStr.substring(6, tempToWrapStr.length).trim();
        }

        stringElement = stringElement
          .replace(tempToWrapStr, tempWrapedStr)
          .replace('xmlns="http://www.w3.org/1999/xhtml"', "");
      }
    }

    listOfFileNames.push(
      <div className="original-svg-div" key={key}>
        <DisplaySvg
          key={key}
          svgType="originalSvg"
          dataUrl={optimisedArray[key].originalSvg}
          width="100px"
          height="300px"
          stringElement={stringElement}
        />
      </div>
    );
  }
};