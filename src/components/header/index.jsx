const Header = () => {
  return (
    <header className="flex items-center justify-center w-screen py-4 border-b-2 border-grey-100 font-eloquiabold">
      <div className="w-fit">
        <a href="#" className="w-10 px-4 text-base text-start">
          Inicio
        </a>
        <a href="#" className="w-10 px-4 text-base text-start">
          Work
        </a>
        <a href="#" className="w-10 px-4 text-base text-start">
          Portfolio
        </a>
        <a href="#" className="w-10 px-4 text-base text-start">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
