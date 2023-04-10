import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Rate } from 'antd';

const ProductPage = (props:any) => {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(props.products)
  }, [props])
  return (
    <div>
      <h1 className="text-center mt-5 mb-4">Đồng hồ nam</h1>
      <div className="row container mx-auto mt-3 mb-4">
        {data.map((product) => {
          return (
            <div
              key={product._id}
              className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mt-3 pr-2 pl-2  "
            >
              <div className="card bg-light border h-100 ">
                <div className=" card-img-top">
                  {product.image?.map((img)=>{
                    return (
                      <img className="card-img-top w-100 h-100" src={img?.url} alt="" />
                    )
                  })}
                </div>
              
                <div className="card-body">
                <div className="p-2  text-center " >{product.name}</div>
                <p className="card-text text-danger font-weight-bolder text-center">
                    {product.price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                  <button className="btn btn-outline-danger position-absolute bottom-0 start-0">
                    <Link to={`/products/${product._id}`}>Xem chi tiết</Link>
                  </button>
                  <div className="position-absolute bottom-0 end-0">
                    <Rate/>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default ProductPage