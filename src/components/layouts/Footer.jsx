import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";
import { Linkedin } from "lucide-react";
import elvenLogoFooter from "../../assets/elven-logo-footer.svg";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: <Linkedin className="w-auto h-auto" />,
      href: "https://www.linkedin.com/company/elvenworks/",
      target: "_blank",
    },
    {
      icon: <Youtube className="w-auto h-auto" />,
      href: "https://www.youtube.com/c/Elvenworks",
    },
    {
      icon: <Instagram className="w-auto h-auto" />,
      href: "https://www.instagram.com/elven.works/",
    },
    {
      icon: <Facebook className="w-auto h-auto" />,
      href: "https://www.facebook.com/elvenworks/",
    },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {/* Logo da Elven correta para o footer */}
            <div className="flex items-center">
              <img src={elvenLogoFooter} alt="Elven" className="h-12 w-auto" />
            </div>
            <p className="text-purple-100 max-w-md">
              {t("footerSection.description")}
            </p>
          </div>

          <div className="flex justify-end space-x-4">
            <div className=" space-y-4">
              <p className="text-purple-200 font-bold text-2xl">
                {t("footerSection.socialMedia")}
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-purple-200 font-light text-base font-button">
            {t("footerSection.allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
