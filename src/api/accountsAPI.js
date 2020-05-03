import axios from "axios";

const config = {
  baseUrl: "http://caulion-env.eba-vw5ggty2.us-west-2.elasticbeanstalk.com/",
};

export default () => {
  return {
    signUp: (userInfo) => {
      return axios.post(`${config.baseUrl}login_api/auth/register/`, userInfo);
    },
    login: (userInfo) => {
      return axios.post(`${config.baseUrl}login_api/auth/login/`, userInfo);
    },
  };
};
