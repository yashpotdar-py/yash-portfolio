import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/yashpotdar-py",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/yashyogeshpotdar/",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
