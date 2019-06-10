import axios from 'axios';

export const getExerciseInfo = () => {
  return axios.get('https://wger.de/api/v2/exerciseinfo', {
      headers: {
        Authorization: `Token 249a5fd6b313be9b2d5c7be218fc1870717811e7`
      }
    })
}

export const getExerciseEquipment = () => {
  return axios.get('https://wger.de/api/v2/equipment', {
      headers: {
        Authorization: `Token 249a5fd6b313be9b2d5c7be218fc1870717811e7`
      }
    })
}

export const getExerciseMuscle = () => {
  return axios.get('https://wger.de/api/v2/muscle', {
      headers: {
        Authorization: `Token 249a5fd6b313be9b2d5c7be218fc1870717811e7`
      }
    })
}

export const getExerciseImage = () => {
  return axios.get('https://wger.de/api/v2/exerciseimage', {
      headers: {
        Authorization: `Token 249a5fd6b313be9b2d5c7be218fc1870717811e7`
      }
    })
  }

export const registerUser = userInfo => {
  return axios.post('/api/user/register', userInfo);
}

export const signinUser = userInfo => {
  return axios.post('/api/user/login', userInfo);
}


export default {
  getExerciseInfo,
  getExerciseEquipment,
  getExerciseImage,
  getExerciseMuscle,
  registerUser,
  signinUser
}