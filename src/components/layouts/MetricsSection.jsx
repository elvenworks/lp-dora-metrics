import Card from "../common/Card";
import CorrectGear from "../icons/CorrectGear";
import Memories from "../icons/Memories";
import Monitor from "../icons/Monitor";
import Rocket from "../icons/Rocket";

export default function MetricsSection() {
  const metrics = [
    {
      icon: <CorrectGear />,
      title: "Deployment Frequency",
      description: "Quantas vezes seu time entrega software com sucesso.",
    },
    {
      icon: <Memories />,
      title: "Lead Time for Changes",
      description: "Quanto tempo leva para uma mudança ir do commit ao deploy.",
    },
    {
      icon: <Rocket />,
      title: "Change Failure Rate",
      description: "O quão rápido você consegue se recuperar de uma falha.",
    },
    {
      icon: <Monitor />,
      title: "Time to Restore Service",
      description: "Qual o percentual de deploys que causam incidentes.",
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
}
