import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Button, Checkbox, Form, Input } from 'antd';
import { ICate } from '../../interface/interface';
interface IProps {
  onAddCate: (
    category: ICate
  ) => void
}
const AddCategory = (props: IProps) => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({})
  const onHandleChange = (e: any) => {
    const { name, value } = e.target
    setInputValue({ ...inputValue, [name]: value });
  }
  // const onHandleSubmit = (e:any) => { 
  //     e.preventDefault();
  //     props.onAddCate(inputValue)
  //     navigate('/admin/categories') 
  // }
  const onFinish = (values: any) => {
    values.name = values.name?.trim()
    props.onAddCate(values);
    navigate('/admin/categories')
    location.reload()
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true, message: 'Please input your username!' }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {/* <form action="" onSubmit={onHandleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" onChange={onHandleChange} name='name' placeholder='nhập tên' />
                </div>
                
                <button type="submit">Add New Category</button>
            </form> */}
    </div>
  )
}

export default AddCategory
