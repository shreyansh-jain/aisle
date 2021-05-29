import { AsyncStorage } from 'react-native';
import { url } from '@Service/Constant'

async function retrieveToken() {
    try {
        const token = await AsyncStorage.getItem("@token");
        return new Promise((resolve, reject) => {
            if (token != null) {
                resolve(token)
            } else {
                reject(false)
            }
        })

    } catch (error) {
        reject(error)
    }
}

let resend_otp = async (phone_number) => {
    return new Promise(async (resolve, reject) => {
        try {
            fetch(url + '/V1/users/phone_number_login', {
                method: 'POST',
                body: JSON.stringify({
                    number: phone_number,
                }),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(response => {
                    resolve(response);
                })
                .catch(function (err) {
                    reject(err)
                });
        }
        catch (exception) {
            reject(exception)
        }
    })
}

let verify_otp = async (phone_number, otp) => {
    return new Promise(async (resolve, reject) => {
        try {
            fetch(url + '/V1/users/verify_otp', {
                method: 'POST',
                body: JSON.stringify({
                    number: phone_number,
                    otp: otp
                }),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(response => {
                    resolve(response);
                })
                .catch(function (err) {
                    reject(err)
                });
        }
        catch (exception) {
            reject(exception)
        }
    })
}

let send_otp = async (phone_number) => {
    return new Promise(async (resolve, reject) => {
        try {
            fetch(url + '/V1/users/phone_number_login', {
                method: 'POST',
                body: JSON.stringify({
                    number: phone_number,
                }),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(response => {
                    resolve(response);
                })
                .catch(function (err) {
                    reject(err)
                });
        }
        catch (exception) {
            reject(exception)
        }
    })
}

export default {
    send_otp,
    resend_otp,
    verify_otp
}
