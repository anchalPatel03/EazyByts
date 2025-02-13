const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white text-center p-4 mt-10">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="mt-2">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="px-2 hover:text-blue-400">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="px-2 hover:text-blue-400">LinkedIn</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  