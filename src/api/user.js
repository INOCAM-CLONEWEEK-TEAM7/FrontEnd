import ourAxios from "./ourAxios"

export const signUp = async ({email, password, nickname, optionCheck}) => {
  const response = await ourAxios.post("/api/auth/signup",{email, password, nickname, optionCheck});

  if(response.data.success){
    return await login({email, password})
  }
  else
    return response;
}

export const login = async ({email, password}) => {
  const response = await ourAxios.post("/api/auth/login", {email, password});
   
  if(response.data.success){
    localStorage.setItem('accessToken', response.headers.get("Authorization"));
  }
  
  return response;
}

export const logout = () => {
  localStorage.removeItem('accessToken');
  //localStorage.removeItem('refreshToken');
}

export const findPassword = async ({email}) => {
  const response = await ourAxios.post("/api/auth/forgot", {email});
  return response;
}

export const changePassword = async ({code,password}) => {
  const response = await ourAxios.post("/api/auth/newPwChange", {code, password});
  return response; 
}

//액세스 토큰 재발급 신청

