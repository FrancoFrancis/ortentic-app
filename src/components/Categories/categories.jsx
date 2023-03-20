import React from "react";
import { Link } from "react-router-dom";
import "./categories.scss";




const Categories = ({type}) => {
  return (
  
    <div className="categories">
      {/* <div> */}
      {/* <h1>{type}</h1> */}
      {/* </div> */}
      
      {/* one */}
      <div className="col">
        <div className="row">
          <img src="./images2/purple-lady.jpeg" alt="" />
          <button>
            <Link className="link" to="./products/1">
              Ladies
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="./images/hoodie4.jpg" alt="" />
          <button>
            <Link className="link" to="./products/1">
              {" "}
              Couples
            </Link>
          </button>
        </div>
      </div>
      {/* two */}
      <div className="col">
        <div className="row">
          <img src="./images/scooter1.jpg" alt="" />
          <button>
            <Link className="link" to="./products/1">
              Scooters
            </Link>
          </button>
        </div>
      </div>
      {/* three */}
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="./images/backpack1.jpg" alt="" />
              <button>
                <Link className="link" to="./products/1">
                  Back pack
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="./images/lady.jpg" alt="" />
              <button>
                <Link className="link" to="./products/1">
                  jump suit
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="./images/backpack1.jpg" alt="" />
          <button>
            <Link className="link" to="./products/1">
              Accesories
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
