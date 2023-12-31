import SwiftRentLogo from "../assets/images/swift-rent-logo.png";

const NotFoundPage = () => {
  return (
    <div className="main-body">
      <div className="img-div">
        <img className="login-img" src={SwiftRentLogo} alt="swift-rent-logo" />
        <br />
        <br />
        <br />
        <h1 className="authorize-text">404 Page Not Found</h1>
        <br />
        <br />
        <br />
        <h2>The page you are trying to access does not exist.</h2>
      </div>
    </div>
  );
};

export default NotFoundPage;
