export default function Footer() {
  return (
    <>
      <footer className="container-fluid bg-dark text-light py-3 mt-5">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h6 className="mb-1">
              &copy; {new Date().getFullYear()} All rights reserved.
            </h6>
            <small>
              Designed and Developed by -{" "}
              <strong>
                {" "}
                <a href="https://z1iinnovation.com/" target="_blank">
                  {" "}
                  Z1I Innovations{" "}
                </a>
              </strong>
            </small>
          </div>
        </div>
      </footer>
    </>
  );
}
