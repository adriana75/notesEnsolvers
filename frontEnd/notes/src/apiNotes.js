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

export const createNotes = async(data)=>{
    
      return await axios.post(`http://localhost:8080/notes`, data)
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const updateNotes = async(id,data)=>{
    
      return await axios.put(`http://localhost:8080/notes/${id}`, data)
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        console.log(error);
      });
}
