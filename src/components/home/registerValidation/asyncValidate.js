import { postNoAuth } from "../../../lib/helper";

function composeAsyncValidators(validatorFns) {
  return async (values, dispatch, props, field) => {
    const validatorFn = validatorFns[field];
    await validatorFn(values, dispatch, props, field);
  };
}

const usernameValidate = values => {
  let data = { username: values.username };
  postNoAuth("user/check-username", data).then(response => {
    if (response.status == "fail" && sessionStorage.getItem("error_email")) {
      sessionStorage.setItem("error_username", response.message);
      throw {
        username: "Username already taken",
        email: "Email already taken"
      };
    } else if (response.status == "fail") {
      sessionStorage.setItem("error_username", response.message);
      throw { username: "Username already taken" };
    } else if (response.status == "success") {
      sessionStorage.removeItem("error_username");
    }
  })
};

const emailValidate = values => {
  let data = { email: values.email };
  postNoAuth("user/check-email", data).then(response => {
    if (response.status == "fail" && sessionStorage.getItem("error_username")) {
      sessionStorage.setItem("error_email", response.message);
      throw {
        username: "Username already taken",
        email: "Email already taken"
      };
    } else if (response.status == "fail") {
      sessionStorage.setItem("error_email", response.message);
      throw { email: "Email already taken" };
    } else if (response.status == "success") {
      sessionStorage.removeItem("error_email");
    }
  })
};

const asyncValidate = composeAsyncValidators({
  username: usernameValidate,
  email: emailValidate
});

export default asyncValidate;