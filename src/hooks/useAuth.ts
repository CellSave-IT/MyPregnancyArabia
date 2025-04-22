import { jwtDecode } from 'jwt-decode'

const isTokenExpired = (token: any) => {
  const decodedToken: any = jwtDecode(token)
  const currentTime = Date.now() / 1000
  if (decodedToken.exp < currentTime) {
    return true
  }
  return false
}
const useAuth = () => {
  const getStorage: any = localStorage.getItem('fts-my-pregnancy-token')
  if (!!getStorage) {
    const user = JSON.parse(getStorage) || null
    const isExpired = isTokenExpired(user.token)
    if (isExpired) {
      localStorage.removeItem('fts-my-pregnancy-token')
      return false
    } else {
      return user
    }
  } else {
    return false
  }
}

export default useAuth
