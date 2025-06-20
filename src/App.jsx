import React, { useState } from "react";
import "./App.css";
import {
  ChevronDown,
  ChevronUp,
  Check,
  BarChart3,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  LayoutDashboard,
  Shield,
} from "lucide-react";

// Importando as imagens
import doraIllustration from "./assets/dora-illustration.jpg";
import doraDashboard from "./assets/dora-dashboard.png";
import elvenLogo from "./assets/elven-logo.svg";
import elvenLogoFooter from "./assets/elven-logo-footer.svg";
import CorrectGear from "./components/icons/CorrectGear";
import Memories from "./components/icons/Memories";
import Monitor from "./components/icons/Monitor";
import Rocket from "./components/icons/Rocket";
import GitHub from "./components/icons/Github";
import Idea from "./components/icons/Idea";
import ElvenShield from "./components/icons/ElvenShield";
import Statistic from "./components/icons/Statistic";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex cursor-pointer items-center justify-center rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary-gradient text-primary-foreground hover:bg-primary-gradient/90 focus:ring-primary",
    secondary:
      "bg-white text-primary hover:bg-gray-50 focus:ring-primary border border-gray-200",
    outline:
      "border border-border bg-background hover:bg-accent hover:text-accent-foreground focus:ring-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({
  children,
  className = "",
  hover = false,
  purple = false,
  ...props
}) => {
  const baseClasses = purple
    ? "bg-primary-gradient text-primary-foreground rounded-md p-6"
    : "bg-white txt-primary rounded-md border border-color-primary p-6";

  return (
    <div
      className={`${baseClasses} ${hover ? "card-hover" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const ExpandedSection = ({
  title,
  content,
  open,
  onClick,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`${className} cursor-pointer relative bg-white txt-primary rounded-sm border border-color-primary p-6 overflow-hidden`}
      onClick={onClick}
      {...props}
    >
      <span
        className={`absolute transition-colors ease-in-out ${
          open ? "bg-[#6451BF]" : "bg-[#F1F2F9]"
        } ease-in-out top-0 left-0 bottom-0 w-1.5`}
      />
      <div className="w-full text-left flex items-center justify-between p-2 focus:outline-none ">
        <h3 className="text-2xl font-semibold txt-primary">{title}</h3>

        {open ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </div>
      <div
        className={`px-2 transition-all ease-in-out  overflow-hidden ${
          open ? "max-h-[500px] py-5" : "max-h-0 py-0"
        }`}
      >
        <p className="txt-primary-light">{content}</p>
      </div>
    </div>
  );
};

const Header = () => {
  const [isDoraDropdownOpen, setIsDoraDropdownOpen] = useState(false);

  return (
    <header className="bg-primary-light txt-primary h-[72px] border-b border-gray-200 sticky top-0 z-50 txt-primary">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo da Elven */}
          <div className="flex items-center">
            <img
              src={elvenLogo}
              alt="Elven DORA Metrics"
              className="h-10 w-auto"
            />
          </div>

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
                  Sobre DORA Metrics
                </span>

                {isDoraDropdownOpen ? (
                  <ChevronUp className="w-6 h-6 txt-primary" />
                ) : (
                  <ChevronDown className="w-6 h-6 txt-primary" />
                )}
              </button>

              {isDoraDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  <a
                    href="#metrics"
                    className="block px-4 py-2 text-sm txt-primary hover:bg-gray-50"
                  >
                    O que são DORA Metrics
                  </a>
                  <a
                    href="#benefits"
                    className="block px-4 py-2 text-sm txt-primary hover:bg-gray-50"
                  >
                    Benefícios
                  </a>
                  <a
                    href="#results"
                    className="block px-4 py-2 text-sm txt-primary hover:bg-gray-50"
                  >
                    Resultados
                  </a>
                </div>
              )}
            </div>

            {/* Link Dúvidas */}
            <a
              href="#faq"
              className="font-button leading-[1.2] txt-primary hover:text-gray-900 transition-colors font-semibold"
            >
              Dúvidas
            </a>
          </nav>

          {/* Botão CTA */}
          <Button
            size="lg"
            className="bg-[#6452BF] hover:bg-indigo-700 text-white px-6 py-2 text-sm font-medium"
          >
            Começar grátis
          </Button>
        </div>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#F5F0FF] to-[#FBFBFB]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-8">
              <div className="bg-secondary-light p-2.5 inline-block rounded-4xl">
                <p className="txt-secondary font-button font-semibold text-sm">
                  DORA Metrics
                </p>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold txt-primary leading-[1]">
                Transforme sua operação com as{" "}
                <span className="txt-secondary">DORA Metrics</span>
              </h1>
              <p className="text-2xl txt-primary-light font-light">
                As quatro métricas que ajudam times de engenharia a liderar a{" "}
                <b className="txt-secondary">
                  medir performance, identificar gargalos e acelerar entregas
                  com confiabilidade
                </b>
                .
              </p>
            </div>

            <Button size="lg" className="text-lg px-8 py-4">
              Começar grátis
            </Button>
          </div>

          <div className="relative">
            {/* Usando a imagem real como base e adicionando elementos por cima */}
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={doraIllustration}
                alt="DORA Metrics Illustration"
                className="w-full h-auto rounded-3xl"
              />
              {/* Overlay com elementos adicionais para ficar mais próximo do original */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-3xl"></div>

              {/* Elementos decorativos adicionais */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-purple-400/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-purple-500/40 rounded-lg rotate-12"></div>

              {/* Ícone central */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MetricsSection = () => {
  const metrics = [
    {
      icon: <CorrectGear />,
      title: "Deployment Frequency",
      description: "Quantas vezes por dia sua equipe faz deploy",
    },
    {
      icon: <Memories />,
      title: "Lead Time for Changes",
      description: "Quanto tempo uma ideia leva para chegar em produção",
    },
    {
      icon: <Rocket />,
      title: "Change Failure Rate",
      description: "% de falhas que resultam em degradação de serviço",
    },
    {
      icon: <Monitor />,
      title: "Time to Restore Service",
      description: "Qual o tempo de se recuperar de uma falha",
    },
  ];

  return (
    <section id="metrics" className="flex items-center mt-20 mb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold txt-primary">
            O que são as <span className="txt-secondary">DORA Metrics</span>?
          </h2>
          <p className="text-2xl font-light inline txt-primary max-w-3xl mx-auto">
            Desenvolvidas após anos de pesquisa com milhares de times de
            tecnologia, as{" "}
            <b className="text-primary font-bold">DORA Metrics</b> são as quatro
            principais métricas para engenharia de software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} hover className="text-center space-y-4">
              <div className="w-12 h-12 flex items-center justify-center mx-auto">
                <div className="txt-secondary">{metric.icon}</div>
              </div>
              <h3 className="text-lg font-semibold txt-primary">
                {metric.title}
              </h3>
              <p className="txt-primary-light text-base">
                {metric.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
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
      icon: <Shield className="w-10 h-10" fill="#fff" />,
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
              <p className="text-purple-100 text-sm">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const ResultsSection = () => {
  const results = [
    "Menos tempo com métricas manuais e mais produção",
    "Times que fazem releases baseados com mais frequência",
    "Reduzir falhas graves em produção",
    "Problemas resolvidos em menos tempo",
    "Mais transparência e visibilidade na entrega",
  ];

  return (
    <section id="results" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold txt-primary">
                Resultados que você pode esperar
              </h2>
              <p className="text-lg txt-primary-light">
                Acompanhe a performance em tempo real com métricas objetivas.
                Tenha visibilidade do que está funcionando e onde ajustar.
              </p>
            </div>

            <div className="relative space-y-3">
              <div className="absolute w-full h-full rounded-full filter blur-2xl bg-[#EDE5FF]" />
              {results.map((result, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-4xl flex items-center space-x-3 relative z-10"
                >
                  <div className="w-8 h-8 bg-[#6451BF] rounded-full font-base flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={4} />
                  </div>
                  <p className="txt-primary text-sm">{result}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Usando a imagem real do dashboard */}
            <Card className="p-6 space-y-4 overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Deploy Traffic
                  </h3>
                  <div className="text-xs text-gray-500">Últimos 5 meses</div>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={doraDashboard}
                    alt="DORA Dashboard"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
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
    <section
      id="faq"
      className="py-16 bg-gradient-to-br from-gray-50 to-purple-50"
    >
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
              onClick={() => setOpenIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#6351BE] to-[#1D105D] rounded-2xl text-center space-y-6 text-white relative overflow-hidden p-12">
          {/* Elementos de fundo decorativos */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-8 right-8 w-32 h-32 bg-white/5 rounded-full"></div>
          <div className="absolute bottom-8 left-8 w-24 h-24 bg-white/5 rounded-lg rotate-12"></div>

          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Dê o primeiro passo rumo à alta performance
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Comece agora a visualizar suas métricas de engenharia com clareza
              e dados em tempo real.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white txt-secondary hover:bg-gray-50"
            >
              Começar grátis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
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
              Transformando a engenharia de software com DORA Metrics em tempo
              real.
            </p>
          </div>

          <div className="flex justify-start space-x-4">
            <div className=" space-y-4">
              <p className="text-purple-200 font-bold text-2xl">
                Redes Sociais
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
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
          <p className="text-purple-200 text-sm font-button">
            © 2024-2025 Elven. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen font-display bg-white">
      <Header />
      <HeroSection />
      <MetricsSection />
      <BenefitsSection />
      <ResultsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
