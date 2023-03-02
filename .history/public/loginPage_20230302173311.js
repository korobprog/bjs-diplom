"use strict";

const useForm = new useForm();
useForm.loginFormCallback = function (data) {
  ApiConnector.login(data, response => {
    if(response.success) {
      location.reload();
    } else {
      this.setLoginErrorMessage(response.error);
    }
  })
}

