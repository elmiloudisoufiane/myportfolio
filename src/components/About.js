import React, { useEffect, useRef, useState } from 'react';

const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.once !== false) {
          observer.unobserve(entry.target);
        }
      } else if (options.once === false) {
        setIsInView(false);
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px'
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView];
};

const AnimatedSection = ({ children, animation = 'fade', delay = 0 }) => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const baseClasses = "transition-all duration-1000 ease-out";
  
  const animationClasses = {
    fade: `${baseClasses} ${isInView ? 'opacity-100' : 'opacity-0'}`,
    slideUp: `${baseClasses} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`,
    slideDown: `${baseClasses} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'}`,
    slideLeft: `${baseClasses} ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`,
    slideRight: `${baseClasses} ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`,
    zoom: `${baseClasses} ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`,
    rotate: `${baseClasses} ${isInView ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-12 scale-75'}`
  };

  const delayClass = delay > 0 ? `delay-${Math.round(delay * 100)}` : '';

  return (
    <div ref={ref} className={`${animationClasses[animation]} ${delayClass}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
};

function About() {
  const skills = [
    { name: "React", level: 75 },
    { name: "JavaScript", level: 50 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "UI/UX Design", level: 85 }
  ];

  const experience = [
    {
      year: "2025 - Present",
      title: "Senior Developer",
      company: "",
      description: "Leading development of cutting-edge web applications"
    },
    {
      year: "2024 - 2025",
      title: "Full Stack Developer",
      company: "",
      description: "Built scalable applications using modern technologies"
    },
    {
      year: "2023 - 2024",
      title: "Junior Developer",
      company: "",
      description: "Developed responsive websites and web applications"
    }
  ];

  return (
    <div id='About' className="min-h-screen py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <AnimatedSection animation="fade">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-gray-300">Get to know me better</p>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection animation="slideRight" delay={0.2}>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">My Skills</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <AnimatedSection key={index} animation="slideUp" delay={0.3 + index * 0.1}>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-semibold">{skill.name}</span>
                        <span className="text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Experience Timeline */}
        <AnimatedSection animation="slideLeft" delay={0.4}>
          <div id='Services' className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <AnimatedSection key={index} animation="slideUp" delay={0.5 + index * 0.15}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-purple-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-gray-400 mt-2 md:mt-0">{exp.year}</span>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mt-12">
          <AnimatedSection animation="zoom" delay={0.6}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                2+
              </div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="zoom" delay={0.75}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-gray-300">Projects Done</div>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </div>
  );
}

export default About;