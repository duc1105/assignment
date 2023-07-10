import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../../interface/interface'
import { Input, Space, Pagination  } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

interface IProps {
    products: IProduct[],
    onRemove: (
        id: string | number
    ) => void
}
const ProductManagementPage = (props: any) => {
    const [data, setData] = useState<IProduct[]>([])
    useEffect(() => {
        setData(props.products)
    }, [props])


    const removeProduct = (id: any) => {
        props.onRemove(id)
    }
    const { Search } = Input;
    // const onHandleLogout = (e:any) =>{
    //     e.preventDefault();
    //     props.onLogout()
    // }
    const onHandleChange = (e: any) => {
        props.onKeyword(e.target.value)
    }
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    return (
        <div>

            <Space direction="vertical">
                {/* <Search placeholder="input search text" style={{ width: 200 }} onChange={onHandleChange} />
                 */}
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    suffix={suffix}
                    onChange={onHandleChange}
                />
            </Space>
            <div className='mt-4 mb-3'>
                <button className='btn btn-success'><Link to={'/admin/products/add'}>Add New Product</Link></button>
            </div>


            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>categoryId</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((product, index) => {
                        return (
                            <tr key={product._id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.image?.map((img)=>{
                                    return(
                                        <img className="w-75" src={img?.url} alt="" />
                                    )
                                })}</td>
                                <td>{product.description}</td>
                                <td>{product.categoryId}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => removeProduct(product._id)}>Remove</button>
                                    <button className='btn btn-warning'><Link to={`${product._id}`}>Update</Link></button>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
            {/* <form action="" onSubmit={onHandleLogout}>
                <button>Lượn</button>
            </form> */}\
            
        </div>
    )
}

export default ProductManagementPage