import accountsAPI from "./accountsAPI";

const API = Object.assign(accountsAPI());

export default () => {
  return API;
};
