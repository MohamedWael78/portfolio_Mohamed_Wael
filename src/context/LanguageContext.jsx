import { createContext, useContext, useEffect, useState } from "react";
import { portfolioDataEN, portfolioDataAR } from "../data";

const LanguageContext = createContext();

const translations = {
  en: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    certifications: "Certifications",
    contact_me: "Contact Me",
    download_resume: "Resume",
    let_collaborate: "Let's Collaborate",
    network: "Network:",
    hero_hi: "Hi, I'm",
    hero_desc: "Engineering intelligence from data. Bridging the gap between agricultural systems and cutting-edge AI analytics.",
    hero_intro: "Engineering ",
    hero_intelligence: "intelligence",
    hero_from_data: " from data. Bridging the gap between ",
    hero_agri: "agricultural systems",
    hero_and: " and cutting-edge ",
    hero_ai_analytics: "AI analytics.",
    hero_open: "Open for Innovation",
    hero_months: "Months AI Specialization",
    integrated_tech: "Integrated Tech Stack",
    discover: "Discover",
    biography: "Biography",
    about_title: "Bridging Two Worlds.",
    download_cv: "Download CV",
    contact_title: "Start a Conversation.",
    contact_desc: "Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    name: "Name",
    email: "Email",
    message: "Message",
    send_message: "Send Message",
    sending: "Sending...",
    capabilities: "Capabilities",
    technical_arsenal: "Technical Arsenal.",
    portfolio: "Portfolio",
    featured_cases: "Featured ",
    featured_studies: "Case Studies.",
    case_study: "Case Study",
    explore_more: "Explore More Repositories",
    career: "Career",
    professional_journey: "Professional ",
    professional_journey_bold: "Journey.",
    academic: "Academic",
    educational_foundations: "Educational ",
    educational_foundations_bold: "Foundations.",
    credentials: "Credentials",
    professional_validations: "Professional ",
    professional_validations_bold: "Validations.",
    issued_by: "Issued by",
    view_cert: "View Certificate",
    mastering_ai: "Mastering Applied AI & Data Analysis",
    nine_month: "9-Month intensive program completed at the Digital Pioneers Initiative.",
  },
  ar: {
    about: "نبذة عني",
    skills: "المهارات",
    projects: "المشاريع",
    experience: "الخبرات",
    education: "التعليم",
    certifications: "الشهادات",
    contact_me: "تواصل معي",
    download_resume: "السيرة الذاتية",
    let_collaborate: "لنتعاون معاً",
    network: "الشبكات:",
    hero_hi: "مرحباً، أنا",
    hero_intro: "هندسة ",
    hero_intelligence: "الذكاء",
    hero_from_data: " من البيانات. سد الفجوة بين ",
    hero_agri: "النظم الزراعية",
    hero_and: " والتقنيات المتطورة لـ ",
    hero_ai_analytics: "تحليلات الذكاء الاصطناعي.",
    hero_open: "متاح للابتكار",
    hero_months: "شهور من التخصص في الذكاء الاصطناعي",
    integrated_tech: "حزمة التقنيات المتكاملة",
    discover: "اكتشف",
    biography: "السيرة الذاتية",
    about_title: "الربط بين عالمين.",
    download_cv: "تحميل السيرة الذاتية",
    contact_title: "ابدأ محادثة.",
    contact_desc: "متاح حالياً لفرص جديدة. سواء كان لديك سؤال أو تريد فقط إلقاء التحية، سأبذل قصارى جهدي للرد عليك!",
    name: "الاسم",
    email: "البريد الإلكتروني",
    message: "الرسالة",
    send_message: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    capabilities: "القدرات",
    technical_arsenal: "الترسانة ",
    technical_arsenal_bold: "التقنية.",
    portfolio: "معرض الأعمال",
    featured_cases: "أبرز ",
    featured_studies: "دراسات الحالة.",
    case_study: "دراسة حالة",
    explore_more: "استكشف المزيد من المستودعات",
    career: "المسيرة المهنية",
    professional_journey: "رحلتي ",
    professional_journey_bold: "المهنية.",
    academic: "أكاديمي",
    educational_foundations: "الأسس ",
    educational_foundations_bold: "التعليمية.",
    credentials: "الوثائق المعتمدة",
    professional_validations: "الاعتمادات ",
    professional_validations_bold: "المهنية.",
    issued_by: "صُدرت من",
    view_cert: "عرض الشهادة",
    mastering_ai: "احتراف الذكاء الاصطناعي التطبيقي وتحليل البيانات",
    nine_month: "برنامج مكثف لمدة 9 أشهر من مبادرة رواد مصر الرقمية.",
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const documentBody = window.document.body;
    documentBody.dir = language === "ar" ? "rtl" : "ltr";
    if (language === "ar") {
      documentBody.classList.add("font-arabic"); 
    } else {
      documentBody.classList.remove("font-arabic");
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const currentData = language === 'ar' ? portfolioDataAR : portfolioDataEN;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, portfolioData: currentData }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
export const usePortfolioData = () => {
  const { portfolioData } = useContext(LanguageContext);
  return portfolioData;
};
