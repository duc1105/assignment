import React, { useEffect, useState } from 'react'
import { Rate } from 'antd';
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../api/product'
import { IProduct } from '../interface/interface'

const ProductDetailPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState<IProduct>()
    useEffect(() => {
        getOneProduct(id).then(({ data }) => {
            setProduct(data)
        })
    }, [])


    return (
        <div className=''>
            <div className="container text-center pt-5  ">
                <div>
                    <p className=' fs-4 fw-bolde  text-danger '>
                        {product?.name}
                    </p>
                </div>
                <div className="row">
                    <div className="col py-5 ">
                    {product?.image?.map((img)=>{
                    return (
                      <img className=' border w-75 p-4'  src={img?.url} alt="" />
                    )
                  })}
                      
                    </div>
                    <div className="col text-start mt-4">
                        <h2 className=''>
                            Thông tin sản phẩm
                        </h2>
                        <div className='pt-2'>
                            <h6>Đánh giá</h6>
                        <Rate />
                        </div>
                        <div className='mt-4 d-flex'>
                            <p className=''>Mã Số Sản Phẩm : </p>
                            <p className='text-black-50 '> AE-1200WHD-1AVDF</p>
                        </div>
                        <div className='text-center    '>
                            <p className="mt-3 card-text fs-3 text-black-50   font-weight-bolder">
                                {product?.price?.toLocaleString("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                })}
                            </p>
                        </div>
                        <div className='mt-4 '>
                            <h6 className='d-flex'>
                                hoặc ≈
                                <b>457.000 ₫ x 3 kỳ (0% lãi suất)</b>
                                (Tìm hiểu?)
                            </h6>
                        </div>
                        <div className='mt-3'>
                            {product?.description}
                        </div>
                        <div className='text-center mt-5'>
                            <button className='btn btn-danger '>Thêm vào giỏ hàng</button>
                        </div>
                        <div className='text-center mt-4'>
                            <h6>Có thanh toán: Trả Góp khi mua Online (Qua thẻ tín dụng)</h6>
                            <h6>Gọi đặt mua: 1900.6777 (8:00-1:30)</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className=' fs-3 text-danger container-md border border-bottom-0 '>Mô tả</div>
                <div className="container-md border mb-3 ">

                    <div className="row">
                        <div className="col">
                            <table className='table table-striped'>
                                <thead className=''>
                                    <tr>
                                        <td>Thương Hiệu: Casio</td>
                                    </tr>
                                    <tr>
                                        <td>Số Hiệu Sản Phẩm: AE-1200WHD-1AVDF</td>
                                    </tr>
                                    <tr>
                                        <td>Xuất Xứ: Nhật Bản</td>
                                    </tr>
                                    <tr>
                                        <td>Giới Tính: Nam</td>
                                    </tr>
                                    <tr>
                                        <td>Kính: Resin Glass (Kính Nhựa)</td>
                                    </tr>
                                    <tr>
                                        <td>Máy: Quartz (Pin)</td>
                                    </tr>
                                    <tr>
                                        <td>Bảo Hành Quốc Tế: 1 Năm</td>
                                    </tr>
                                    <tr>
                                        <td>Đường Kính Mặt Số: 45 mm x 42.1 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Chức Năng: Lịch – Bộ Bấm Giờ – Giờ Kép – Đèn Led – Vài Chức Năng Khác</td>
                                    </tr>
                                    <tr>
                                        <td>Nơi sản xuất (Tùy từng lô hàng): Trung Quốc</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="col mt-3">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/AYcjQRaM7ZI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                            <div className='py-3'>
                                <i ><b>Casio AE-1200WHD-1AVDF là chiếc đồng hồ Casio bán chạy nhất tại Việt Nam. Do đó, sản phẩm này đang bị làm giả rất nhiều tại Việt Nam và hàng loạt khách của Hải Triều phản ánh sau khi mua đồng hồ xong không biết đâu hàng thật, hàng giả. Để tránh trường hợp này, khách hàng lưu ý những điều sau.</b></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                              
        </div>

        
    )
}

export default ProductDetailPage