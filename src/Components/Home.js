import React from "react";

function Home() {
  const componentStyle = {
    fontFamily: "PT Sans, sans-serif",
    color: "#65A0FB",
    fontSize: "50x",
  };

  return (
    <div style={componentStyle}>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          background: "linear-gradient(to right, #080321, #121a4b",
          boxShadow: "0 2px 4px rgb(0, 0, 0, 0)",
        }}
      >
        <div className="container">
          <a href="/" className="navbar-brand" style={{ color: "white" }}>
            <img
              src="./images/clublogo.png"
              style={{ height: "40px", width: "170px" }}
              alt="Logo"
            />
          </a>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <a
                  className="nav-link"
                  style={{ fontWeight: "bold", color: "white" }}
                >
                  iOS Club Website
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link"
                  style={{ fontWeight: "bold", color: "white" }}
                >
                  About
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link"
                  style={{ fontWeight: "bold", color: "white" }}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link"
                  style={{ fontWeight: "bold", color: "white" }}
                >
                  Support
                </a>
              </li>
            </ul>
            <div className="ms-auto">
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#65A0FB",
                  color: "white",
                }}
              >
                Leader Board
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            backgroundImage: `linear-gradient(to right, #080321, #121a4b)`,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        ></div>

        <img
          src="images/hero-shape-1.svg"
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />

        <img
          src="images/hero-shape-2.svg"
          alt=""
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <h1 style={{ fontWeight: "bold", marginBottom: "20px" }}>
            Welcome to iOS Club's XXX event
          </h1>
          <h4
            style={{ fontWeight: "bold", color: "grey", marginBottom: "40px" }}
          >
            Check your position on LeaderBoard
          </h4>

          <div
            className="card mx-auto text-center"
            style={{
              width: "18rem",
              borderRadius: "20px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
            }}
          >
            <div
              className="card-body"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <a
                href="#"
                className="btn btn-primary"
                style={{
                  borderRadius: "20px",
                  fontFamily: "PT Sans, sans-serif",
                  margin: "10px",
                  marginBottom: "20px",
                }}
              >
                Position: 1
              </a>
              <h5
                className="card-title"
                style={{ color: "#65A0FB", fontWeight: "bold" }}
              >
                Team AZ CODERS
              </h5>
              <p
                className="card-text"
                style={{
                  fontFamily: "PT Sans, sans-serif",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Score: 20 Pts
              </p>
            </div>
          </div>

          <div
            className="card mx-auto text-center"
            style={{
              width: "18rem",
              borderRadius: "20px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
            }}
          >
            <div
              className="card-body"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <a
                href="#"
                className="btn btn-primary"
                style={{
                  borderRadius: "20px",
                  fontFamily: "PT Sans, sans-serif",
                  margin: "10px",
                  marginBottom: "20px",
                }}
              >
                Position: 1
              </a>
              <h5
                className="card-title"
                style={{ color: "#65A0FB", fontWeight: "bold" }}
              >
                Team AZ CODERS
              </h5>
              <p
                className="card-text"
                style={{
                  fontFamily: "PT Sans, sans-serif",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Score: 20 Pts
              </p>
            </div>
          </div>

          <div
            className="card mx-auto text-center"
            style={{
              width: "18rem",
              borderRadius: "20px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
            }}
          >
            <div
              className="card-body"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <a
                href="#"
                className="btn btn-primary"
                style={{
                  borderRadius: "20px",
                  fontFamily: "PT Sans, sans-serif",
                  margin: "10px",
                  marginBottom: "20px",
                }}
              >
                Position: 1
              </a>
              <h5
                className="card-title"
                style={{ color: "#65A0FB", fontWeight: "bold" }}
              >
                Team AZ CODERS
              </h5>
              <p
                className="card-text"
                style={{
                  fontFamily: "PT Sans, sans-serif",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Score: 20 Pts
              </p>
            </div>
          </div>

          <div
            className="card mx-auto text-center"
            style={{
              width: "18rem",
              borderRadius: "20px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
            }}
          >
            <div
              className="card-body"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <a
                href="#"
                className="btn btn-primary"
                style={{
                  borderRadius: "20px",
                  fontFamily: "PT Sans, sans-serif",
                  margin: "10px",
                  marginBottom: "20px",
                }}
              >
                Position: 1
              </a>
              <h5
                className="card-title"
                style={{ color: "#65A0FB", fontWeight: "bold" }}
              >
                Team AZ CODERS
              </h5>
              <p
                className="card-text"
                style={{
                  fontFamily: "PT Sans, sans-serif",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Score: 20 Pts
              </p>
            </div>
          </div>

          <div
            className="card mx-auto text-center"
            style={{
              width: "18rem",
              borderRadius: "20px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
            }}
          >
            <div
              className="card-body"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <a
                href="#"
                className="btn btn-primary"
                style={{
                  borderRadius: "20px",
                  fontFamily: "PT Sans, sans-serif",
                  margin: "10px",
                  marginBottom: "20px",
                }}
              >
                Position: 1
              </a>
              <h5
                className="card-title"
                style={{ color: "#65A0FB", fontWeight: "bold" }}
              >
                Team AZ CODERS
              </h5>
              <p
                className="card-text"
                style={{
                  fontFamily: "PT Sans, sans-serif",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Score: 20 Pts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
