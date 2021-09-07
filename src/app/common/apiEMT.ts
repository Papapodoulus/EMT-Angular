import axios from 'axios';

export class ApiEMT {

    public static logInApiRest() {

        const email = 'randomEmail@randomcompany.com';
        const password = 'randompassword';

        const promise = axios.get('https://openapi.emtmadrid.es/v2/mobilitylabs/user/login/', {
            headers: {
                email,
                password
            }
        });

        const dataPromise = promise.then((response) => response.data);

        return dataPromise;
    }

    public static logOutApirest(accessToken) {

        axios.get('https://openapi.emtmadrid.es/v1/mobilitylabs/user/logout/', {
            headers: {
                accessToken
            }
        }).then((response) => {
            console.log(response);
        });
    }
}
