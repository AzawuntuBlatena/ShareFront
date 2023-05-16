const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-1 ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0">
          <h3 className="text-xl font-bold">My Website</h3>
          <p className="text-sm">A simple website built with Next.js and Tailwind CSS</p>
        </div>
        <div className="flex items-center">
          <p className="text-sm mr-4">Contact us: info@mywebsite.com</p>
          <p className="text-sm">Follow us: @mywebsite</p>
        </div>
      </div>
      <div className="mt-8 text-sm text-gray-400">
        <p className="text-center">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;