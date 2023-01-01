const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start gap-3">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/jalon-lewis/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/JalonLewis"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
