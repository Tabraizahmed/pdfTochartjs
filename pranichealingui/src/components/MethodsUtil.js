import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let errorText = "There is error in application or no data against this Id.";
export const GetClientGraphDetails = (id, apiUrl) => {
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "Access-Control-Request-Method": "*"
    },
    mode: "cors",
    body: JSON.stringify({ id: id })
  }).then(res => (res.status !== 204 ? res.json() : ThrowException()));
};
export const AddGraphsFormApiRequest = (formData, apiUrl) => {
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "Access-Control-Request-Method": "*"
    },
    mode: "cors",
    body: JSON.stringify({ formData })
  }).then(res => (res.status !== 204 ? res.json() : ThrowException()));
};

function ThrowException() {
  toast.error(errorText, {
    position: toast.POSITION.BOTTOM_LEFT
  });
}

export const ExceptionHandler = data => {
  if (data !== undefined) {
    ThrowException();
  }
};
export const LoadGraphView = (graphid, graphType) => {
  let url =
    "http://" +
    window.location.host +
    "/GraphView?graphId=" +
    graphid +
    "&type=" +
    graphType;
  window.open(url, "_blank");
};
