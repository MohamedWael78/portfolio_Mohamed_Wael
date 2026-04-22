import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useLanguage, usePortfolioData } from "@/context/LanguageContext";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const portfolioData = usePortfolioData();
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Github, href: portfolioData.personal.github, label: "GitHub" },
    { icon: Linkedin, href: portfolioData.personal.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${portfolioData.personal.email}`, label: "Email" },
  ];

  const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              MW<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} {portfolioData.personal.name}. {t('all_rights') || 'All rights reserved.'}
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
