import Header from "../component/Header";
import CourceMenu from "../component/CourceMenu";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container-fluid">
        <CourceMenu />
        <div className="container">
          <div className="row">
            <div className="col-sm-10">
              <div className="row">
                <div className="col-sm-6">
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                          alt="Trendy Pants and Shoes"
                          className="img-fluid rounded-start"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer d-flex justify-content-center">
                      <a href="">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
                          alt="Trendy Pants and Shoes"
                          className="img-fluid rounded-start"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer d-flex justify-content-center">
                      <a href="">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
