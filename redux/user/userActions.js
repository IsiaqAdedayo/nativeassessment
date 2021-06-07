export const MAIN_USER = "MAIN_USER"; 
export const USER_TOKEN = "USER_TOKEN"; 
export const ISLOADING = "ISLOADING"


export const mainUser = (user) =>{
    return{
        type: MAIN_USER,
        payload: user
    }
}

export const userToken = (data) => {
    return{
        type: USER_TOKEN,
        payload: {...data, status:"active"}
    }
}

export const isLoading = () => {
    return{
        type: ISLOADING
    }
}






