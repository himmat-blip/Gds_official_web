import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Consulting & Services | GDSoftwares",
  description: "GDSoftwares is a Game Development, BlockChain Development, Web Design & Development, Mobile App Development, Hybrid App Development, Manual & Automation QA, Support & Maintenance, PHP Development."
};

export default function Services() {
  const servicesList = [
    {
      title: "Flutter App Development",
      description: "If you're looking for a reliable and experienced team of developers for your flutter app development project, there are several reasons why you should choose our services.",
      link: "/flutter-development"
    },
    {
      title: "Mobile app development native app ios and android",
      description: "At GDSoftwares, one of the Best Mobile App Development company In USA, we focus on creating high-quality apps that are designed to be scalable from the beginning utilizing the most cutting-edge technology and industry standards. GDSoftwares will inspire your imagination.",
      link: "/mobile-app-development"
    },
    {
      title: "ReactJS Development",
      description: "A JavaScript library that help in building user interfaces is known as React JS . React JS is a JavaScript framework that is open-source and free to use for creating component-based user interfaces. Meta updates it together with a number of other independent developers and businesses.",
      link: "/react-js-development"
    },
    {
      title: "React Native APP Development",
      description: "Businesses all over the world are fast adopting React Native, one of the most well-liked programming languages, to develop enticing and feature-rich cross-platform solutions. If you want to create apps that will change the market for both Android and iOS, React Native Programming is the way to go.",
      link: "/react-native-app-development"
    },
    {
      title: "IOS App Development",
      description: "IOS apps made for iPhone and iPad may rebuild and help you to grow your business. Our skilled iOS app developers will assist you every step of the way, from solution creation to delivery and ongoing maintenance, whether you're seeking iPhone app development services or want to create an application that functions flawlessly on all Apple devices.",
      link: "/ios-app-development"
    },
    {
      title: "Angular.JS Development",
      description: "AngularJS is a framework used for creating web applications. Google created and maintains AngularJS. You can use HTML as your template language and represent the various components of your application in a clear manner by expanding HTML's syntax. Significantly less code will be generated when data binding and dependency injection are used with AngularJS. Due to the fact that everything occurs inside the browser, it is compatible with all server technologies.",
      link: "/angular-js-development"
    },
    {
      title: "QA Automation/Selenium",
      description: "Selenium is an open-source automated testing tool that is free and useful for assessing web applications on many operating systems and browsers.",
      link: "/qa-automation"
    },
    {
      title: "Artificial Intelligence Solution Providers",
      description: "Transform your business with ultra-intelligent solutions that deliver high quality and absolute accuracy.",
      link: "/artificial-intelligence-solution-providers"
    },
    {
      title: "Machine Learning Services",
      description: "GDsoftware is one of the leading providers of machine learning software. Our team of skilled engineers and professionals has superior machine learning and artificial intelligence skills, which enable us to deliver accurate and reliable outcomes.",
      link: "/machine-learning-services"
    },
    {
      title: "ServiceNow Services",
      description: "ServiceNow is a vital enterprise platform that unifies and digitizes core business processes and operational workflows. It enables you to break down departmental silos, automate and optimize work, and deliver seamless service experiences.",
      link: "/servicenow-services"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      
      {/* Top Banner Section */}
      <section className="relative h-64 md:h-80 flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden text-center px-4">
        <div className="absolute inset-0 z-0">
           {/* Replace with actual background image if available */}
           <div className="absolute inset-0 bg-blue-900/80 z-10" />
           <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/bg-client.jpg)' }} />
        </div>
        <div className="relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We are an outsource software development company in India. GD Softwares has the expertise in developing <br className="hidden md:block" />custom software applications to meet customers' needs.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="pt-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group transform hover:-translate-y-2"
              >
                <div className="flex-grow">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-500 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-50 mt-auto">
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-amber-500 font-semibold hover:text-amber-600 transition-colors"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
