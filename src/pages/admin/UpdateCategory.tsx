import React, { useEffect, useState } from "react";
import { Button, Form, FormInstance, Input } from "antd";
import { useParams } from "react-router-dom";
import { ICate } from "../../interface/interface";
interface IProps {
  categories: ICate[];
  onUpdateCate: (categories: ICate) => void;
}
const UpdateCategory = (props: IProps) => {
  const { id } = useParams();
  const formRef = React.useRef<FormInstance>(null);
  const [form] = Form.useForm();
  const [category, setCategory] = useState<ICate>();

  //set categoríe
  useEffect(() => {
    setCategory(
      props.categories.find((category: ICate) => category._id === id)
    );
  }, [props.categories]);

  useEffect(() => {
    setFields();
  }, [category]);

  const onFinish = (values: any) => {
    values.name = values.name?.trim()
    props.onUpdateCate(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const setFields = () => {
    form.setFieldsValue({
      _id: category?._id,
      name: category?.name,
      products: category?.products,
    });
  };

  const onReset = () => {
    formRef.current?.resetFields();
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
      ref={formRef}
      autoComplete="off"
    >
      <Form.Item name="_id" style={{ display: "none" }}>
        <Input />
      </Form.Item>
      <Form.Item name="products" style={{ display: "none" }}>
        <Input />
      </Form.Item>
      <Form.Item
        name="name"
        label="Tên danh mục"
        rules={[
          { required: true, message: "Vui lòng nhập tên danh mục!" },
          { min: 3, message: "Vui lòng nhập tên sản phẩm nhiều hơn 3 ký tự" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ background: "#1677FF" }}
        >
          Cập nhật
        </Button>
        <Button
          type="primary"
          style={{ background: "#8c8c8c", marginLeft: "5px" }}
          onClick={onReset}
        >
          Đặt lại
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateCategory;
