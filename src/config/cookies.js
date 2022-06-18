import Cookies from "universal-cookie"
import jwtDecode from "jwt-decode"

const cookies = new Cookies()
const cookie_name = 'jwt'

export default {
    getCookie: () => cookies.get(cookie_name),
    createCookie: (value) => cookies.set(cookie_name, value),
    removeCookie: () => cookies.remove(cookie_name),
    getDecodedCookie: () => jwtDecode(cookies.get(cookie_name))
}