import axios from "axios";

export const doGetRequest = async() =>{

    const options = { method: "GET", url: "http://localhost:8080/notes",
    headers: {
        'Content-Type': 'application/json',
    }};

    return await axios.get(options.url)
        .then(function (response) {
          return response.data;
        });
}
