import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src="/brand.svg" alt="IPGAMES logo" width={32} height={32} />
      <span className="header__title">IPGAMES</span>
    </header>
  );
};

export default Header;
