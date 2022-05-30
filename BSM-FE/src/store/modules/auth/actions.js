let timer;
export default {
    async login(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'login'
        })
    },
    async signup(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'signup'
        })
    },
    async auth(context, payload) {
        const mode = payload.mode;
        let url = this.$app_url + '/api/v1/auth/login';

        if (mode === 'signup') {
            // register
            url = this.$app_url + '/api/v1/auth/register';
            await window.axios.post(url, {
                firstName: payload.first_name,
                lastName: payload.last_name,
                email: payload.email,
                password: payload.password,
                password_confirmation: payload.password_confirmation,
            }).then(response => {
                let payloadAction = response.data;
                context.dispatch('storeData', payloadAction);
            }).catch(errors => context.commit('setErrors', errors.response.data.errors));
        } else {
            //login
            await window.axios.post(url, {
                    email: payload.email,
                    password: payload.password
                })
                .then(response => {
                    const responseData = response.data;
                    //Stock Data
                    context.dispatch('storeData', responseData);
                })
                .catch(error => context.commit('setErrors', error));
        }

    },
    tryLogin(context) {
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const role = localStorage.getItem('role');
        const tokenExpiration = localStorage.getItem('tokenExpiration');

        const expiresIn = tokenExpiration - new Date().getTime();
        if (expiresIn < 0) {
            return;
        }
        timer = setTimeout(function() {
            context.dispatch('autoLogout');
        }, expiresIn);

        if (token && userId && user && role) {
            context.commit('setUser', {
                user: JSON.parse(user),
                token: token,
                userId: userId,
                role: role
            });
            window.axios.defaults.headers.common["Authorization"] = token;
        }
    },
    logout(context) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('role');
        localStorage.removeItem('tokenExpiration');
        window.axios.defaults.headers.common["Authorization"] = null;
        //if we manualy click the logout
        clearTimeout(timer);
        context.commit('setUser', {
            user: null,
            token: null,
            userId: null,
            errors: '',
        });

    },
    autoLogout(context) {
        //redirect after loginOut
        context.dispatch('logout');
        context.commit('setAutoLogout');

    },
    storeData(context, payload) {
        const expiresIn = +payload.expires_in * 1000;
        const expirationDate = new Date().getTime() + expiresIn;

        //Store Data in LocalStorage
        localStorage.setItem('user', JSON.stringify(payload.user));
        localStorage.setItem('token', payload.access_token);
        localStorage.setItem('userId', payload.user.id);
        localStorage.setItem('role', payload.role);
        localStorage.setItem('tokenExpiration', expirationDate);
        window.axios.defaults.headers.common["Authorization"] = payload.access_token;

        //After this duration "expiresIn" this function will execute 
        timer = setTimeout(function() {
            context.dispatch('autoLogout');
        }, expiresIn)

        context.commit('setUser', {
            user: payload.user,
            token: payload.access_token,
            userId: payload.user.id,
            role: payload.role
        });
    }
}