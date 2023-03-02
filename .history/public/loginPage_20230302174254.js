"use strict";

 useForm = new useForm();

useForm.loginFormCallback = function(data) {
  ApiConnector.login(data, response => {
    if(response.success) {
      location.reload();
    } else {
      this.setLoginErrorMessage(response.error);
    }
  })
}

useForm.registerFormCallback = function(data){
  ApiConnector.register(data, response => {
    if(response.success){
      location.reload();
    } else {
      this.setRegisterErrorMessage(response.error);
    }
  })
}

