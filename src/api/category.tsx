import instance from "./instance";

const getAllCategory = (keywordCate:any) => {
    return instance.get(`/api/category?_keywords=${keywordCate}`);
}
const deleteCategory = (id:any) => {
    return instance.delete('/api/category/' + id);
}
const addCategory = (category:any) => {
    return instance.post('/api/category', category);
}
const updateCategory = (category:any) =>{
    return instance.patch("/api/category/"+ category._id, category)
}
export { getAllCategory, deleteCategory, addCategory , updateCategory }