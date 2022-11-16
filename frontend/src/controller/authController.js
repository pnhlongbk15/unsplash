import axios from "axios";


export const register = async (info, navigate) => {
        await axios.post("http://localhost:4000/api/auth/register", info)
                .then((res) => {
                        console.log(res);
                        navigate('/login');
                })
                .catch((err) => console.error(err.message))
}

export const login = async (info, navigate) => {
        await axios.post("http://localhost:4000/api/auth/login", info)
                .then((res) => {
                        console.log(res);
                        navigate('/');
                })
                .catch((err) => console.error(err.message))
}