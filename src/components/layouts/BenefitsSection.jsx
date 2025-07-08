import { LayoutDashboard } from "lucide-react";
import { useTranslation } from "react-i18next";
import GitHub from "../icons/Github";
import Idea from "../icons/Idea";
import ElvenShield from "../icons/ElvenShield";
import Statistic from "../icons/Statistic";
import CorrectShild from "../icons/CorrectShild";
import Card from "../common/Card";

export default function BenefitsSection() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: <GitHub />,
      title: t("benefitsSection.benefits.gitIntegration.title"),
      description: t("benefitsSection.benefits.gitIntegration.description"),
    },
    {
      icon: <Idea />,
      title: t("benefitsSection.benefits.realTimeInsights.title"),
      description: t("benefitsSection.benefits.realTimeInsights.description"),
    },
    {
      icon: <LayoutDashboard className="w-10 h-10" fill="#fff" />,
      title: t("benefitsSection.benefits.customizableDashboards.title"),
      description: t(
        "benefitsSection.benefits.customizableDashboards.description"
      ),
    },
    {
      icon: <ElvenShield />,
      title: t("benefitsSection.benefits.elvenPlatformIntegration.title"),
      description: t(
        "benefitsSection.benefits.elvenPlatformIntegration.description"
      ),
    },
    {
      icon: <Statistic />,
      title: t("benefitsSection.benefits.benchmarking.title"),
      description: t("benefitsSection.benefits.benchmarking.description"),
    },
    {
      icon: <CorrectShild />,
      title: t("benefitsSection.benefits.support.title"),
      description: t("benefitsSection.benefits.support.description"),
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
            {t("benefitsSection.title")}{" "}
            <b className="txt-secondary">DORA Metrics</b>{" "}
            {t("benefitsSection.title2")}
          </h2>

          <p className="text-2xl w-full  txt-primary-light">
            {t("benefitsSection.description")}{" "}
            <b className="txt-secondary">DORA Metrics</b>{" "}
            {t("benefitsSection.description2")}
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
