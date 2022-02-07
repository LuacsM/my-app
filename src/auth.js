import axios from "axios";

let status = true

const verificar = () => {
    const token = localStorage.getItem("token");
    console.log(token)
    axios({
        method: 'post',
        url: 'http://localhost:8080/auth/check-token/',
        data: {
          token: token,
        }
      }).then(() =>{
        status = true;

      })
      .catch(() => {
        status = false;
        console.log(status)
      });
      
      return status
}

export const isAuthenticate = () => false;
