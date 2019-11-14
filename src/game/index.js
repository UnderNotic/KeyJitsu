import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import decodeCategories from "categories/decodeCategories";

export default function() {
  const { encodedCategories } = useParams();
  const decodedCategories = decodeCategories(encodedCategories);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <hr />
          <h2 className="text-center">Navigate to implemantation</h2>

          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "25%" }}
            ></div>

            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <hr />
          {/* <h4>History with last 5 items(this title not neceseery)</h4> */}
          <ul className="list-group">
            <li className="list-group-item">asddsd</li>
            <li className="list-group-item">asddsd</li>
            <li className="list-group-item">asddsd</li>
            <li className="list-group-item">asddsd</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <Link to="">
            <button type="button" className="btn btn-secondary float-left">
              I'm done
            </button>
          </Link>
          <button type="button" className="btn btn-danger btn-lg float-right">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
