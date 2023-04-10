import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, message, Form, Input, Select,Upload } from 'antd';
import { UploadOutlined } from "@ant-design/icons";
import { ICate, IProduct } from '../../interface/interface';
interface IProps {
  categories: ICate[],
  onAdd: (
    product: IProduct
  ) => void

}
const AddProductPage = (props: IProps) => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({})
  // const onHandleChange = (e: any) => {
  //   const { name, value } = e.target
  //   console.log(name, value);

  //   setInputValue({ ...inputValue, [name]: value });
  // }

  const onHandleSubmit = (values: IProduct) => {
    values.name = values.name?.trim()
    values.description = values.description?.trim()
    props.onAdd(values);
    const images = values.image?.fileList.map((value: any) => {
      return value.response[0];
    });
    props.onAdd({ ...values, image: images });
    // navigate('/admin/products')
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
        onFinish={onHandleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Danh mục"
          name="categoryId"
          rules={[{ required: true, message: 'Vui lòng chọn danh mục' }]}
        >
          <Select placeholder="Chọn danh mục"
            options={
              props.categories.map((cate: any) => {
                return { value: cate._id, label: cate.name }
              }

              )
            }
          />

        </Form.Item>
        <Form.Item
          label="Tên sản phẩm"
          name="name"
          rules={[
            { required: true, message: "Vui lòng nhập tên sản phẩm" },
            { min: 5, message: "Tên sản phẩm phải nhiều hơn 5 ký tự" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giá sản phẩm"
          name="price"
          rules={[
            { required: true, message: "Vui lòng nhập giá sản phẩm" },
            {
              pattern: /^[1-9]\d*$/,
              message: "Vui lòng nhập số lớn hơn 0",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ảnh sản phẩm"
          name="image"
          rules={[{ required: true, message: "Dán link file ảnh" }]}
        >
          <Upload
            action="http://localhost:8080/api/images"
            listType="picture"
            name="image"
            multiple
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Mô tả sản phẩm"
          name="description"
          rules={[
            { required: true, message: "Vui lòng nhập mô tả sản phẩm" },
            { min: 10, message: "Mô tả sản phẩm phải nhiều hơn 10 ký tự" },
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
                <div>
                    <label htmlFor="">Price</label>
                    <input type="number" onChange={onHandleChange} name="price" id="" />
                </div>
                
                <button type="submit">Add New Product</button>
            </form> */}
    </div>
  )
}

export default AddProductPage