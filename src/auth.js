import axios from "axios";


export const isAuthenticate = () => {
  const token = localStorage.getItem("token");
  if(token){
    if (verificar()==="true"){
      return true;
    }else return false
  }else return false


  function verificar(){

    try {
      
      axios({
        method: 'post',
        url: 'http://localhost:8080/auth/check-token/',
        data: {
          "token": token
        }
      }).then(function (response) {
        //console.log(response);
        const dados = response.data;
        if(dados.status){
          console.log(dados.status)
          localStorage.setItem('estadoToken', true);
          
        }else{
          localStorage.setItem('estadoToken', false);
        }
  
      })
   }
   finally {
    console.log(localStorage.getItem('estadoToken'))
    return localStorage.getItem('estadoToken');
   }

    
  }
};