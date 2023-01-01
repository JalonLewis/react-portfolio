import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-28 bg-red">
      <div className="w-10/12 mx-auto mt-auto pt-5">
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow mb-4">
            JALON LEWIS
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2022 LEWIS. All Rights Reserved.
          </p>
        </div>
        <SocialMediaIcons />
      </div>
    </footer>
  );
};

export default Footer;