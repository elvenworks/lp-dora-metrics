import { LayoutDashboard } from "lucide-react";
import GitHub from "../icons/Github";
import Idea from "../icons/Idea";
import ElvenShield from "../icons/ElvenShield";
import Statistic from "../icons/Statistic";
import CorrectShild from "../icons/CorrectShild";
import Card from "../common/Card";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <GitHub />,
      title: "Consulta com GitHub, GitLab, Bitbucket",
      description: "Integração nativa com suas ferramentas de desenvolvimento",
    },
    {
      icon: <Idea />,
      title: "Insights em tempo real",
      description:
        "Métricas atualizadas automaticamente com dados em tempo real",
    },
    {
      icon: <LayoutDashboard className="w-10 h-10" fill="#fff" />,
      title: "Dashboards personalizáveis",
      description: "Visualizações adaptadas às necessidades da sua equipe",
    },
    {
      icon: <ElvenShield />,
      title: "Integração com a Elven Platform",
      description: "Conecte com todo o ecossistema de ferramentas da Elven",
    },
    {
      icon: <Statistic />,
      title: "Comparação com benchmarks",
      description: "Compare sua performance com padrões da indústria",
    },
    {
      icon: <CorrectShild />,
      title: "Suporte de especialistas",
      description: "Orientação de especialistas em engenharia de software",
    },
  ];

  return (
    <section
      id="benefits"
      className="py-16 bg-gradient-to-br from-[#E6DDFC] to-[#FBFBFB]"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center flex-col gap-4 text-center space-y-4 mb-12">
          <h2 className="text-3xl w-full lg:text-4xl font-bold txt-primary">
            Por que adotar as <b className="txt-secondary">DORA Metrics</b> com
            a Elven?
          </h2>

          <p className="text-2xl w-full  txt-primary-light">
            Nossa plataforma oferece, processa e apresenta as{" "}
            <b className="txt-secondary">DORA Metrics</b> em tempo real, sem
            fricção. Você obtém visibilidade instantânea do que precisa
            melhorar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} hover purple className="space-y-4">
              <div>
                <div className="text-white">{benefit.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-white">
                {benefit.title}
              </h3>
              <p className="text-purple-100 text-base font-light">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
