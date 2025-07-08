import { useTranslation } from "react-i18next";
import Card from "../common/Card";
import CorrectGear from "../icons/CorrectGear";
import Memories from "../icons/Memories";
import Monitor from "../icons/Monitor";
import Rocket from "../icons/Rocket";

export default function MetricsSection() {
  const { t } = useTranslation();

  const metrics = [
    {
      icon: <CorrectGear />,
      title: t("metricsSection.metrics.deploymentFrequency.title"),
      description: t("metricsSection.metrics.deploymentFrequency.description"),
    },
    {
      icon: <Memories />,
      title: t("metricsSection.metrics.leadTimeForChanges.title"),
      description: t("metricsSection.metrics.leadTimeForChanges.description"),
    },
    {
      icon: <Rocket />,
      title: t("metricsSection.metrics.meanTimeToRestore.title"),
      description: t("metricsSection.metrics.meanTimeToRestore.description"),
    },
    {
      icon: <Monitor />,
      title: t("metricsSection.metrics.changeFailureRate.title"),
      description: t("metricsSection.metrics.changeFailureRate.description"),
    },
  ];

  return (
    <section id="metrics" className="flex items-center mt-20 mb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold txt-primary">
            {t("metricsSection.title")}{" "}
            <span className="txt-secondary">DORA Metrics</span>?
          </h2>
          <p className="text-2xl font-light inline txt-primary max-w-3xl mx-auto">
            {t("metricsSection.subtitle")}{" "}
            <b className="txt-secondary font-bold">DORA Metrics</b>{" "}
            {t("metricsSection.subtitle2")}
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
