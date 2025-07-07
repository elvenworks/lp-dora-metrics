import Button from "../common/Button";
import doraMetricsBanner from "../../assets/dora-metric-banner.png";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="py-12 lg:py-1 bg-gradient-to-br from-[#F5F0FF] to-[#FBFBFB]"
    >
      <div className="container mx-auto px-6 lg:px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-6 lg:space-y-8">
              <div className="bg-secondary-light p-2.5 inline-block rounded-4xl">
                <p className="txt-secondary font-button font-semibold text-sm">
                  DORA Metrics
                </p>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold txt-primary leading-[1]">
                {t("heroSection.title")}{" "}
                <span className="txt-secondary">DORA Metrics</span>
              </h1>
              <p className="text-2xl txt-primary-light font-light">
                {t("heroSection.subtitle")}{" "}
                <b className="txt-secondary font-medium">
                  {t("heroSection.subtitle2")}
                </b>
                .
              </p>
            </div>

            <Button
              size="lg"
              className="text-lg px-8 py-4 mx-auto lg:mx-0"
              whatsapp
            >
              {t("heroSection.button")}
            </Button>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src={doraMetricsBanner}
                alt="DORA Metrics Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
