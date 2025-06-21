import { useState } from "react";
import ExpandedSection from "../common/ExpandedSection";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Precisa de configuração complexa?",
      answer:
        "Não! Nossa integração é simples e rápida. Conecte seus repositórios e comece a visualizar suas métricas em minutos.",
    },
    {
      question: "Como vocês coletam as métricas?",
      answer:
        "Integramos diretamente com suas ferramentas de desenvolvimento (GitHub, GitLab, Bitbucket) para coletar dados automaticamente, sem impacto na sua operação.",
    },
    {
      question: "As métricas seguem algum padrão?",
      answer:
        "Sim, seguimos rigorosamente os padrões DORA (DevOps Research and Assessment) estabelecidos pelo Google Cloud.",
    },
    {
      question: "É possível ver histórico por time?",
      answer:
        "Sim, você pode visualizar métricas por equipe, projeto ou período específico, com histórico completo para análise de tendências.",
    },
    {
      question: "Tenho suporte para interpretar os dados?",
      answer:
        "Sim, nossa equipe de especialistas está disponível para ajudar na interpretação dos dados e definição de estratégias de melhoria.",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-gradient-to-br">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold txt-primary">
            Dúvidas comuns
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
