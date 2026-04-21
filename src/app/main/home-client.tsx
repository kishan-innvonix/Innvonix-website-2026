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

            <p className="text-lg md:text-xl 2xl:text-[32px] z-10 text-foreground font-medium font-manrope max-w-xl leading-relaxed lg:mb-8 mb-4">
              Your Go-To-Partner for Website And Mobile App Development
              Projects!
            </p>
            <p className="text-sm md:text-base 2xl:text-[20px] z-10 text-foreground font-medium font-manrope max-w-xl leading-relaxed">
              We are bringing ideas to life. Our expert web and mobile team can
              develop impeccable solutions. We build e-commerce portals, custom
              web and mobile applications with robust user-experience matching
              your deadlines.
            </p>
            <div className="flex z-10 flex-col sm:flex-row items-center lg:gap-5 gap-3 lg:pt-8 pt-4 font-poppins">
              <Button
                size="lg"
                className="h-14 px-8 text-sm md:text-base  font-semibold"
              >
                GET A QUOTE
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="h-14 px-8 text-sm md:text-base font-semibold bg-black backdrop-blur-md text-background transition-colors"
              >
                OUR SOLUTION
              </Button>
            </div>
          </div>
        </div>{" "}
      </section>
      <div className="flex flex-wrap md:flex-nowrap items-center text-4xl justify-center md:justify-evenly w-full font-poppins font-semibold py-10 border-y border-primary gap-y-10 md:gap-y-0 px-6 md:px-0">
        {stats.map((stat, index) => (
          <Fragment key={index}>
            <div className="text-primary text-center w-1/2 md:w-auto">
              {stat.value} <br />{" "}
              <span className="text-foreground text-sm md:text-lg font-medium">
                {stat.label}
              </span>
            </div>
            {index < stats.length - 1 && (
              <div className="hidden md:block h-16 w-px bg-divider" />
            )}
          </Fragment>
        ))}
      </div>

      <section className="my-10">
        <Container className="flex  flex-col gap-5 max-sm:items-center">
          <h1 className="font-poppins text-4xl lg:text-7xl 2xl:text-[80px] font-medium flex flex-col sm:flex-row justify-start items-center lg:gap-10 gap-5 ">
            <span> WE INNOVATE </span>
            <Image
              src="/images/star.png"
              alt="star"
              width={32}
              height={32}
            />{" "}
            <span> WE LISTEN</span>
          </h1>

          <Image
            className="sm:hidden"
            src="/images/star.png"
            alt="star"
            width={32}
            height={32}
          />
          <h1 className="font-poppins text-4xl lg:text-7xl 2xl:text-[80px] font-medium flex flex-col sm:flex-row justify-end items-center lg:gap-10 gap-5">
            <span>WE CARE</span>{" "}
            <Image src="/images/star.png" alt="star" width={32} height={32} />{" "}
            <span>WE DELIVER</span>
          </h1>
        </Container>
      </section>

      <section className="flex md:flex-row flex-col md:gap-20 gap-10 bg-primary text-white">
        {/* left Image */}
        <div className="md:w-[30%] w-fit">
          <Image src="/images/we.png" alt="about" width={500} height={500} />
        </div>
        {/* right about */}
        <div className="flex flex-col gap-5 justify-center md:w-1/2 w-full px-5 pb-5 md:px-0 md:pb-0" >
          <h1 className="font-poppins text-3xl md:text-4xl lg:text-6xl font-medium md:mb-10 mb-0">
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
          <div className="space-y-2 mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
              OUR PROCESS
            </h1>
            <h3 className="text-xl md:text-2xl font-bold font-manrope">
              <span className="text-primary italic">Design. Build. Excel.</span> Taking
              your business to the next level!
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:h-110">
            {[
              {
                title: "Discovery",
                desc: "We deep dive into your business goals and user needs to build a solid foundation for your project."
              },
              {
                title: "Strategy",
                desc: "Our tech experts craft a detailed roadmap and choose the best architecture to ensure long-term success."
              },
              {
                title: "Design",
                desc: "We create intuitive and stunning UI/UX designs that provide a seamless experience for your users."
              },
              {
                title: "Build",
                desc: "Using agile methodology, our team writes clean, robust code to bring your vision to life on time."
              }
            ].map((step, index) => (
              <div
                key={index}
                className={`flex flex-col gap-8 p-8 border justify-between border-card-border dark:bg-card-bg bg-background hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group ${index % 2 === 1 ? "md:mt-10" : ""
                  } h-full max-w-[450px] mx-auto lg:max-w-none w-full rounded-2xl`}
              >
                <div className="shrink-0 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={`/images/${step.title}.svg`}
                    alt="process"
                    width={64}
                    height={64}
                    className="dark:block hidden"
                  />
                  <Image
                    src={`/images/${step.title}_dark.svg`}
                    alt="process"
                    width={64}
                    height={64}
                    className="block dark:hidden"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="font-poppins text-2xl lg:text-3xl font-bold uppercase tracking-wide group-hover:text-primary transition-colors">
                    {step.title}
                  </h1>
                  <p className="text-muted-foreground leading-relaxed font-manrope text-base">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="my-10 mt-20">
        <Container>
          <h1 className="text-3xl md:text-4xl lg:text-5xl min-[1440px]:text-[52px] min-[1920px]:text-[64px] text-primary">
            OUR SERVICES
          </h1>
          {/* Left side the list of services lik frontend backend etc and on right side the detail about it, in right side on top description and on bottom list of skills like html, css, js etc and on toggle to left side it change right side content accordingly */}
          <div className="flex flex-col lg:flex-row w-full mt-10 min-h-fit lg:min-h-[600px] 2xl:h-[800px] border lg:border-0 border-card-border overflow-hidden rounded-3xl">
            {/* Left side list / Accordion on mobile */}
            <div className="w-full lg:w-[40%] bg-background lg:my-8 lg:border-r border-card-border overflow-y-auto">
              <ul className="flex flex-col h-full">
                {services.map((service, index) => (
                  <Fragment key={index}>
                    <li
                      className={`group cursor-pointer flex items-center gap-6 px-6 lg:px-10 py-5 lg:py-4 transition-all duration-300 relative border-b lg:border-b-0 ${selectedService === index
                        ? "bg-primary text-white border-primary"
                        : "hover:bg-primary/5 text-foreground border-card-border"
                        }`}
                      onClick={() => setSelectedService(index === selectedService && window.innerWidth < 1024 ? -1 : index)}
                    >
                      <div
                        className={`size-8 lg:size-10 rounded-full border flex items-center justify-center text-xs lg:text-sm font-medium transition-colors ${selectedService === index
                          ? "border-white text-white"
                          : "text-black bg-white group-hover:text-white group-hover:bg-primary"
                          }`}
                      >
                        {index + 1}
                      </div>
                      <span className="text-sm md:text-lg lg:text-lg font-bold uppercase tracking-wide flex-1">
                        {service.title}
                      </span>
                      {/* Accordion Icon for Mobile */}
                      <div className={`lg:hidden transition-transform duration-300 ${selectedService === index ? "rotate-180" : ""}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </li>

                    {/* Mobile Detail (Accordion Content) */}
                    {selectedService === index && (
                      <div className="lg:hidden w-full bg-foreground dark:bg-primary p-6 text-white overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="flex gap-4">
                          <div className="w-1 bg-white shrink-0" />
                          <div className="space-y-4">
                            <h1 className="text-xl font-bold uppercase tracking-tight">
                              {service.title}
                            </h1>
                            <p className="text-sm leading-relaxed opacity-90">
                              {service.description}
                            </p>
                          </div>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-2">
                          {service.skills.map((skill, sIndex) => (
                            <div
                              key={sIndex}
                              className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 flex items-center gap-2"
                            >
                              <span className="text-white font-bold text-[10px] uppercase tracking-wider">
                                {skill.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </Fragment>
                ))}
              </ul>
            </div>

            {/* Right side detail (Visible only on Desktop) */}
            <div className="hidden lg:flex w-[60%] relative flex-col justify-between bg-foreground dark:bg-primary lg:p-16 text-white bg-[url('/images/services_bg.png')] bg-bottom-right bg-no-repeat overflow-hidden">
              <div className="relative z-10 flex gap-8">
                <div className="w-1 bg-white shrink-0" />
                <div className="space-y-10">
                  <h1 className="text-4xl min-[1440px]:text-[40px] min-[1920px]:text-[48px] font-bold leading-tight uppercase tracking-tight">
                    {services[selectedService]?.title}
                  </h1>
                  <p className="text-lg min-[1440px]:text-[18px] min-[1920px]:text-[20px] leading-relaxed font-manrope opacity-90 font-medium">
                    {services[selectedService]?.description}
                  </p>
                </div>
              </div>

              {/* Skills Footer */}
              <div className="relative z-10 mt-20">
                <div className="flex flex-wrap gap-4">
                  {services[selectedService]?.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 flex items-center gap-3 transition-colors hover:bg-white/20"
                    >
                      <span className="text-white font-bold text-base uppercase tracking-wider">
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
