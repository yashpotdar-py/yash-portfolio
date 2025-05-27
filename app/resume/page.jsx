"use client";

import {
  SiPython,
  SiJupyter,
  SiTensorflow,
  SiScikitlearn,
  SiPytorch,
  SiKeras,
  SiArduino,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiKalilinux,
  SiHackaday,
  SiGithub,
  SiLinux,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiCss3,
  SiHtml5,
  SiCloud66,
  SiNvidia,
  SiFlask,
} from "react-icons/si";
import { RiRobot3Line } from "react-icons/ri";
import { AiOutlineCamera } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaCloud, FaLanguage } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// about data
const aboutData = {
  title: "About Me",
  description:
    "I am Yash Potdar, a passionate learner with a diverse set of interests and a strong foundation in AI/ML and a strong interest in Cybersecurity. \
    Currently a student, I am committed to gaining hands-on experience through various projects, internships and freelance opportunities. \
    My goal is to continually grow and apply my skills in meaningful ways, while embracing challenges that push me to innovate and excel.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Yash Potdar",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 7028-712-645",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Location",
      fieldValue: "Pune, MH, India",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "yashyogeshpotdar7@outlook.com",
    },
    {
      fieldName: "Degree",
      fieldValue: "B.Tech AI & Data Science",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Marathi, Japanese",
    },
  ],
};

// exprience data
const exprienceData = {
  icon: "/assets/resume/badge.svg",
  title: "Experience",
  description:
    "My experience encompasses a diverse range of roles that have shaped my skills in real-world applications. \
    From internships to leadership roles in student clubs like Google Developer's Group, \
    I have worked in dynamic environments, applying my technical expertise in machine learning and beyond. These \
    experiences have refined my problem-solving capabilities, strengthened my teamwork, and given me a deep \
    understanding of professional responsibilities and expectations.",
  items: [
    {
      company: "BnB Developers",
      position: "Software Development Intern",
      duration: "March 2025 - Present",
    },
    {
      company: "Google Developers Group, AISSMS IOIT",
      position: "AI/ML Lead",
      duration: "Sep 2024 - May 2025",
    },
    {
      company: "AI Student Association, AISSMS IOIT",
      position: "Technical Secretary",
      duration: "Sep 2024 - May 2025",
    },
    {
      company: "AI Adventures",
      position: "Machine Learning Intern",
      duration: "Jul 2024 - Aug 2024",
    },
    {
      company: "AI Student Association, AISSMS IOIT",
      position: "Technical Executive",
      duration: "Sep 2023 - Sep 2024",
    },
  ],
};

// education data
const educationData = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  description:
    "My educational journey reflects a strong foundation in technology and engineering. Currently pursuing a {<span classname='text-accent'>B.Tech</span>} \
    in ({<span classname='text=accent'Artificial Intelligence & Data Science</span>}), I've maintained academic excellence while actively engaging in \
    technical pursuits. My schooling years were marked by a focus on sciences, laying the groundwork for my \
    current specialization in AI and machine learning. This academic path has equipped me with both theoretical \
    knowledge and practical skills essential for innovation in technology.",
  items: [
    {
      institution: "AISSMS Institute of Information Technology, Pune",
      degree: "Artificial Intelligence & Data Science",
      degreeType: "Bachelor of Technology",
      duration: "2022 - Present",
    },
    {
      institution: "Sri Chaitanya College of Education, Pune",
      degree: "HSC 12th Grade",
      degreeType: "Science (PCM)",
      duration: "2020 - 2022",
    },
    {
      institution: "Sri Sri Ravishankar Vidya Mandir, Pune",
      degree: "CBSE 10th Grade",
      degreeType: "School",
      duration: "2008 - 2020",
    },
  ],
};

// licenses & certifications data
const licenseCertData = {
  icon: "/assets/resume/cap.svg",
  title: "Licenses & Certifications",
  description:
    "My technical journey is enriched with a diverse array of certifications and licenses that demonstrate my \
    dedication to continuous learning. From specialized courses in machine learning and cybersecurity to comprehensive \
    web development programs, I've consistently pursued opportunities to expand my expertise. These credentials not only \
    validate my technical proficiency but also showcase my commitment to staying at the forefront of technological advancement.",
  items: [
    {
      institution: "BCG (Forage)",
      course: "GenAI Job Simulation",
      courseType: "Virtual Experience",
      duration: "Nov 2024",
      // link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/BCG%20/Tcz8ggHMbXqqBsKc5_BCG_8YLsuEKt2yoQNEAoQ_1731254138273_completion_certificate.pdf",
    },
    {
      institution: "Goldman Sachs (Forage)",
      course: "Software Engineering Virtual Experience",
      courseType: "Virtual Experience",
      duration: "Nov 2024",
      // link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_8YLsuEKt2yoQNEAoQ_1731253962393_completion_certificate.pdf",
    },
    {
      institution: "AI Adventures, Pune",
      course: "Machine Learning & Data Science with Python",
      courseType: "Offline Training",
      duration: "Jul - Aug 2024",
      link: "",
    },
    {
      institution: "Internshala Trainings",
      course: "Ethical Hacking Training",
      courseType: "Online Course",
      duration: "May 2024",
      // link: "https://trainings.internshala.com/verify-certificate/?certificate_number=4a56cc7f-6c7b-45da-86af-a2db6bf14ac5",
    },
    {
      institution: "Udemy",
      course: "The Complete 2023 Web Development Bootcamp",
      courseType: "Online Course",
      duration: "Aug 2023",
      // link: "https://www.udemy.com/certificate/UC-0b1a2e1c-4b4b-4f71-8a0e-7e8a0f1a0b7d/",
    },
    {
      institution: "IIT Bombay",
      course: "Linux System Administration",
      courseType: "Offline Training",
      duration: "Jun 2023",
      // link: "https://drive.google.com/file/d/1234567890abcdef/view",
    },
    {
      institution: "Google (Coursera)",
      course: "Google IT Automation with Python Professional Certificate",
      courseType: "Professional Certificate",
      duration: "Dec 2022",
      // link: "https://www.coursera.org/account/accomplishments/professional-cert/ABCD1234",
    },
  ],
};

// skills data
const skillsData = {
  title: "Skills",
  description:
    "I bring a well-rounded skill set, combining technical expertise with strong analytical thinking. \
    My key skills include AI/ML techniques, problem-solving, and proficiency in various programming languages. \
    Additionally, I excel in communication, teamwork, and adaptability—traits that have helped me thrive in diverse professional \
    environments. Together, these skills form a strong foundation for tackling complex challenges and delivering innovative solutions.",
  skillList: [
    {
      icon: <SiPython />,
      name: "Python",
      level: "Advanced",
    },
    {
      icon: <RiRobot3Line />,
      name: "AI/ML",
      level: "Advanced",
    },
    {
      icon: <GiArtificialIntelligence />,
      name: "GenAI and LangChain",
      level: "Intermediate",
    },
    {
      icon: <SiTensorflow />,
      name: "TensorFlow",
      level: "Intermediate",
    },
    {
      icon: <SiPytorch />,
      name: "PyTorch",
      level: "Intermediate",
    },
    {
      icon: <SiKeras />,
      name: "Keras",
      level: "Intermediate",
    },
    {
      icon: <SiScikitlearn />,
      name: "Scikit-Learn",
      level: "Intermediate",
    },
    {
      icon: <SiJupyter />,
      name: "Data Science",
      level: "Intermediate",
    },
    {
      icon: <FaLanguage />,
      name: "Natural Language Processing",
      level: "Intermediate",
    },
    {
      icon: <AiOutlineCamera />,
      name: "Computer Vision",
      level: "Intermediate",
    },
    {
      icon: <SiFlask />,
      name: "Flask",
      level: "Advanced",
    },
    {
      icon: <SiReact />,
      name: "React",
      level: "Intermediate",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      level: "Intermediate",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      level: "Intermediate",
    },
    {
      icon: <SiHtml5 />,
      name: "HTML",
      level: "Advanced",
    },
    {
      icon: <SiCss3 />,
      name: "CSS",
      level: "Advanced",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      level: "Intermediate",
    },
    {
      icon: <SiLinux />,
      name: "Linux",
      level: "Advanced",
    },
    {
      icon: <SiKalilinux />,
      name: "Kali Linux",
      level: "Intermediate",
    },
    {
      icon: <SiHackaday />,
      name: "Ethical Hacking",
      level: "Intermediate",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      level: "Intermediate",
    },
    {
      icon: <SiGithub />,
      name: "Git/GitHub",
      level: "Advanced",
    },
    {
      icon: <FaCloud />,
      name: "Cloud Computing",
      level: "Beginner",
    },
    {
      icon: <SiNvidia />,
      name: "CUDA/cuDNN",
      level: "Intermediate",
    },
  ],
};

const Resume = () => {
  const handleCertificateClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    } else {
      toast.warn("This certification does not have an associated link!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        {/* Toast Container */}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          closeOnClick
          pauseOnHover
          draggable
          className="container"
          toastClassName={() =>
            "relative bg-primary text-accent text-sm shadow-lg rounded-xl p-3 flex border-2 border-accent overflow-hidden"
          }
          bodyClassName="text-accent"
          progressClassName="bg-white text-accent"
        />

        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col gap-6 w-full max-w-[380px] mx-auto xl:mx-0 rounded">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="license-cert">
              Licenses & Certifications
            </TabsTrigger>
            <TabsTrigger value="about-me">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold ">{skillsData.title}</h3>
                  <p className="max-w-[920px] text-white/60 mx-auto xl:mx-0">
                    {skillsData.description}
                  </p>
                  <span className="text-accent">
                    Hover over the icons to see more details.
                  </span>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {skillsData.skillList.map((skill, index) => {
                      return (
                        <li key={index} className="">
                          <TooltipProvider className="" delayDuration={100}>
                            <Tooltip className="">
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300 items-center flex flex-col justify-between">
                                  <span className="mt-4">{skill.icon}</span>
                                  <p className="text-sm mt-4 capitalize">
                                    {skill.name}
                                  </p>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="">
                                <p className="capitalize">{skill.name}</p>
                                <span className="text-accent-hover">
                                  {skill.level}
                                </span>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{educationData.title}</h3>
                <p className="max-w-[920px] text-white/60 mx-auto xl:mx-0">
                  My educational journey reflects a strong foundation in
                  technology and engineering. Currently pursuing a{" "}
                  <span className="text-accent">B.Tech</span> in{" "}
                  <span className="text-accent">
                    Artificial Intelligence & Data Science
                  </span>
                  , I've maintained academic excellence while actively engaging
                  in technical pursuits. My schooling years were marked by a
                  focus on sciences, laying the groundwork for my current
                  <span className="text-accent">
                    {" "}
                    specialization in AI and machine learning
                  </span>
                  . This academic path has equipped me with both theoretical
                  knowledge and practical skills essential for innovation in
                  technology.
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {educationData.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[232px] py-6 px-10 rounded-xl flex flex-col
                        justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-white/70">{item.duration}</span>
                          <h3 className="text-xl min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <p className="text-accent">{item.degreeType}</p>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* license-cert */}
            <TabsContent value="license-cert" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{licenseCertData.title}</h3>
                <p className="max-w-[920px] text-white/60 mx-auto xl:mx-0">
                  {licenseCertData.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {licenseCertData.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[232px] py-6 px-10 rounded-xl flex flex-col
                        justify-center items-center lg:items-start gap-1 cursor-pointer hover:bg-[#2a2a31] transition-colors"
                          onClick={() => {
                            handleCertificateClick(item.link);
                          }}
                        >
                          <span className="text-white/70">{item.duration}</span>
                          <h3 className="text-xl min-h-[60px] text-center lg:text-left">
                            {item.course}
                          </h3>
                          <p className="text-accent">{item.courseType}</p>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* exprience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{exprienceData.title}</h3>
                <p className="max-w-[920px] text-white/60 mx-auto xl:mx-0">
                  My experience encompasses a diverse range of roles that have
                  shaped my skills in real-world applications. From internships
                  to leadership roles in student clubs like{" "}
                  <span className="text-accent">
                    Google Developer&apos;s Group
                  </span>
                  , I have worked in dynamic environments, applying my technical
                  expertise in machine learning and beyond. These experiences
                  have refined my problem-solving capabilities, strengthened my
                  teamwork, and given me a deep understanding of professional
                  responsibilities and expectations.
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {exprienceData.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col
                        justify-center items-center lg:items-start gap-1"
                        >
                          <span>{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-white/50"></span>
                            <p className="text-accent">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about-me */}
            <TabsContent value="about-me" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{aboutData.title}</h3>
                <p className="max-w-[920px] text-white/60 mx-auto xl:mx-0">
                  {aboutData.description}
                </p>

                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {aboutData.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-accent">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  <li className="flex items-center justify-center xl:justify-start gap-4 max-w-[620px]">
                    <span className="text-accent">Languages</span>
                    <span className="text-xl">
                      Marathi (Native), Hindi (Proficient), English
                      (Proficient), Japanese (Beginner)
                    </span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
