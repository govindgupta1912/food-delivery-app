const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <footer className="bg-gray-900 text-white py-4 flex flex-col md:flex-row justify-center items-center text-center space-y-2 md:space-y-0 md:space-x-2">
        <span className="text-gray-400">
          Created By
        </span>
        <i className="fa-solid fa-heart text-red-500 mx-1"></i>
        <a
          href="https://www.linkedin.com/in/govind-kumar-gupta-9a7a99178/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-orange-400 transition duration-300"
          title="Govind Gupta Linkedin Profile"
        >
          Govind Kumar Gupta
        </a>
        <i className="fa-solid fa-copyright text-gray-400 mx-1"></i>
        <span>{year}</span>
        <a
          href="https://github.com/govindgupta1912/food-delivery-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-orange-400 font-bold transition duration-300"
          title="Food Order Github Repository"
        >
          <strong>
            Food<span className="text-white">Order</span>
          </strong>
        </a>
      </footer>
    );
  };
  
  export default Footer;
  