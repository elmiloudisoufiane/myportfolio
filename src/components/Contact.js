import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

// Hook لتتبع ظهور العنصر في الشاشة
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
      }
    }, {
      threshold: options.threshold || 0.1,
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

// كومبوننت الأنيميشن
const AnimatedSection = ({ children, animation = 'fade', delay = 0 }) => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const baseClasses = "transition-all duration-1000 ease-out";
  
  const animationClasses = {
    fade: `${baseClasses} ${isInView ? 'opacity-100' : 'opacity-0'}`,
    slideUp: `${baseClasses} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`,
    slideLeft: `${baseClasses} ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`,
    slideRight: `${baseClasses} ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`,
    zoom: `${baseClasses} ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`,
  };

  return (
    <div ref={ref} className={animationClasses[animation]} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });


  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "elmiloudisofyan@gmail.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+212720427801",
      link: "tel:+1234567890"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Marrakesh, Morocco",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, label: "GitHub", link: "#" },
    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", link: "#" },
    { icon: <Twitter className="w-6 h-6" />, label: "Twitter", link: "#" }
  ];

  return (
    <div id='Contact' className="min-h-screen py-20 px-4 to-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <AnimatedSection animation="fade">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300">Let's work together on your next project</p>
          </div>
        </AnimatedSection>

        <div>
          
          {/* Contact Info Section */}
          <div className="space-y-8">
            
            <AnimatedSection animation="slideRight" delay={0.2}>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-gray-300 mb-8">
                  Feel free to reach out to me through any of these channels. I'm always open to discussing new projects and opportunities.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <AnimatedSection key={index} animation="slideUp" delay={0.3 + index * 0.1}>
                      <a 
                        href={info.link}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">{info.title}</p>
                          <p className="text-white font-semibold">{info.value}</p>
                        </div>
                      </a>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="zoom" delay={0.7}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to start your project?
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                Let's create something amazing together!
              </p>
              <a href='#Form' className='inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer'>Let's Talk</a>
            </div>
          </div>
        </AnimatedSection>

      </div>
      </div>
    </div>
  );
}

export default Contact;