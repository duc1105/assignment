import instance from "./instance";

const getAllUsers = () => {
    return instance.get('/api/getuser');
}
const singup = (user:any) => {
    return instance.post('/api/signup',user)
}
const singin = (user:any) => {
    return instance.post('/api/signin',user)
}

export {singup,getAllUsers,singin}