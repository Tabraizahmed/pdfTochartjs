import { array } from "prop-types";

export const GetValuesFromQueryString = variableName => {
  variableName = variableName.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + variableName + "=([^&#]*)");
  var results = regex.exec(window.location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};

export const GetGraphsLabelsAgainstGraphType = type => {
  if (type === 1 || type === 2) {
    return [
      "Crown Chakra",
      "Forehead Chakra",
      "Ajna Chakra",
      "Throat Chakra",
      "Heart Chakra (Front)",
      "Heart Chakra (Back)",
      "Solar Plex Charka (Front)",
      "Solar Plex Charka (Back)",
      "Spleen Chakra (Front)",
      "Spleen Chakra (Back)",
      "Meng Mein Chakra",
      "Sex Chakra",
      "Basic Chakra"
    ];
  } else if (type === 3) {
    return [
      "Brain (left)",
      "Brain (right)",
      "Back Head m.Chakra",
      "Eyes (left)",
      "Eyes (right)",
      "Ears (left)",
      "Ears (right)",
      "Jaw m.chakra (left)",
      "Jaw m.chakra (right)",
      "Throat m.Chakra",
      "Heart",
      "Breast (left)",
      "Breast (right)",
      "Lungs (left)",
      "Lungs (right)",
      "Liver",
      "Stomach",
      "Pancreas"
    ];
  }
};

export const GetGraphDataAgainstGraphType = data => {
  var extractData = data.data[0];
  let result = [];
  for (var propName in extractData) {
    if (extractData.hasOwnProperty(propName)) {
      if (
        propName !== "clientId" &&
        propName !== "graphReport" &&
        propName !== "ChakraGraphId" &&
        propName !== "oransChartPartOneId"
      )
        result.push(extractData[propName]);
    }
  }
  return result;
};

export const GetReportData = data => {
  var extractData = data.data[0];
  return [extractData.graphReport];
};
