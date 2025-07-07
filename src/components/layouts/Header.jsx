import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import elvenLogo from "../../assets/elven-logo.svg";
import Button from "../common/Button";
import Global from "../icons/Global";

export default function Header() {
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();

  const [isDoraDropdownOpen, setIsDoraDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const handleChangeLanguage = (lang) => {
    const newLanguage = lang === "english" ? "en" : "pt";
    changeLanguage(newLanguage);
  };

  return (
    <header className="bg-primary-light txt-primary h-[72px] border-b border-gray-200 sticky top-0 z-50 txt-primary">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo da Elven */}
          <a href="#home" className="flex items-center">
            <img
              src={elvenLogo}
              alt="Elven DORA Metrics"
              className="h-10 w-auto"
            />
          </a>

          {/* Menu de navegação */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Dropdown Sobre DORA Metrics */}
            <div className="relative">
              <button
                className="cursor-pointer flex items-center space-x-1 txt-primary hover:text-gray-900 transition-colors text-sm font-medium"
                onClick={() => setIsDoraDropdownOpen(!isDoraDropdownOpen)}
                onBlur={() =>
                  setTimeout(() => setIsDoraDropdownOpen(false), 150)
                }
              >
                <span className="font-button font-semibold leading-[1.2] text-base txt-primary">
                  {t("headerSection.menu.about")}
                </span>

                {isDoraDropdownOpen ? (
                  <ChevronUp className="w-6 h-6 txt-primary" />
                ) : (
                  <ChevronDown className="w-6 h-6 txt-primary" />
                )}
              </button>

              <div
                className={`absolute transition-all ease-in-out ${
                  isDoraDropdownOpen ? "max-h-[500px] py-2" : "max-h-0 py-0"
                }  overflow-hidden top-full -left-10 mt-1 w-lg bg-primary-light rounded-sm z-50`}
              >
                <a
                  href="#metrics"
                  className="block px-6 py-2 text-base font-button txt-primary hover:bg-gray-200"
                >
                  {t("headerSection.menu.dropDown.whatIsDora")}
                </a>
                <a
                  href="#benefits"
                  className="block px-6 py-2 text-base font-button txt-primary hover:bg-gray-200"
                >
                  {t("headerSection.menu.dropDown.whyToUse")}
                </a>
                <a
                  href="#results"
                  className="block px-6 py-2 text-base font-button txt-primary hover:bg-gray-200"
                >
                  {t("headerSection.menu.dropDown.resultsExpected")}
                </a>
              </div>
            </div>

            <a
              href="#price"
              className="font-button leading-[1.2] txt-primary hover:text-gray-900 transition-colors font-semibold"
            >
              {t("headerSection.menu.price")}
            </a>

            <a
              href="#faq"
              className="font-button leading-[1.2] txt-primary hover:text-gray-900 transition-colors font-semibold"
            >
              {t("headerSection.menu.faq")}
            </a>
          </nav>

          <div className="md:flex items-center space-x-4 relative ">
            <button
              className="relative hidden md:flex w-max cursor-pointer items-center space-x-1 text-color-primary hover:text-gray-900 transition-colors text-sm font-medium"
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              onBlur={() => setTimeout(() => setIsLangDropdownOpen(false), 150)}
            >
              <span className="font-button font-semibold leading-[1.2] text-base text-color-primary">
                <Global />
              </span>

              {isLangDropdownOpen ? (
                <ChevronUp className="w-6 h-6 text-color-primary" />
              ) : (
                <ChevronDown className="w-6 h-6 text-color-primary" />
              )}
            </button>
            <div
              className={`absolute transition-all ease-in-out ${
                isLangDropdownOpen ? "max-h-[500px] py-2" : "max-h-0 py-0"
              }  overflow-hidden top-full -left-10 mt-1 w-fit bg-[#FBFFFB] rounded-sm z-50`}
            >
              <a
                className="block cursor-pointer px-6 py-2 text-base font-button text-color-primary hover:bg-gray-200"
                onClick={() => handleChangeLanguage("english")}
              >
                English
              </a>
              <a
                className="block cursor-pointer px-6 py-2 text-base font-button text-color-primary hover:bg-gray-200"
                onClick={() => handleChangeLanguage("portuguese")}
              >
                Português
              </a>
            </div>

            <Button
              size="lg"
              className="bg-[#6452BF] hover:bg-indigo-700 text-white px-6 py-2 text-sm font-medium text-nowrap"
              whatsapp
            >
              {t("headerSection.menu.button")}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
