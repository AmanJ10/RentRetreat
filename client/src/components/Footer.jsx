function Footer() {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="#"
              onClick={handleClick}
              className="text-gray-700 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#"
              onClick={handleClick}
              className="text-gray-700 hover:text-gray-900"
            >
              FAQs
            </a>
            <a
              href="#"
              onClick={handleClick}
              className="text-gray-700 hover:text-gray-900"
            >
              News
            </a>
            <a
              href="#"
              onClick={handleClick}
              className="text-gray-700 hover:text-gray-900"
            >
              Careers
            </a>
            <a
              href="#"
              onClick={handleClick}
              className="text-gray-700 hover:text-gray-900"
            >
              Contact Us
            </a>
            <a
              href="#"
              onClick={handleClick}
              className="text-gray-700 hover:text-gray-900"
            >
              Help Center
            </a>
          </div>
        </div>
        <div className="mt-8 text-gray-600 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} RentRetreat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
