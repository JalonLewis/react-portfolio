const FrontendIcons = () => {
  return (
    <div>
      <div className="flex justify-center gap-1">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://nodejs.org/en/docs/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=for-the-badge"
            alt="Node.js Badge"
          />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://nodemon.io/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=fff&style=for-the-badge"
            alt="Nodemon Badge"
          />
        </a>
      </div>
      <div className="flex justify-center gap-1 mt-1">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.postgresql.org/docs/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=fff&style=for-the-badge"
            alt="PostgreSQL Badge"
          />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://expressjs.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=for-the-badge"
            alt="Express Badge"
          />
        </a>
      </div>
    </div>
  );
};

export default FrontendIcons;
