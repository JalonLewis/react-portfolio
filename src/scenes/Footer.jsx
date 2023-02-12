import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-32 bg-red pt-5 md:pt-10 rounded-b">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl">
            Jalon Lewis
          </p>
          <p className="font-playfair text-md">
            ©2023 Lewis. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;