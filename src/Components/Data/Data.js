//  icons
import {
  FiInstagram,
  FiGithub,
  FiTwitter,
  FiLayout,
  FiSettings,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiFacebook,
  FiCode,
  FiDatabase,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "../../assets/img/brands/freelancer.png";
import UpworkBrandIcon from "../../assets/img/brands/upwork.png";
import FiverBrandIcon from "../../assets/img/brands/fiverr.png";
import BehanceBrandIcon from "../../assets/img/brands/behance.png";
import DribbbleBrandIcon from "../../assets/img/brands/dribbble.png";

// projects images
import Project1 from "../../assets/img/projects/project1.png";
import Project2 from "../../assets/img/projects/project2.png";
import Project3 from "../../assets/img/projects/project3.png";

// skills images
import SkillImg1 from "../../assets/img/skills/html5.png";
import SkillImg2 from "../../assets/img/skills/css3.png";
import SkillImg3 from "../../assets/img/skills/js.png";
import SkillImg4 from "../../assets/img/skills/reactjs.png";
import SkillImg5 from "../../assets/img/skills/nextjs.png";
import SkillImg6 from "../../assets/img/skills/nodejs.png";
import SkillImg7 from "../../assets/img/skills/github.png";
import SkillImg8 from "../../assets/img/skills/figma.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "skills",
    href: "skills",
  },
  {
    name: "projects",
    href: "projects",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "contact Me",
    href: "ContactMe",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/muhammadoasif/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/MuhammadOAsif",
  },
  {
    icon: <FiFacebook />,
    href: "https://www.facebook.com/Muhammad0Asif/",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/muhammadooasif/",
  },
  {
    icon: <FiTwitter />,
    href: "https://twitter.com/MuhammadOAsif",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "https://www.freelancer.com/u/muhammadasif2m",
  },
  {
    img: UpworkBrandIcon,
    href: "https://www.upwork.com/freelancers/~018d60e97b0b51f5b2",
  },
  {
    img: FiverBrandIcon,
    href: "https://www.fiverr.com/muhammad_asif_2?up_rollout=true",
  },
  {
    img: BehanceBrandIcon,
    href: "https://www.behance.net/",
  },
  {
    img: DribbbleBrandIcon,
    href: "https://dribbble.com/",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Goodies",
    category: "Project One",
    description:
      "Our website has been made a manufacture related parts will be create any product from there.",
    href: "https://goodies-fed4a.web.app/",
  },
  {
    id: "2",
    image: Project2,
    name: "Pc House",
    category: "Project Two",
    description:
      "Our website has been made a warehouse related where many items will be stocked and sold from there.",
    href: "https://pc-house-32c57.web.app/",
  },

  {
    id: "3",
    image: Project3,
    name: "Skytech Prism",
    category: "Project Three",
    description:
      "Our website has been made with a product review. Business charts are also being made on the dashboard page.",
    href: "https://skytech-prism.netlify.app/",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Project One",
  },
  {
    name: "Project Two",
  },
  {
    name: "Project Three",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "I try to give the best design to a client. I also try to design as the client says. Thank you",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "When I do a website development I try to do it with my full attention and love because a little mistake goes a long way in paying it. So I always try to be careful about everything, so if you give me a job in the development sector, I hope I will try my best.",
  },
  {
    icon: <FiCode />,
    name: "Coding",
    description:
      "I always code with my full love. I always love to code clean. I always try to code something that someone else can understand by looking at my code.",
  },
  {
    icon: <FiDatabase />,
    name: "Database",
    description:
      "I help my clients to save and deploy all kinds of website data safely. I also help you to buy the domain of the client's wish.",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email: muhammadasif2m@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Basabo, Rajarbag, Kalibari",
    description: "Any time you contact me",
  },
];
