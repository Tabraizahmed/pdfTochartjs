export const GetValuesFromQueryString = variableName => {
  variableName = variableName.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + variableName + "=([^&#]*)");
  var results = regex.exec(window.location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};

export const GetGraphsLabelsAgainstGraphType = type => {
  if (type === 0 || type === 1) {
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
  } else if (type === 2) {
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
  } else if (type === 3) {
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
  } else if (type === 4) {
    return [
      "Dynamism % \n basic",
      "Ability to attract money % \n basic",
      "Productivity % \n basic",
      "Sexual Drive % \n sex",
      "Physical Violence % \n meng mein",
      "Sixth Sense % \n navel",
      "Depression % \n solar plexus"
    ];
  } else if (type === 5) {
    return [
      "Chakra Stress \n solar plexus",
      "Chakra Anger \n solar plexus",
      "Chakra Fear/phobia \n solar plexus",
      "Chakra Courage/phobia \n solar plexus",
      "Chakra Perseverance \n solar plexus",
      "Chakra Obession \n solar plexus",
      "Chakra Self-Confidence"
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

export const GetApiUrlsAgainstTypeAndEnviornment = type => {
  let url;
  let result;
  if (window.location.href.indexOf("berkeleypranichealing") > 0) {
    url = "http://api.berkeleypranichealing.com/";
  } else {
    url = "http://localhost:5514/pdfTochartjs/pranichealingApi/";
  }
  switch (type) {
    case UrlTypes.CHAKRAGRAPHAPI:
      result = url.concat(ApiUrl.CHAKRAGRAPHAPI);
      break;
    case UrlTypes.CHAKRAACTIVATIONGRAPHAPI:
      result = url.concat(ApiUrl.CHAKRAACTIVATIONGRAPHAPI);
      break;
    case UrlTypes.CHAKRAORGANSPARTGRAPHONEAPI:
      result = url.concat(ApiUrl.CHAKRAORGANSPARTGRAPHONEAPI);
      break;
    case UrlTypes.CHAKRAORGANSPARTGRAPHTWOAPI:
      result = url.concat(ApiUrl.CHAKRAORGANSPARTGRAPHTWOAPI);
      break;
    case UrlTypes.D3PSYCHOLOGICALGRAPHONEAPI:
      result = url.concat(ApiUrl.D3PSYCHOLOGICALGRAPHONEAPI);
      break;
    case UrlTypes.D3PSYCHOLOGICALGRAPHTWOAPI:
      result = url.concat(ApiUrl.D3PSYCHOLOGICALGRAPHTWOAPI);
      break;
  }
  return result;
};
const ApiUrl = {
  CHAKRAGRAPHAPI: "api/tblChakraGraph/Read.php",
  CHAKRAACTIVATIONGRAPHAPI: "api/tblChakraActivationGraph/Read.php",
  CHAKRAORGANSPARTGRAPHONEAPI: "api/tblOrgansChartPartOne/Read.php",
  CHAKRAORGANSPARTGRAPHTWOAPI: "api/tblOrganChartPartTwo/Read.php",
  D3PSYCHOLOGICALGRAPHONEAPI: "api/tblpsychologicalparameterspart1/Read.php",
  D3PSYCHOLOGICALGRAPHTWOAPI: "api/tblpsychologicalparameterspart2/Read.php"
};
export const UrlTypes = {
  CHAKRAGRAPHAPI: 0,
  CHAKRAACTIVATIONGRAPHAPI: 1,
  CHAKRAORGANSPARTGRAPHONEAPI: 2,
  CHAKRAORGANSPARTGRAPHTWOAPI: 3,
  D3PSYCHOLOGICALGRAPHONEAPI: 4,
  D3PSYCHOLOGICALGRAPHTWOAPI: 5
};

export const GetValueFromEnum = key => {
  for (var p in UrlTypes) {
    if (UrlTypes.hasOwnProperty(p) && UrlTypes[p] === key) {
      return p;
    }
  }
};
