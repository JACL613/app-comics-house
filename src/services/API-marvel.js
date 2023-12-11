import axios from 'axios'

const ts = import.meta.env.VITE_TS
const hash = import.meta.env.VITE_HASHMD5
const publicKey = import.meta.env.VITE_PUBLICKEY
export const accionGet = () => {
  return axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
}
export const accionGetNext = count => {
  const number = (count - 1) * 20
  console.log(number)
  return axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&offset=${number}&limit=20`)
}
export const accionGetForFillter = count => {
  const posicion = (count - 1) * 100
  // console.log(posicion);
  return axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&offset=${posicion}&limit=100`)
}
