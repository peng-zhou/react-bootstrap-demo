import React, { Fragment } from "react";
import Cards from "./components/Cards";

function App() {
  return (
    <Fragment>
      <div className="page">
        <div className="site-wrapper">
          <div className="container">
            <div className="row">
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
