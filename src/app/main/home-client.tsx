"use client";

import { Fragment, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import FloatingSkills from "@/components/floating-skills";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  ShoppingBag,
  Calendar,
  Building2,
  Plane,
  Hotel,
  Utensils,
  GraduationCap,
  Shield,
} from "lucide-react";

const stats = [
  { value: "300+", label: "PROJECTS" },
  { value: "800+", label: "CLIENTS" },
  { value: "100+", label: "EXPERTS" },
  { value: "250+", label: "HOURS" },
];

const projectStats = [
  { value: "240+", label: "PROJECTS COMPLETED" },
  { value: "50+", label: "EXPERTS" },
  { value: "200k+", label: "HOURS OF EXPERIENCE" },
  { value: "100k+", label: "HAPPY CUSTOMERS" },
];

const showcaseProjects = [
  {
    title: "Online Food Ordering Application",
    description:
      "Introducing S2O - Scan To Order. A Safe & Smart Way For Customers To Order Their Favorite Food Online. Now Easily Satisfy Your Cravings With Just One Click.",
    buttonLabel: "VIEW PROJECT",
    image: "/images/project.png",
  },
  {
    title: "Healthcare Management System",
    description:
      "A comprehensive digital health solution that simplifies patient management, scheduling, and electronic health records for modern clinics and hospitals.",
    buttonLabel: "COMING SOON",
    image: "/images/project.png",
  },
  {
    title: "E-Learning Platform",
    description:
      "Interactive learning experience with real-time video sessions, course management, and collaborative tools for students and educators worldwide.",
    buttonLabel: "COMING SOON",
    image: "/images/project.png",
  },
];

const whyInnvonixData = [
  {
    title: "Quality-Driven Process",
    description:
      "We Choose Agile Scrum Methodology For The Projects To Ensure It Flows Smoothly In The Entire Process And Gets Work Done Efficiently. We Communicate With Our Clients For Regular Project Updates As Well.",
    image: "/images/why_1.png",
  },
  {
    title: "Intelligent Support",
    description:
      "We Help Our Clients With Bespoke Development Solutions That Are Easy To Use, Engaging, And Drive Results For Your Company. Get Immediate Assistance From Our Professionals.",
    image: "/images/why_2.png",
  },
  {
    title: "Extensive Experience",
    description:
      "We Have A Team Of Certified Developers Who Believe In Providing Exceptional Service To Our Clients. With Years Of Experience, We Work With Our Proven Strategies That Pledge To Provide The Required Results.",
    image: "/images/why_3.png",
  },
];

const engagementModels = [
  {
    title: "Time And Material Based",
    description:
      "Based On The Cost Incurred By The Resource Utilization And Material Used In A Particular Time Period.",
    features: [
      "High Team Scalability",
      "No Hidden Costs",
      "Pay Only For Measurable Work Done",
      "Quick Onboarding",
    ],
  },
  {
    title: "Resource Hiring Based",
    description:
      "Based On The Need For A Dedicated Pool Of IT Resources As Per The Requirement, Preference And Expectation.",
    features: [
      "Full-Time Contracts",
      "Monthly Billing",
      "Direct Communication With The Developers",
      "Discounted Rates For Long-Term Contracts",
    ],
  },
];

const industriesWeServe = [
  {
    label: "Healthcare",
    icon: Stethoscope,
    pos: { top: "20%", left: "35%" },
  },
  {
    label: "E-Commerce & Retail",
    icon: ShoppingBag,
    pos: { top: "22%", left: "60%" },
  },
  {
    label: "Event Management",
    icon: Calendar,
    pos: { top: "38%", left: "30%" },
  },
  {
    label: "Banking & Finance",
    icon: Building2,
    pos: { top: "45%", left: "68%" },
  },
  {
    label: "Tours & Travel",
    icon: Plane,
    pos: { top: "54%", left: "34%" },
  },
  {
    label: "Hospitality",
    icon: Hotel,
    pos: { top: "67%", left: "75%" },
  },
  {
    label: "Foods & Restaurants",
    icon: Utensils,
    pos: { top: "70%", left: "25%" },
  },
  {
    label: "Education",
    icon: GraduationCap,
    pos: { top: "78%", left: "45%" },
  },
  {
    label: "Cyber Security",
    icon: Shield,
    pos: { top: "80%", left: "63%" },
  },
];

const services = [
  {
    title: "Front-End Development",
    description:
      "Innvonix Has An In-House Team Of Developers With Expertise In Reactjs, Vuejs, Angularjs, HTML, And CSS When It Comes To Frontend Web Application Development.",
    skills: [
      { name: "React JS", icon: "/images/react.svg" },
      { name: "HTML5 / CSS3", icon: "/images/html5.svg" },
      { name: "Angular JS", icon: "/images/angular.svg" },
      { name: "Vue JS", icon: "/images/vue.svg" },
    ],
  },
  {
    title: "Back-End Development",
    description:
      "Our backend specialists develop robust, scalable, and secure server-side applications using cutting-edge technologies and best practices in architecture.",
    skills: [
      { name: "Node.js", icon: "/images/nodejs.svg" },
      { name: "Python", icon: "/images/python.svg" },
      { name: "PHP", icon: "/images/php.svg" },
      { name: "Java", icon: "/images/java.svg" },
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "We design and develop high-performance mobile applications that provide intuitive user experiences across iOS and Android platforms.",
    skills: [
      { name: "Flutter", icon: "/images/flutter.svg" },
      { name: "React Native", icon: "/images/react_native.svg" },
      { name: "Swift", icon: "/images/swift.svg" },
      { name: "Kotlin", icon: "/images/kotlin.svg" },
    ],
  },
  {
    title: "E-Commerce & CMS",
    description:
      "Customized e-commerce solutions and enterprise CMS platforms that help you manage your content seamlessly and drive sales effectively.",
    skills: [
      { name: "Shopify", icon: "/images/shopify.svg" },
      { name: "WooCommerce", icon: "/images/woo.svg" },
      { name: "Magento", icon: "/images/magento.svg" },
      { name: "WordPress", icon: "/images/wordpress.svg" },
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "Strategies that drive traffic, increase visibility, and grow your online presence through data-driven marketing campaigns.",
    skills: [
      { name: "SEO", icon: "/images/seo.svg" },
      { name: "PPC", icon: "/images/ppc.svg" },
      { name: "SMM", icon: "/images/smm.svg" },
      { name: "Email Marketing", icon: "/images/email.svg" },
    ],
  },
  {
    title: "Quality Assurance",
    description:
      "Meticulous testing and quality control processes ensuring your software is bug-free, robust, and performs flawlessly under all conditions.",
    skills: [
      { name: "Selenium", icon: "/images/selenium.svg" },
      { name: "Postman", icon: "/images/postman.svg" },
      { name: "JMeter", icon: "/images/jmeter.svg" },
      { name: "Appium", icon: "/images/appium.svg" },
    ],
  },
  {
    title: "Emerging Tech",
    description:
      "Leveraging the latest in Blockchain, AI, and Metaverse technologies to keep your business at the forefront of digital innovation.",
    skills: [
      { name: "Blockchain", icon: "/images/blockchain.svg" },
      { name: "AI / ML", icon: "/images/ai.svg" },
      { name: "Web3", icon: "/images/web3.svg" },
      { name: "NFT", icon: "/images/nft.svg" },
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "User-centric design solutions that combine aesthetics with functionality to create engaging and memorable digital experiences.",
    skills: [
      { name: "Figma", icon: "/images/figma.svg" },
      { name: "Adobe XD", icon: "/images/xd.svg" },
      { name: "Illustrator", icon: "/images/ai_design.svg" },
      { name: "Photoshop", icon: "/images/ps.svg" },
    ],
  },
  {
    title: "DevOps Developers",
    description:
      "Optimizing development workflows and infrastructure management to ensure fast, reliable, and continuous software delivery.",
    skills: [
      { name: "Docker", icon: "/images/docker.svg" },
      { name: "Kubernetes", icon: "/images/k8s.svg" },
      { name: "AWS", icon: "/images/aws.svg" },
      { name: "Azure", icon: "/images/azure.svg" },
    ],
  },
];

export default function HomeClient() {
  const [selectedService, setSelectedService] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const card = scrollRef.current.firstElementChild as HTMLElement;
      if (card) {
        const cardWidth = card.clientWidth;
        const gap = 40;
        const scrollAmount = cardWidth + gap;
        const { scrollLeft } = scrollRef.current;
        const scrollTo =
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount;
        scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <section className="relative w-full  overflow-hidden">
        <FloatingSkills />
        <div className="bg-[url('/images/hero_bg.svg')] dark:bg-[url('/images/temp.svg')] bg-size-[100%_100%] bg-no-repeat h-full pt-20 pb-[76px]">
          <div className="relative z-10 flex flex-col items-center  text-center max-w-6xl mx-auto space-y-2  ">
            <h1 className="font-poppins text-4xl z-10 md:text-7xl 2xl:text-[80px] font-medium leading-tight text-primary">
              WEB AND MOBILE
              <br className="hidden sm:block" /> APP DEVELOPMENT
            </h1>

            <p className="text-lg md:text-xl 2xl:text-[32px] z-10 text-foreground font-medium font-manrope max-w-xl leading-relaxed mb-8">
              Your Go-To-Partner for Website And Mobile App Development
              Projects!
            </p>
            <p className="text-sm md:text-base 2xl:text-[20px] z-10 text-foreground font-medium font-manrope max-w-xl leading-relaxed">
              We are bringing ideas to life. Our expert web and mobile team can
              develop impeccable solutions. We build e-commerce portals, custom
              web and mobile applications with robust user-experience matching
              your deadlines.
            </p>
            <div className="flex z-10 flex-col sm:flex-row items-center gap-5 pt-8 font-poppins">
              <Button
                size="lg"
                className="h-14 px-8 text-sm md:text-base  font-semibold rounded-2xl "
              >
                GET A QUOTE
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="h-14 px-8 text-sm md:text-base font-semibold rounded-2xl bg-background/50 backdrop-blur-md hover:bg-muted transition-colors"
              >
                OUR SOLUTION
              </Button>
            </div>
          </div>
        </div>{" "}
      </section>
      <div className="flex items-center text-xl md:text-4xl justify-evenly w-full font-poppins font-semibold py-10 border-y border-primary">
        {stats.map((stat, index) => (
          <Fragment key={index}>
            <div className="text-primary text-center">
              {stat.value} <br />{" "}
              <span className="text-foreground text-sm md:text-lg font-medium">
                {stat.label}
              </span>
            </div>
            {index < stats.length - 1 && (
              <div className="h-16 w-px bg-divider" />
            )}
          </Fragment>
        ))}
      </div>

      <section className="my-10">
        <Container>
          <h1 className="font-poppins text-4xl lg:text-7xl 2xl:text-[80px] font-medium flex justify-start items-center gap-10 mb-10">
            <span> WE INNOVATE </span>
            <Image
              src="/images/star.png"
              alt="star"
              width={32}
              height={32}
            />{" "}
            <span> WE LISTEN</span>
          </h1>
          <h1 className="font-poppins text-4xl lg:text-7xl 2xl:text-[80px] font-medium flex justify-end items-center gap-10">
            <span>WE CARE</span>{" "}
            <Image src="/images/star.png" alt="star" width={32} height={32} />{" "}
            <span>WE DELIVER</span>
          </h1>
        </Container>
      </section>

      <section className="flex gap-20 bg-primary text-white">
        {/* left Image */}
        <div className="w-fit">
          <Image src="/images/we.png" alt="about" width={500} height={500} />
        </div>
        {/* right about */}
        <div className="flex flex-col gap-5 justify-center w-1/2">
          <h1 className="font-poppins text-3xl md:text-4xl lg:text-6xl font-medium mb-10">
            WE ARE INNVONIX
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
            The name “Innvonix” stands for invention & innovation.
          </h2>
          <p className="font-medium">
            Innvonix Tech Solutions is a leading website design and development
            company in India. Established in 2014, we offer a wide range of
            software development services across multiple industries. With the
            goal of being the top web and mobile application development firm,
            we focus on creating long-term value for our clients by determining
            both risks and opportunities in the marketplace.
          </p>
        </div>
      </section>

      <section className="my-20">
        <Container>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary mb-5">
            OUR PROCESS
          </h1>
          <h3 className="text-lg md:text-xl font-bold mb-5">
            <span className="text-primary ">Design. Build. Excel.</span> Taking
            your business to the next level!
          </h3>
          <div className="flex gap-6 h-110 mt-10">
            {["Discovery", "Strategy", "Design", "Build"].map((item, index) => (
              <div
                className={`flex flex-col justify-between p-4 h-[90%] border border-card-border dark:bg-card-bg ${
                  index % 2 === 1 ? "mt-8" : ""
                }`}
              >
                <Image
                  src={`/images/${item}.svg`}
                  alt="process"
                  width={60}
                  height={60}
                  className="dark:block hidden"
                />
                <Image
                  src={`/images/${item}_dark.svg`}
                  alt="process"
                  width={60}
                  height={60}
                  className="block dark:hidden"
                />
                <div className="flex flex-col gap-5">
                  <h1 className="font-poppins text-2xl md:text-3xl min-[1440px]:text-[30px] min-[1920px]:text-[36px] font-medium flex justify-start items-center gap-10">
                    <span> {item} </span>
                  </h1>

                  <p>
                    Any successful project starts with a precise understanding
                    and documentation of the Business and Technical
                    requirements.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="my-20">
        <Container>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            OUR SERVICES
          </h1>
          {/* Left side the list of services lik frontend backend etc and on right side the detail about it, in right side on top description and on bottom list of skills like html, css, js etc and on toggle to left side it change right side content accordingly */}
          <div className="flex w-full mt-10 min-h-[600px] overflow-hidden 2xl:h-[800px]">
            {/* Left side list */}
            <div className="w-[40%] bg-background my-8">
              <ul className="flex flex-col h-full">
                {services.map((service, index) => (
                  <Fragment key={index}>
                    <li
                      className={`group cursor-pointer flex items-center gap-6 px-10 py-4 transition-all duration-300 relative ${
                        selectedService === index
                          ? "bg-primary text-white"
                          : "hover:bg-primary/5 text-foreground"
                      }`}
                      onClick={() => setSelectedService(index)}
                    >
                      <div
                        className={`size-10 rounded-full border flex items-center justify-center text-sm font-medium transition-colors ${
                          selectedService === index
                            ? "border-white text-white"
                            : "text-black bg-white group-hover:text-white group-hover:bg-primary"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span className="text-base md:text-lg font-medium uppercase tracking-wide">
                        {service.title}
                      </span>
                    </li>
                    {index < services.length - 1 &&
                      selectedService !== index &&
                      selectedService !== index + 1 && (
                        <div className="h-px bg-white" />
                      )}
                  </Fragment>
                ))}
              </ul>
            </div>

            {/* Right side detail */}
            <div className="w-[60%] relative flex flex-col justify-between bg-foreground dark:bg-primary p-8 text-white bg-[url('/images/services_bg.png')] dark:bg-[url('/images/services_bg_dark.png')] bg-bottom-right bg-no-repeat overflow-hidden">
              <div className="relative z-10 flex gap-5">
                <div className="w-1 bg-white  shrink-0" />
                <div className="space-y-8">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl min-[1440px]:text-[40px] min-[1920px]:text-[48px] font-semibold leading-tight leading-none">
                    {services[selectedService].title}
                  </h1>
                  <p className="text-base md:text-lg min-[1440px]:text-[18px] min-[1920px]:text-[20px] leading-relaxed font-manrope  opacity-90 font-medium">
                    {services[selectedService].description}
                  </p>
                </div>
              </div>

              {/* Skills Footer */}
              {/* <div className="relative z-10 mt-20"> */}
              <div className="flex flex-wrap gap-4">
                {services[selectedService].skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white px-4 py-3 flex items-center gap-3 shadow-lg"
                  >
                    {/* <div className="size-8 relative grayscale hover:grayscale-0 transition-all">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          fill
                          className="object-contain"
                        />
                      </div> */}
                    <span className="text-black font-semibold text-sm md:text-base min-[1440px]:text-[16px] min-[1920px]:text-[18px] uppercase tracking-wider">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
              {/* </div> */}
            </div>
          </div>
        </Container>
      </section>

      <section className="my-20">
        <Container>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-10 font-bold text-primary uppercase tracking-tight">
            OUR PROJECTS
          </h1>
          <div className="flex flex-col md:flex-row w-full gap-10 md:gap-20">
            {/* Left side */}
            <div className="md:w-1/2 flex flex-col gap-8">
              <h2 className="text-3xl md:text-5xl font-bold flex flex-col gap-2 leading-tight">
                <span>WHAT YOU ASK IS</span>
                <span>WHAT YOU GET!</span>
              </h2>
            </div>

            {/* Right side stats grid */}
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {projectStats.map((stat, index) => (
                <div key={index} className="relative pt-6">
                  {/* Gradient Line */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-[#e96624] via-[#d1304b] via-[#bb2b52] via[#901f5e] to-[#3f61ca]" />

                  <div className="flex flex-col gap-4">
                    <span className="text-sm font-extrabold text-foreground opacity-80 uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <span className="text-5xl md:text-6xl font-bold text-primary">
                      {stat.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Glimpse Header */}
          <div className="mt-10 mb-16 flex flex-col md:flex-row items-center md:items-end justify-between gap-10">
            <div className="max-w-md 2xl:max-w-xl relative">
              <h1 className="text-3xl md:text-4xl lg:text-2xl 2xl:text-4xl font-medium font-poppins text-foreground">
                Here Is A Glimpse Of Some Of Our Interesting Work In Web And
                Mobile App Development.
              </h1>
              {/* Arrow SVG */}
              <div className="absolute -right-50 top-10 hidden lg:block">
                <Image
                  src="/images/curve_arrow.svg"
                  alt="arrow"
                  width={150}
                  height={150}
                  // className="rotate-[15deg]"
                />
              </div>
            </div>
            <Button className="h-14 px-8 text-lg font-medium flex items-center gap-3">
              VIEW ALL PROJECTS
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h15" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </div>
        </Container>

        {/* Horizontal Scrollable Gallery */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-10 pb-10 scrollbar-hide"
        >
          {showcaseProjects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full lg:w-[80%] bg-card-light dark:bg-card overflow-hidden flex flex-col lg:flex-row snap-center "
            >
              {/* Details side */}
              <div className="w-full lg:w-3/5 p-8 md:p-16 flex flex-col justify-between items-start gap-10">
                <div className="space-y-6">
                  <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight">
                    {project.title}
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-xl leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <Button className="text-md h-12 font-bold flex items-center gap-3">
                  {project.buttonLabel}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Button>
              </div>

              {/* Image side */}
              <div
                className={`w-full lg:w-2/5 min-h-[400px] bg-primary relative p-8 md:p-12 flex items-center justify-center`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* paggination button onClick scroll to next and prev project*/}
        <div className="flex justify-center">
          <Button variant="ghost" onClick={() => scroll("left")}>
            <ChevronLeft className="size-10" />
          </Button>
          <Button variant="ghost" onClick={() => scroll("right")}>
            <ChevronRight className="size-10" />
          </Button>
        </div>
      </section>

      <section className="py-20 bg-section-soft dark:bg-card/20">
        <Container>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-16 font-bold text-primary uppercase tracking-tight">
            WHY INNVONIX?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyInnvonixData.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-card border border-border rounded-lg overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-8 md:p-10 flex-grow">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={200}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-20 font-bold text-primary uppercase tracking-tight">
            ENGAGEMENT MODEL
          </h1>

          <div className="relative">
            {/* Vertical Separator for desktop */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              {engagementModels.map((model, index) => (
                <div key={index} className="flex flex-col gap-8 relative px-4">
                  {/* Decorative corner bracket */}
                  <div className="absolute -top-4 -right-4 size-6">
                    <Image
                      src="/images/corner.svg"
                      alt="corner"
                      width={20}
                      height={20}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                      {model.title}
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
                      {model.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    {model.features.map((feature, fIndex) => (
                      <div
                        key={fIndex}
                        className="bg-primary/5 dark:bg-primary/10 px-6 py-4 rounded-sm"
                      >
                        <span className="text-sm md:text-base font-bold text-foreground tracking-wide">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="py-20 relative overflow-hidden bg-white dark:bg-background">
        <Container>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-10 font-bold text-primary text-center uppercase tracking-tight relative z-10">
            INDUSTRIES WE SERVE
          </h1>

          <div className="relative h-[400px] md:h-[800px] w-full flex items-center justify-center">
            {/* Background Map */}
            <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
              <Image
                src="/images/bg_map.svg"
                alt="map"
                fill
                className="object-contain"
              />
            </div>

            {/* Concentric Rings */}
            <div className="absolute z-0 pointer-events-none w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
              <Image
                src="/images/rings.png"
                alt="rings"
                fill
                className="object-contain opacity-50"
              />
            </div>

            {/* Central Logo */}
            <div className="relative z-20 size-24 md:size-48">
              <Image
                src="/images/midde_logo.png"
                alt="logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Floating Industry Labels (Desktop) */}
            <div className="hidden md:block absolute inset-0 z-30">
              {industriesWeServe.map((industry, index) => (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-card border border-border px-4 py-3 flex items-center gap-3 whitespace-nowrap hover:shadow-md transition-shadow cursor-default"
                  style={{ top: industry.pos.top, left: industry.pos.left }}
                >
                  <div className="text-primary">
                    <industry.icon size={20} strokeWidth={2.5} />
                  </div>
                  <span className="text-sm font-bold text-foreground">
                    {industry.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Mobile View (Grid) */}
            <div className="md:hidden absolute -bottom-20 inset-x-0 grid grid-cols-2 gap-4 px-4">
              {industriesWeServe.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-card border border-border px-3 py-2 rounded-lg shadow-sm flex items-center gap-2"
                >
                  <div className="text-primary">
                    <industry.icon size={16} strokeWidth={2.5} />
                  </div>
                  <span className="text-xs font-bold text-foreground">
                    {industry.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
