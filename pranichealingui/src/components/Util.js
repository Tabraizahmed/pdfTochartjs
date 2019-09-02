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
  } else if (type === 4) {
    return [
      "Large Intestine (left)",
      "Large Intestine (right)",
      "Spieen (left)",
      "Kidneys (left)",
      "Kidneys (right)",
      "Prostate (M) Uterus (W)",
      "Bladder",
      "Perineum m.chakra",
      "Armpits (left)",
      "Armpits (right)",
      "Hands (left)",
      "Hands (right)",
      "Spine",
      "Hips m.Chakra (left)",
      "Hips m.Chakra (right)",
      "Knees(left)",
      "Knees(right)",
      "Feet (left)",
      "Feet (right)"
    ];
  } else if (type === 5) {
    return [
      "Dynamism % \n basic",
      "Ability to attract money % \n basic",
      "Productivity % \n basic",
      "Sexual Drive % \n sex",
      "Physical Violence % \n meng mein",
      "Sixth Sense % \n navel",
      "Depression % \n solar plexus"
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
        propName !== "oransChartPartOneId" &&
        propName !== "oransChartPartTwoId" &&
        propName !== "PsychologicalParametersId"
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
