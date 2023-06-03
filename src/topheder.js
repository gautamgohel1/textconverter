import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "./logo.svg";
import "./App.css";

// const fname = "Gautam";
// const lname = "Gohel";
// const today = new Date().toLocaleDateString();
// const ctime = new Date().toLocaleTimeString();

function Topheder(props) {
  const handalupclick = (event) => {
    let newText = tex1.toUpperCase();
    setText(newText);
  };

  const handalfirstup = (event) =>{
   let str = tex1.toString();

    str = str.toLowerCase();

      let str2=str[0].toUpperCase() + str.slice(1);

    setText(str2);
  }

  const handallrclick = (event) => {
    let newText = tex1.toLowerCase();
    setText(newText);
  };

  const handalcpiclick = (event) => {
    let str = tex1.toString();

    str = str.toLowerCase();
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const tex2 = arr.join(" ");
    setText(tex2);
  };
  const handalclickcA = (event) => {
    let str = tex1.toString();
    str = str.toLowerCase();
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] =
        arr[i].charAt(0) + arr[i].charAt(1).toUpperCase() + arr[i].slice(2);
    }
    const tex2 = arr.join(" ");
    setText(tex2);
  };
  const handalclickcopy = (event) => {
    if (tex1 === "") {
      setText2("Field Is Empty 😟😟");
    } else {
      navigator.clipboard.writeText(tex1);
      setText2("Copied");
    }
  };
  const removeextraspace = (event) =>{
   let str = tex1.toString();

    let str2 = str.replace(/\s+/g, ' ').trim();

    setText(str2);
  }
  const handalclickrestart = (event) => {
    setText("");
    // console.log("Click");
    setText2("Copy to clipboard");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    if (tex1 === " ") {
      setText2("Field Is Empty");
    } else {
      setText2("Copy to clipboard");
    }
  };
  const [tex1, setText] = useState("");
  const [tex2, setText2] = useState("Copy to clipboard");

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <img src={logo} height="30px" alt="logo" /> &nbsp;
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active navlinkhome"
                  aria-current="page"
                  href="/"
                >
                  {props.title}
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* body area */}
      <div className="container">
        <form >
            <div className="form-group pt-5">
              <textarea
                className="form-control"
                id="textarea1"
                rows="5"
                value={tex1}
                placeholder="Enter or paste text here"
                onChange={handleOnChange}
                required ></textarea>
            </div>
            
            <div className="pt-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handalupclick}
              >
                UPPERCASE
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                type="button"
                className="btn btn-primary"
                onClick={handalfirstup}
              >
                First Letter Uppercase
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                type="button"
                className="btn btn-primary"
                onClick={handallrclick}
              >
                lowercase
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                type="button"
                className="btn btn-primary"
                onClick={handalcpiclick}
              >
                Capita Lize
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                type="button"
                className="btn btn-primary"
                onClick={handalclickcA}
              >
                cApItA lIzE
              </button>
                &nbsp;&nbsp;&nbsp;
              <button
                type="button"
                className="btn btn-primary"
                onClick={removeextraspace}
              >
                Remove Extra Space
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                type="button"
                className="btn btn-warning"
                onClick={handalclickcopy}
              >
                {tex2}
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={handalclickrestart}
              >
                Reset
              </button>
              &nbsp;&nbsp;&nbsp;

            </div>
        </form>
      </div>
    </>
  );
}
Topheder.propsType = {
  title: PropTypes.string,
};

Topheder.defaultProps = {
  title: "Welcome",
};
export default Topheder;
