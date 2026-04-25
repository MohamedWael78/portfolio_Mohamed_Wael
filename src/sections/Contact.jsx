import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageSquare,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/Button";
import { useLanguage, usePortfolioData } from "@/context/LanguageContext";

export const Contact = () => {
  const { t, language } = useLanguage();
  const portfolioData = usePortfolioData();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formState);
      
      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
    },
    {
      icon: Phone,
      label: "Phone / Call",
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone}`,
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: portfolioData.personal.whatsapp,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "mohamed-wael-mohamed",
      href: portfolioData.personal.linkedin,
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(var(--primary-rgb),0.03)_0%,transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left Column - Contact Info */}
            <div className="space-y-12">
              <div className="animate-fade-in">
                <span className="text-primary text-sm font-bold tracking-widest uppercase px-4 py-2 rounded-full glass border border-primary/20">
                  Contact
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 text-foreground">
                  {t('contact_title')}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  {t('contact_desc')}
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-6 glass rounded-2xl border border-primary/10 hover:border-primary/40 transition-all duration-500 group animate-fade-in"
                    style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">
                        {info.label}
                      </p>
                      <p className="text-lg font-bold text-foreground">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="p-8 glass rounded-2xl border border-primary/10 animate-fade-in animation-delay-500">
                <div className="flex items-center gap-4 text-muted-foreground italic">
                  <MessageSquare className="text-primary" />
                  <span>Typically responds within 24 hours.</span>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="glass p-8 md:p-12 rounded-3xl glow-border animate-fade-in animation-delay-300 relative">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Send size={120} className="text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-8 relative z-10">{t('send_message')}</h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground tracking-wide uppercase">
                      {t('name')}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-surface/50 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground tracking-wide uppercase">
                      {t('email')}
                    </label>
                    <input
                      type="email"
                      className="w-full bg-surface/50 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Email Address"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted-foreground tracking-wide uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full bg-surface/50 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Subject of message"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted-foreground tracking-wide uppercase">
                    {t('message')}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-surface/50 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="Your message here..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2" disabled={isLoading}>
                  {isLoading ? t('sending') : t('send_message')} <Send className="w-5 h-5" />
                </Button>

                {submitStatus.type && (
                  <div
                    className={`flex items-center gap-3 p-4 rounded-xl animate-fade-in ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{submitStatus.message}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
