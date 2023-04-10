import React, { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, Select, Upload } from "antd";
import type { FormInstance } from "antd/es/form";
import { UploadOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { ICate, IProduct } from "../../interface/interface";

interface IProps {
  categories: ICate[];
  products: IProduct[];
  onUpdate: (data: IProduct) => void;
}

const UpdateProduct = (props: any) => {
  const { id } = useParams();
  const formRef = React.useRef<FormInstance>(null);
  const [form] = Form.useForm();
  const [categories, setCategories] = useState<ICate[]>([]);
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    setProduct(props.products.find((product: IProduct) => product._id === id));
  }, [props]);

  useEffect(() => {
    setFields();
  }, [product]);

  // set lai gia tri cua categories
  useEffect(() => {
    setCategories(props.categories);
  }, [props.categories]);

  // set lai gia tri cua input
  const setFields = () => {
    form.setFieldsValue({
      _id: product?._id,
      name: product?.name,
      price: product?.price,
      description: product?.description,
      image: product?.image,
      categoryId: product?.categoryId,
    });
  };

  // console.log("cate", categories);
  // console.log("pro", product?.categoryId);

  // get values fields successfully
  const onFinish = (values: IProduct) => {
    values.name = values.name?.trim()
    values.description = values.description?.trim()
    props.onUpdate(values);
    let imageUpdated = [];
    if (values.image?.fileList) {
      imageUpdated = values.image?.fileList.map((value: any) => {
        return value.response[0];
      });
    } else {
      imageUpdated = values.image;
    }
    props.onUpdate({ ...values, image: imageUpdated });
  };

  // finish error
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    formRef.current?.resetFields();
  };

  const { Option } = Select;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  return (
    <Form
      {...layout}
      ref={formRef}
      name="control-ref"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ maxWidth: 600 }}
      form={form}
    >
      <Form.Item name="_id" style={{ display: "none" }}>
        <Input />
      </Form.Item>

      <Form.Item
        name="categoryId"
        label="Danh mục"
        rules={[{ required: true, message: "Vui lòng chọn danh mục" }]}
      >
        <Select placeholder="Chọn danh mục" allowClear>
          {categories.map((category) => {
            return category._id === product?.categoryId ? (
              <Option value={category._id} selected>
                {category.name}
              </Option>
            ) : (
              <Option value={category._id}>{category.name}</Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item
        name="name"
        label="Tên sản phẩm"
        rules={[
          { required: true, message: "Vui lòng nhập tên sản phẩm" },
          { min: 5, message: "Tên sản phẩm phải nhiều hơn 5 ký tự" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="description"
        label="Mô tả sản phẩm"
        rules={[
          { required: true, message: "Vui lòng nhập tên sản phẩm" },
          { min: 10, message: "Mô tả sản phẩm phải nhiều hơn 10 ký tự" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="price"
        label="Giá sản phẩm"
        rules={[
          { required: true, message: "Vui lòng nhập giá sản phẩm" },
          {
            pattern: /^[1-9]\d*$/,
            message: "Vui lòng nhập số lớn hơn 0",
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        name="image"
        label="Ảnh sản phẩm"
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


      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Cập nhật
        </Button>
        <Button htmlType="button" onClick={onReset} className="ml-2">
          Đặt lại
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateProduct;
