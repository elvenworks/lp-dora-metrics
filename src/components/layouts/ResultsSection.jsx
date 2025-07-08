import { Check } from "lucide-react";
import metrisUser from "../../assets/metrics-users.png";
import doraMetricsTable from "../../assets/metrics-table.png";
import { useTranslation } from "react-i18next";

export default function ResultsSection() {
  const { t } = useTranslation();

  const results = [
    t("resultsSection.results.lessTimeManualWork"),
    t("resultsSection.results.moreTeamsAligned"),
    t("resultsSection.results.lessFailures"),
    t("resultsSection.results.fasterResolution"),
    t("resultsSection.results.moreTransparency"),
  ];

  return (
    <section id="results" className="py-16">
      <div className="container mx-auto px-4 mt-20 mb-20">
        <div className="flex items-center flex-col space-y-4 mb-20 lg:mb-36">
          <h2 className="text-3xl lg:text-4xl text-center font-bold txt-primary">
            {t("resultsSection.title")}
          </h2>
          <p className="text-2xl text-center font-light max-w-4xl txt-primary-light">
            {t("resultsSection.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative space-y-6 lg:flex lg:flex-col lg:items-center">
              <div className="absolute w-full h-full rounded-full filter blur-2xl bg-[#EDE5FF]" />
              {results.map((result, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-4xl lg:max-w-lg lg:min-w-lg flex items-center space-x-3 relative z-10"
                >
                  <div className="w-8 h-8 bg-[#6451BF] rounded-full font-base flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={4} />
                  </div>
                  <p className="txt-primary text-base">{result}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="h-full w-full flex flex-col items-center">
            <div className="w-full lg:w-4/5 relative h-full">
              <img
                src={metrisUser}
                alt="DORA Dashboard"
                className="left-0 -top-1/12 z-10 w-full lg:w-auto lg:absolute"
              />
              <img
                src={doraMetricsTable}
                alt="DORA Dashboard"
                className="bottom-0 right-0 z-0 w-full lg:w-auto lg:absolute"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
