import { useState } from "react";
import { useTranslation } from "react-i18next";
import ExpandedSection from "../common/ExpandedSection";

export default function FAQSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: t("FAQSection.questions.isComplex.question"),
      answer: t("FAQSection.questions.isComplex.answer"),
    },
    {
      question: t("FAQSection.questions.howMetricsAreGenerated.question"),
      answer: t("FAQSection.questions.howMetricsAreGenerated.answer"),
    },
    {
      question: t("FAQSection.questions.isMetricsStandardized.question"),
      answer: t("FAQSection.questions.isMetricsStandardized.answer"),
    },
    {
      question: t("FAQSection.questions.hasHistoryByTeams.question"),
      answer: t("FAQSection.questions.hasHistoryByTeams.answer"),
    },
    {
      question: t("FAQSection.questions.hasSupport.question"),
      answer: t("FAQSection.questions.hasSupport.answer"),
    },
  ];

  return (
    <section id="faq" className="py-16 bg-gradient-to-br">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold txt-primary">
            {t("FAQSection.title")}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <ExpandedSection
              key={index}
              title={faq.question}
              content={faq.answer}
              open={openIndex === index}
              onClick={() =>
                openIndex === index ? setOpenIndex(null) : setOpenIndex(index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
