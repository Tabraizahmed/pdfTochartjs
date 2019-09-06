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
  }).then(res => (res.status != 204 ? res.json() : ThrowException()));
};
function ThrowException() {
  toast.error(errorText, {
    position: toast.POSITION.BOTTOM_LEFT
  });
}
