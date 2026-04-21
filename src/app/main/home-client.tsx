"use client";

import { Fragment, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import FloatingSkills from "@/components/floating-skills";
import Image from "next/image";

const stats = [
  { value: "300+", label: "PROJECTS" },
  { value: "800+", label: "CLIENTS" },
  { value: "100+", label: "EXPERTS" },
  { value: "250+", label: "HOURS" },
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
  return (
    <>
      <section className="relative w-full  overflow-hidden">
        <div className="bg-[url('/images/hero_bg.svg')] dark:bg-[url('/images/hero_bg_dark.svg')] dark:bg-right bg-left bg-cover bg-no-repeat h-full py-20">
          <div className="relative z-10 flex flex-col items-center  text-center max-w-6xl mx-auto space-y-2  ">
            <FloatingSkills />
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

      <section className="my-10">
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

      <section className="my-10">
        <Container>
          <h1 className="text-3xl md:text-4xl lg:text-5xl min-[1440px]:text-[52px] min-[1920px]:text-[64px] text-primary">
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
                        className={`size-10 rounded-full border flex items-center justify-center text-sm min-[1440px]:text-[15px] min-[1920px]:text-[16px] font-medium transition-colors ${
                          selectedService === index
                            ? "border-white text-white"
                            : "text-black bg-white group-hover:text-white group-hover:bg-primary"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span className="text-base md:text-lg min-[1440px]:text-[18px] min-[1920px]:text-[20px] font-medium uppercase tracking-wide">
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
            <div className="w-[60%] relative flex flex-col justify-between bg-foreground dark:bg-primary p-8 text-white  bg-[url('/images/services_bg.png')] bg-bottom-right bg-no-repeat overflow-hidden">
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
              <div className="relative z-10 mt-20">
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
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
