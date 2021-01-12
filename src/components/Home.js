import React from 'react'


const Home = () => {
    return (
        <div>
            
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#"><img src="/images/logo.png"/></a>
            
             <div className="collapse navbar-collapse justify-content-md-center" id="navbarSupportedContent">
                <ul className="nav navbar-nav text-right text-white ml-auto mr-auto">
                    <li className="nav-item" role="presentation"><a className="nav-link" href="#">Diamonds</a></li>
                    <li className="nav-item" role="presentation"><a className="nav-link active" href="#">Accessories</a></li>
                    <li className="nav-item" role="presentation"><a className="nav-link" href="#">Fine Jewelery</a></li>
                    <li className="nav-item" role="presentation"><a className="nav-link" href="#">WATCHES</a></li>
                </ul>
            </div>
            <div className="flex">
                <img src="/images/img1.png" className="nvr"/>
            </div>
        </div>
    </nav>
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="/images/slide1.png" className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src="/images/slide2.png" className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src="/images/slide3.png" className="d-block w-100" alt="..."/>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid position-relative red-strip pt-5">
        <div className="row">
            <div className="col">
                <div className="form-group text-center">
                    <h3>Our Collection</h3>
                </div>
                <div className="form-group mb-5">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-xl-4 text-center">
                            <p className="mb-0 cc1 font1 fs20">
                                Discover our elegent and unique fine jewelry collections, ranging from classic diamond studs to stylish pendants and dazzling bracelets.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="fbsbox">
                        <div className="row">
                            <div className="col-md-12 col-xl-3">
                                <div className="mcards">
                                    <figure className="mb-0 text-center">
                                        <img src="/images/img2.png" className="img-fluid"/>
                                    </figure>
                                    <div className="form-group mb-0 text-center py-4">
                                        <p className="fw700 mb-2">Wedding Rings</p>
                                        <p className="mb-0 cc1">Every Diamond in our collection</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-xl-3">
                                <div className="mcards">
                                    <figure className="mb-0 text-center">
                                        <img src="/images/img3.png" className="img-fluid"/>
                                    </figure>
                                    <div className="form-group mb-0 text-center py-4">
                                        <p className="fw700 mb-2">Engagement Rings</p>
                                        <p className="mb-0 cc1">Every Diamond in our collection</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-xl-3">
                                <div className="mcards">
                                    <figure className="mb-0 text-center">
                                        <img src="/images/img4.png" className="img-fluid"/>
                                    </figure>
                                    <div className="form-group mb-0 text-center py-4">
                                        <p className="fw700 mb-2">Fine Jewelry</p>
                                        <p className="mb-0 cc1">Every Diamond in our collection</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-xl-3">
                                <div className="mcards">
                                    <figure className="mb-0 text-center">
                                        <img src="/images/img5.png" className="img-fluid"/>
                                    </figure>
                                    <div className="form-group mb-0 text-center py-4">
                                        <p className="fw700 mb-2">Latest Rings</p>
                                        <p className="mb-0 cc1">Every Diamond in our collection</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid position-relative pt-5 pb-5">
        <div className="row">
            <div className="col">
                <div className="form-group text-center">
                    <h3>EXPLORE LOOSE DIAMONDS</h3>
                </div>
                <div className="form-group mb-5">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-xl-4 text-center">
                            <p className="mb-0 cc1 font1 fs20">
                                Every diamond in our collection is selected for its superior cut, symmetry, and shape.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="fbsbox">
                        <div className="carousel">
                            <ul className="carousel__list">
                              <li className="carousel__item" data-pos="-2">
                                  <div className="pen">
                                    <figure>
                                        <img src="/images/img6.png" className="img-fluid"/>
                                    </figure>
                                    <div className="form-group topb">
                                        <p className="ctitle">Round</p>
                                        <p className="cc2">Every Dimonds in our collection</p>
                                    </div>
                                  </div>
                              </li>
                              <li className="carousel__item" data-pos="-1">
                                <div className="pen">
                                <figure>
                                    <img src="/images/img7.png" className="img-fluid"/>
                                </figure>
                                <div className="form-group topb">
                                    <p className="ctitle">Round</p>
                                    <p className="cc2">Every Dimonds in our collection</p>
                                </div>
                               </div>
                              </li>
                              <li className="carousel__item" data-pos="0">
                                <div className="pen">
                                    <figure>
                                        <img src="/images/img8.png" className="img-fluid"/>
                                    </figure>
                                    <div className="form-group topb">
                                        <p className="ctitle">Oval</p>
                                        <p className="cc2">Every Dimonds in our collection</p>
                                    </div>
                                </div>
                              </li>
                              <li className="carousel__item" data-pos="1">
                                <div className="pen">
                                    <figure>
                                        <img src="/images/img9.png" className="img-fluid"/>
                                    </figure>
                                    <div className="form-group topb">
                                        <p className="ctitle">Emerld</p>
                                        <p className="cc2">Every Dimonds in our collection</p>
                                    </div>
                                </div>
                              </li>
                              <li className="carousel__item" data-pos="2">
                                <div className="pen">
                                    <figure>
                                        <img src="/images/img10.png" className="img-fluid"/>
                                    </figure>
                                    <div className="form-group topb">
                                        <p className="ctitle">Heart</p>
                                        <p className="cc2">Every Dimonds in our collection</p>
                                    </div>
                                </div>
                              </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    <div className="container-fluid position-relative pt-5 pb-5">
        <div className="row">
            <div className="col-md-12 col-xl-6 d-flex align-items-center">
                <div className="fbox">
                    <div className="form-group">
                        <h1>Keep In Touch</h1>
                        <p className="font1 cc1 fs20">Our lab created diamonds are the eco-conscious choice, and exihibit the same sparkle as natural diamonds.</p>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Enter your email Id to suscribe"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary mt-4" value="Sign Up"/>
                    </div>
                </div>
            </div>
            <div className="col-md-12 col-xl-6">
                <div className="form-group text-center">
                    <figure>
                        <img src="/images/img11.png" className="img-fluid mptop"/>
                    </figure>
                </div>
            </div>
        </div>
    </div> 
    <footer>
        <div className="container-fluid bbf">
            <div className="row">
                <div className="col">
                    <div className="form-group text-center">
                        <img src="/images/logo-footer.png" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="form-group text-center mt-3">
                        <p className="font1">dimend SCAASI Jeweler is a unique Jewelry store located in Chicago with an emphasis on great style and exceptional quality</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid pt-4">
            <div className="row mb-3">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                          <a className="nav-link" href="#">Education</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">About us </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Customer Care</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Contact Us</a>
                        </li>
                      </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item px-2">
                          <img src="/images/s1.png"/>
                        </li>
                        <li className="nav-item px-2">
                            <img src="/images/s2.png"/>
                        </li>
                        <li className="nav-item px-2">
                            <img src="/images/s3.png"/>
                        </li>
                      </ul>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-12 col-xl-5 text-center">
                   <img src="/images/p1.png" className="img-fluid"/>
                </div>
                <div className="col-md-12 col-xl-2 text-center">
                    <img src="/images/p3.png" className="img-fluid"/>
                </div>
                <div className="col-md-12 col-xl-5 text-center">
                    <img src="/images/p2.png" className="img-fluid"/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="form-group text-center mt-3">
                        <p className="fsauto">dimend SCAASI and InnerView are Registered Trademarks of Dimed SCAASI Ltd. 2010-2020 Dimed SCAASI Ltd. Terms of Use | Site Map | Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>   
    

    

        </div>
    )
}

export default Home
