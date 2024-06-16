const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <ul>
        <li className="pb-4 hover:underline hover:text-yellow-500">
          ✉️
          <a href="mailto:miladmirkarimi3@gmail.com">
            {" "}
            miladmirkarimi3@gmail.com
          </a>
        </li>
        <li className="pb-4 hover:underline hover:text-yellow-500">
          👨‍💻
          <a href="https://www.linkedin.com/in/milad-mirkarimi-74075398">
            {" "}
            Linkedin
          </a>
        </li>
        <li className="pb-4 hover:underline hover:text-yellow-500">
          💻<a href="https://github.com/milad-mirkarimi"> Github</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
