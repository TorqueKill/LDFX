import axios from 'axios'

let url = ""


export async function signup(email,password,accountType) {

    const request = {
        "email": email,
        "password": password,
        "accountType": accountType
    }

    return await axios.post(`${url}/signup`, request)
}

export async function login(email,password) {

    const request = {
        "email": email,
        "password": password
    }

    return await axios.post(`${url}/login`, request)
}





