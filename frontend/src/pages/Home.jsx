import Header from "../component/Header";
import CourceMenu from "../component/CourceMenu";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container-fluid">
        <CourceMenu />
        <div className="container">
          <div className="row">
            <div className="col-sm-10"></div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </main>
    </>
  );
}
