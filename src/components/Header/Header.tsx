import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="brand-container">
        <img src="/brand.svg" alt="IPGAMES logo" width={32} height={32} />
        <span className="header__title">IPGAMES</span>
      </div>
    </header>
  );
};

export default Header;
