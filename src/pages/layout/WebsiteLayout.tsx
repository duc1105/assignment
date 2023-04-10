import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const WebsiteLayout = (props: any) => {
  const onHandleLogout = (e: any) => {
    e.preventDefault();
    props.onLogout()
  }
  const user = JSON.parse(localStorage.getItem("user") as string);
  const signin = () => {
    if (user) {
      return (
        <form className='' action="" onSubmit={onHandleLogout}>

          <button className="fa fa-user btn  " aria-hidden="true"> Đăng xuất</button>
        </form>

      )
    }
    return (
      <a href="/singin">
        <i className="fa fa-user " aria-hidden="true"> Đăng nhập</i>
      </a>
    )
  }




  return (
    <div className=''>

      <header className="header_section bg-light   ">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="/">AnhDuc</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ml-5">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item ml-4">
                  <a className="nav-link" href="/products">Products</a>
                </li>
                <li className="nav-item  ml-4">
                  <a className="nav-link " href="/products" >
                    About
                  </a>
                </li>
                <li className="nav-item ml-4">
                  <a className="nav-link " href="/products">Contacts</a>
                </li>
              </ul>
              <form className="d-flex ml-4 " role="search">
                <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success " type="submit">Search</button>
              </form>
            </div>
            <div className="user_option-box">


              {
                signin()
              }
              <a href="">
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
              </a>

            </div>
          </div>
        </nav>
      </header>
      <main className='text-red'>
        <Outlet />
      </main>
      <footer className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 footer-col">
              <div className="footer_detail">
                <h4>
                  About
                </h4>
                <p>
                  Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
                </p>
                <div className="footer_social">
                  <a href="">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer-col">
              <div className="footer_contact">
                <h4>
                  Reach at..
                </h4>
                <div className="contact_link_box">
                  <a href="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>
                      Location
                    </span>
                  </a>
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>
                      Call +01 1234567890
                    </span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>
                      demo@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer-col">
              <div className="footer_contact">
                <h4>
                  Subscribe
                </h4>
                <form action="#">
                  <input type="text" placeholder="Enter email" />
                  <button type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer-col">
              <div className="map_container">
                <div className="map">
                  <div id="googleMap"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span> All Rights Reserved By
              <a href="https://html.design/">Free Html Templates</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default WebsiteLayout

