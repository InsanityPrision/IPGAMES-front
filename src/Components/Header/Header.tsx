import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="brand-container">
        <img src="/brand.svg" alt="IPGAMES icon" width={32} height={32} />
        <span>IPGAMES</span>
      </div>
    </header>
  );
};

export default Header;
