import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import React, { useEffect, useState } from 'react'
import ProductDetailPage from './pages/ProductDetail'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/product'
import Dashboard from './pages/admin/Dashboard'
import ProductManagementPage from './pages/admin/ProductManagement'
import AddProductPage from './pages/admin/AddProduct'
import UpdateProduct from './pages/admin/UpdateProduct'
import Singup from './pages/admin/Singup'
import { getAllUsers, singin, singup } from './api/user'
import Singin from './pages/admin/Singin'
import WebsiteLayout from './pages/layout/WebsiteLayout'
import AdminLayout from './pages/layout/AdminLayout'
import { addCategory, deleteCategory, getAllCategory, updateCategory } from './api/category'
import Category from './pages/admin/Category'
import AddCategory from './pages/admin/AddCategory'
import UpdateCategory from './pages/admin/UpdateCategory'
import { ICate, IProduct, IUser } from './interface/interface'

function App() {
  const [products, setProduct] = useState<IProduct[]>([])
  const [users, setUser] = useState([])
  const[keyword,setKeyword] =useState("")
  const[keywordCate,setKeywordCate] =useState("")
  const [categories, setCategory] = useState<ICate[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    getAllProduct(keyword).then(({ data }) => setProduct(data.docs))
  }, [keyword])

  
  const onHandleRemove = (id: number | string) => {
    const newData = products.filter(product => product._id !== id)
    if (confirm('Bạn có muốn xóa'))
      deleteProduct(id).then(() => setProduct([...newData]))
    
  }
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => setProduct([...products, product]))
    navigate('/admin/products')
    location.reload()
  }

  const onHandleUpdate = (product: IProduct) => {
    const newData = products.filter(item => item._id != product._id)
    updateProduct(product).then(() => setProduct([...newData, product]))
    navigate('/admin/products')
    location.reload()

  }


  useEffect(() => {
    getAllCategory(keywordCate).then(({ data }) => setCategory(data.docs))
  }, [keywordCate])
  const onHandleRemoveCate = (id: any) => {
    const newDataCte = categories.filter(category => category._id !== id)
    if (confirm('Bạn có muốn xóa'))
      deleteCategory(id).then(() => setCategory([...newDataCte]))
  }
  const onHandleAddCate = (category: any) => {
    addCategory(category).then(() => setCategory([...categories, category]))
  }

  const onHandleUpdateCate = (category: ICate) => {
    const newDataCate = categories.filter(item => item._id != category._id)
    updateCategory(category).then(() => setCategory([...newDataCate, category]))
    navigate('/admin/categories')
    location.reload()
  }



  useEffect(() => {
    getAllUsers().then(({ data }) => setUser(data))

  }, [])
  const onHandleAddUser = (user: any) => {
    singup(user).then(() => {
      setUser([...users])
      if (user) {
        navigate('/singin')
        alert("Ngon luôn")
      }
    }).catch(error => {
      alert(error.response.data.message)
    })
  }
  const onHandleSingin = (user: IUser) => {
    singin(user).then(({ data }) => {
      localStorage.setItem("accessToken", data.accessToken)
      localStorage.setItem("user", JSON.stringify(data.user))
      if (data.user.role == 'admin') {
        navigate('/admin')
      } else {
        navigate('/')
      }
    }
    ).catch(error => {
      alert(error.response.data.message)
    })
  }

  const onHandleLogout = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("user")
    navigate('/')
    location.reload()
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/' element={<WebsiteLayout onLogout={onHandleLogout} />}>
          <Route index element={<HomePage products={products} />} />
          <Route path='products' element={<ProductPage products={products}  />} />
          <Route path='/products/:id' element={<ProductDetailPage />} />
          <Route path='/singup' element={<Singup onAddUser={onHandleAddUser} />} />
          <Route path='/singin' element={<Singin onSignin={onHandleSingin} />} />
        </Route>

        <Route path='/admin' element={<AdminLayout onLogout={onHandleLogout} />}>
          <Route index element={<Dashboard />} />
          <Route path='products' >
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} onKeyword={setKeyword} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} categories={categories} />} />
            <Route path=':id' element={<UpdateProduct products={products} categories={categories} onUpdate={onHandleUpdate} />} />

          </Route>
          <Route path='categories'>
            <Route index element={<Category categories={categories} onRemovecate={onHandleRemoveCate} onKeywordCate={setKeywordCate} />} />
            <Route path='addcate' element={<AddCategory onAddCate={onHandleAddCate} />} />
            <Route path=':id' element={<UpdateCategory categories={categories} onUpdateCate={onHandleUpdateCate} />} />
          </Route>
        </Route>
      </Routes>
    </div >
  )
}

export default App
