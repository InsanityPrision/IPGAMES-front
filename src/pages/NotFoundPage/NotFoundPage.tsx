import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="page-not-found">
      <h1>Page not found</h1>
      <div className="page-not-found__image-container">
        <img
          className="page-not-found__image"
          src="/404.svg"
          alt="Error 404 not found"
          width={210}
          height={180}
        />
      </div>
      <p className="page-not-found__text">
        Sorry! Page not found, the requested page does not exist on our website.
      </p>
    </div>
  );
};

export default NotFoundPage;
