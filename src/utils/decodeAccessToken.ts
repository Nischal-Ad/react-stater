import { jwtDecode } from 'jwt-decode'

export default function decodeAccessToken(accessToken: string) {
  try {
    const decodedToken = jwtDecode(accessToken)
    return decodedToken

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error?.response?.status === 401) {
      // Access the status code
      window.location.href = '/'
    }
    console.error('Error', error)
    return null
  }
}
