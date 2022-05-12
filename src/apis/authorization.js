import { apiHelper } from "../utils/helpers";

export default {
  //帶入需要的參數
  signIn({ email, password }) {
    //這裡return的會是一個Promise
    return apiHelper.post('/signin', {
      email,
      password
    })
  },
  signUp({ name, email, password, passwordCheck }) {
    //這裡return的會是一個Promise
    return apiHelper.post('/signup', {
      name,
      email,
      password,
      passwordCheck
    })
  },
}