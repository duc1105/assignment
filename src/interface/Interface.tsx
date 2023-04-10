interface IProduct {
    _id?: string | number,
    name?: string,
    price?: number,
    image?: object[
    
    ],
    description?: string,
    categoryId?: string| number,
}

interface ICate {
    _id: string | number,
    name: string,
    products?: IProduct[]
}

interface IUser {
    
    name?: string,
    email?: string,
    password?: string,
}

export type {IProduct,ICate,IUser}