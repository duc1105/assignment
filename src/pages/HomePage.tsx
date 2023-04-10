import { useEffect, useState } from "react"
const HomePage = (props: any) => {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(props.products)
  }, [props])
  return (
    <div>
      <section className="slider_section ">
        <div id="customCarousel1" className="carousel slide " data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid ">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>
                        Smart Watches
                      </h1>
                      <p>
                        Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row container-md mx-auto mt-3 mb-5  ">
        {data.map((product) => {
          return (
            <div
              key={product._id}
              className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mt-3 pr-2 pl-2  "
            >
              <div className="card text-center border h-100  " >
                <div>
                  {product.image?.map((img)=>{
                    return (
                      <img className=" card-img-top" src={img?.url} alt="" />
                    )
                  })}
                </div>
                <div className="card-body">
                  <h5 className="card-title">

                  </h5>
                  <div className="mt-2 h-4">{product.name}</div>
                  <p className="card-text text-danger  font-weight-bolder mb-3">
                    {product.price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                  <a href="#" className="btn btn-info position-absolute bottom-0 start-50 translate-middle-x">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default HomePage