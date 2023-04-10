import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ICate } from '../../interface/interface'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

interface IProps {
    categories: ICate[],
    onRemovecate: (
        id: string | number
    ) => void
}

const Category = (props: any) => {
    const [data, setData] = useState<ICate[]>([])
    useEffect(() => {
        setData(props.categories)
    }, [props])
    const removeCate = (id: string | number) => {
        props.onRemovecate(id)
    }
    const { Search } = Input;
    const onHandleChange = (e: any) => {
        props.onKeywordCate(e.target.value)
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
                {/* <Search placeholder="input search text" style={{ width: 200 }} onChange={onHandleChange} /> */}
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    suffix={suffix}
                    onChange={onHandleChange}
                />

            </Space>
            <div className='mt-4'>
                <button className='btn btn-success'><Link to={'/admin/categories/addCate'}>Add New Categories</Link></button>
            </div>


            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th> Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((category, index) => {
                        return (
                            <tr key={category._id}>
                                <td>{index + 1}</td>
                                <td>{category.name}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => removeCate(category._id)}>Remove</button>
                                    <button className='btn btn-warning'><Link to={`${category._id}`}>Update</Link></button>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
            {/* <form action="" onSubmit={onHandleLogout}>
                <button>Lượn</button>
            </form> */}
        </div>
    )
}

export default Category
