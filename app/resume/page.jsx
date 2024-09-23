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
} from "react-icons/si";
import { RiRobot3Line } from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

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
      fieldName: "Ph.No.",
      fieldValue: "(+91) 7028-712-645",
    },
    {
      fieldName: "Experience",
      fieldValue: "Student",
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
  ],
};

// exprience data
const exprienceData = {
  icon: "/assets/resume/badge.svg",
  title: "Experience",
  description:
    "My experience encompasses a diverse range of roles that have shaped my skills in real-world applications. \
    From internships to part for student clubs like {<span classname='text-accent'>Google Developer's Group</span>}, \
    I have worked in dynamic environments, applying my technical expertise in machine learning and beyond. These \
    experiences have refined my problem-solving capabilities, strengthened my teamwork, and given me a deep \
    understanding of professional responsibilities and expectations.",
  items: [
    {
      company: "Google Developers Group",
      position: "AI/ML Head",
      duration: "Sep 2024 - Present",
    },
    {
      company: "AI Student Association",
      position: "Technical Secretary",
      duration: "Sep 2024 - Present",
    },
    {
      company: "AI Adventures",
      position: "ML Intern",
      duration: "Jul, 2024 - Aug, 2024",
    },
    {
      company: "AI Student Association",
      position: "Technical Executive",
      duration: "Sep 2023 - Sep 2024",
    },
  ],
};

// education & certifications data
const educationCertData = {
  icon: "/assets/resume/cap.svg",
  title: "Eduation & Certifications",
  description:
    "I hold a solid educational foundation, complemented by industry-recognized certifications that underscore my \
    commitment to professional development. From AI&DS to specialized courses in cybersecurity and web technology, \
    my academic journey has equipped me with a robust skill set. These qualifications not only validate my knowledge but \
    also reflect my drive to stay updated with the latest advancements in my field.",
  items: [
    {
      institution: "AISSMS Institute of Information Technology, Pune",
      degree: "Artificial Intelligence & Data Science",
      degreeType: "Bachelor of Technology",
      duration: "2022 - Present",
    },
    {
      institution: "AI Adventures, Pune",
      degree: "ML, Data Science, Python Training",
      degreeType: "Programming Course",
      duration: "2024",
    },
    {
      institution: "Internshaala Trainings",
      degree: "Ethical Hacking",
      degreeType: "Programming Course",
      duration: "2024",
    },
    {
      institution: "Udemy",
      degree: "The Complete 2023 Web Development Bootcamp",
      degreeType: "Programming Course",
      duration: "2023",
    },
    {
      institution: "IIT Bombay",
      degree: "Linux Training",
      degreeType: "Programming Course",
      duration: "2023",
    },
    {
      institution: "Google (Coursera)",
      degree: "Google IT Automation with Python Specialization",
      degreeType: "Programming Course",
      duration: "2022",
    },
    {
      institution: "Sri Chaitanya College of Education",
      degree: "HSC 12th Grade",
      degreeType: "Science",
      duration: "2020 - 2022",
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
      level: "Intermediate",
    },
    {
      icon: <SiLinux />,
      name: "Linux",
      level: "Intermediate",
    },
    {
      icon: <SiJupyter />,
      name: "Data Science",
      level: "Intermediate",
    },
    {
      icon: <SiTensorflow />,
      name: "Tensorflow",
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
      icon: <SiPytorch />,
      name: "Pytorch",
      level: "Intermediate",
    },
    {
      icon: <SiGithub />,
      name: "GitHub",
      level: "Intermediate",
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
      icon: <SiArduino />,
      name: "Arduino",
      level: "Beginner",
    },
    {
      icon: <SiReact />,
      name: "React",
      level: "Intermidiate",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.JS",
      level: "Beginner",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      level: "Beginner",
    },
  ],
};

const Resume = () => {
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
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col gap-6 w-full max-w-[380px] mx-auto xl:mx-0 rounded">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education-cert">
              Education & Certifications
            </TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
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
                                  <span>{skill.icon}</span>
                                  <p className="text-sm mt-8 capitalize">
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

            {/* education-cert */}
            <TabsContent value="education-cert" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {educationCertData.title}
                </h3>
                <p className="max-w-[920px] text-white/60 mx-auto xl:mx-0">
                  {educationCertData.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {educationCertData.items.map((item, index) => {
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

            {/* exprience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{exprienceData.title}</h3>
                <p className="max-w-[920px] text-white/60 mx-auto xl:mx-0">
                  My experience encompasses a diverse range of roles that have
                  shaped my skills in real-world applications. From internships
                  to part for student clubs like{" "}
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
