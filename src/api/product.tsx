import instance from "./instance";

const getAllProduct = (keyword:any) => {
    return instance.get(`/api/products?_keywords=${keyword}`);
}
const getOneProduct = (id:any) => {
    return instance.get('/api/products/'+id);

}
const deleteProduct = (id:any) => {
    return instance.delete('/api/products/' + id);
}
const addProduct = (product:any) => {
    return instance.post('/api/products', product);
}
const updateProduct = (product:any) =>{
    return instance.patch("/api/products/"+ product._id, product)
}
export { getAllProduct, deleteProduct, addProduct , updateProduct,getOneProduct }