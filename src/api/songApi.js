import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api/songs',
})

export const getSongList = async () => {
  const res = await api.get(``) 
  // await이 종료할때까지 기다림
  return res.data
}

export const getSongDetail = async (id) => {
  const res = await api.get(`/${id}`)
  return res.data
}