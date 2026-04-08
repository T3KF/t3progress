'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  BarChart3, 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  ChevronRight,
  Languages,
  Menu,
  X,
  Code2,
  Settings
} from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { Agentation } from 'agentation';

// GSAP Registering
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const translations = {
  fr: {
    heroTitle: "L'excellence dans le développement d'applications",
    heroSub: "Nous transformons vos idées révolutionnaires en solutions numériques puissantes. Basés à Yaoundé, nous accompagnons votre croissance mondiale.",
    getStarted: "Démarrer un projet",
    services: "Nos Services",
    servicesSub: "Des solutions sur mesure pour des entreprises exigeantes",
    webSite: "Conception de sites Web",
    webSiteSub: "Sites vitrines et plateformes e-commerce performantes.",
    mobileApp: "Applications Mobiles",
    mobileAppSub: "Expériences natives et hybrides pour iOS et Android.",
    webDesign: "Web Design / UI-UX",
    webDesignSub: "Interfaces intuitives centrées sur l'utilisateur.",
    analysis: "Analyse et Conception",
    analysisSub: "Audit, stratégie digitale et architecture logicielle.",
    customSoft: "Logiciels sur Mesure",
    customSoftSub: "Solutions spécifiques pour automatiser vos processus métiers.",
    maintenance: "Maintenance et Support",
    maintenanceSub: "Accompagnement continu pour garantir la pérennité de vos outils.",
    contactUs: "Contactez-nous",
    contactSub: "Parlons de votre prochain grand projet",
    name: "Nom complet",
    email: "Email",
    message: "Message",
    send: "Envoyer le message",
    successMsg: "Message envoyé avec succès !",
    footerInfo: "T3PROGRESS - Yaoundé, Cameroun",
    rights: "Tous droits réservés.",
  },
  en: {
    heroTitle: "Excellence in Application Development",
    heroSub: "We transform your revolutionary ideas into powerful digital solutions. Based in Yaoundé, we support your global growth.",
    getStarted: "Start a Project",
    services: "Our Services",
    servicesSub: "Tailored solutions for demanding businesses",
    webSite: "Website Design",
    webSiteSub: "Performance-driven showcase sites and e-commerce platforms.",
    mobileApp: "Mobile Applications",
    mobileAppSub: "Native and hybrid experiences for iOS and Android.",
    webDesign: "Web Design / UI-UX",
    webDesignSub: "Intuitive user-centered interfaces.",
    analysis: "Analysis and Design",
    analysisSub: "Audit, digital strategy, and software architecture.",
    customSoft: "Custom Software",
    customSoftSub: "Specific solutions to automate your business processes.",
    maintenance: "Maintenance and Support",
    maintenanceSub: "Ongoing support to ensure the longevity of your tools.",
    contactUs: "Contact Us",
    contactSub: "Let's talk about your next big project",
    name: "Full Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    successMsg: "Message sent successfully!",
    footerInfo: "T3PROGRESS - Yaoundé, Cameroon",
    rights: "All rights reserved.",
  }
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function T3ProgressPage() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    // GSAP Scroll Animations for contact only
    const ctx = gsap.context(() => {
      gsap.from(".contact-info", {
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });

    return () => ctx.revert();
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'fr' ? 'en' : 'fr');
    toast.success(lang === 'fr' ? 'Language switched to English' : 'Langue changée en Français', {
      icon: '🌐',
      style: {
        borderRadius: '10px',
        background: '#1e293b',
        color: '#fff',
      },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Construct mailto link
    const subject = encodeURIComponent(`Nouveau message de ${name} via T3PROGRESS`);
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:choteurlove@gmail.com?subject=${subject}&body=${body}`;

    toast.success(t.successMsg, {
      duration: 5000,
      position: 'bottom-right',
      style: {
        background: '#0f172a',
        color: '#38bdf8',
        border: '1px solid #1e293b'
      }
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
      <Toaster />
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="relative w-10 h-10">
                <Image 
                  src="/logo.png" 
                  alt="T3PROGRESS Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400">
                T3PROGRESS
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium hover:text-cyan-400 transition-colors">{t.services}</a>
              <a href="#contact" className="text-sm font-medium hover:text-cyan-400 transition-colors uppercase tracking-wider">{t.contactUs}</a>
              <button 
                onClick={toggleLang}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-500/50 transition-all text-sm"
              >
                <Languages className="w-4 h-4" />
                {lang.toUpperCase()}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <a onClick={() => setIsMenuOpen(false)} href="#services" className="block text-lg">{t.services}</a>
                <a onClick={() => setIsMenuOpen(false)} href="#contact" className="block text-lg">{t.contactUs}</a>
                <button 
                  onClick={() => { toggleLang(); setIsMenuOpen(false); }}
                  className="flex items-center gap-2 w-full text-lg"
                >
                  <Languages /> {lang === 'fr' ? 'English' : 'Français'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-400/10 border border-cyan-400/20 rounded-full">
              Full-Stack Digital Agency
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              {t.heroTitle}
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
              {t.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 group"
              >
                {t.getStarted}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 transition-all"
              >
                {t.services}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900/50 services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services}</h2>
            <p className="text-slate-400 max-w-xl mx-auto">{t.servicesSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              index={0}
              icon={<Globe className="w-8 h-8 text-cyan-400" />}
              title={t.webSite}
              desc={t.webSiteSub}
            />
            <ServiceCard 
              index={1}
              icon={<Smartphone className="w-8 h-8 text-cyan-400" />}
              title={t.mobileApp}
              desc={t.mobileAppSub}
            />
            <ServiceCard 
              index={2}
              icon={<Palette className="w-8 h-8 text-cyan-400" />}
              title={t.webDesign}
              desc={t.webDesignSub}
            />
            <ServiceCard 
              index={3}
              icon={<BarChart3 className="w-8 h-8 text-cyan-400" />}
              title={t.analysis}
              desc={t.analysisSub}
            />
            <ServiceCard 
              index={4}
              icon={<Code2 className="w-8 h-8 text-cyan-400" />}
              title={t.customSoft}
              desc={t.customSoftSub}
            />
            <ServiceCard 
              index={5}
              icon={<Settings className="w-8 h-8 text-cyan-400" />}
              title={t.maintenance}
              desc={t.maintenanceSub}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="contact-info">
              <h2 className="text-4xl font-bold mb-6">{t.contactUs}</h2>
              <p className="text-slate-400 text-lg mb-10">
                {t.contactSub}
              </p>
              
              <div className="space-y-6">
                <ContactInfoItem 
                  icon={<MapPin className="text-cyan-400" />}
                  label="Yaoundé, Cameroun"
                  sub="Siège social"
                />
                <ContactInfoItem 
                  icon={<Phone className="text-cyan-400" />}
                  label="689 020 454"
                  sub="Téléphone direct"
                  href="tel:+237689020454"
                />
                <ContactInfoItem 
                  icon={<WhatsAppIcon className="w-6 h-6 text-[#25D366]" />}
                  label="622 142 607"
                  sub="WhatsApp"
                  href="https://wa.me/237622142607"
                />
                <ContactInfoItem 
                  icon={<Mail className="text-cyan-400" />}
                  label="choteurlove@gmail.com"
                  sub="Support technique"
                  href="mailto:choteurlove@gmail.com"
                />
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">{t.name}</label>
                  <input 
                    required
                    name="name"
                    type="text" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">{t.email}</label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">{t.message}</label>
                  <textarea 
                    required
                    name="message"
                    rows={4}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all outline-none"
                    placeholder="Your project vision..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20"
                >
                  {t.send}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <Image src="/logo.png" alt="Logo" fill className="object-contain" />
              </div>
              <span className="font-bold tracking-tighter text-lg">T3PROGRESS</span>
            </div>
            <div className="text-slate-500 text-sm text-center">
              <p>{t.footerInfo} | {t.rights} © {new Date().getFullYear()}</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">Twitter</a>
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">LinkedIn</a>
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">Github</a>
            </div>
          </div>
        </div>
      </footer>
      <Agentation />
    </div>
  );
}

function ServiceCard({ icon, title, desc, index }: { icon: React.ReactNode, title: string, desc: string, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-cyan-500/30 transition-all group shadow-xl"
    >
      <div className="mb-6 p-3 w-fit bg-slate-950 rounded-2xl border border-slate-800 group-hover:bg-cyan-500/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">
        {desc}
      </p>
    </motion.div>
  );
}

function ContactInfoItem({ icon, label, sub, href }: { icon: React.ReactNode, label: string, sub: string, href?: string }) {
  const content = (
    <>
      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 group-hover:bg-cyan-500/10 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-lg leading-snug group-hover:text-cyan-400 transition-colors">{label}</h4>
        <p className="text-slate-500 text-sm">{sub}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-start gap-4 group cursor-pointer" target={href.startsWith('http') ? "_blank" : undefined} rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-start gap-4">
      {content}
    </div>
  );
}
