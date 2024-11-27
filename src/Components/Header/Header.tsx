import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="brand-container">
        <img src="/brand.svg" alt="IPGAMES icon" width={32} height={32} />
        <h1 className="header__title">IPGAMES</h1>
      </div>
    </header>
  );
};

export default Header;
