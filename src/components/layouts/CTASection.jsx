import Button from "../common/Button";
import elvenShildBackground from "../../assets/elven-shild-background.png";

export default function CTASection() {
  return (
    <section className="py-16 bg-white">
      <div className="container flex flex-col items-center mx-auto my-auto px-4">
        <div className="relative p-20 bg-gradient-to-r from-[#6351BE] to-[#1D105D] rounded-2xl text-white overflow-hidden text-center lg:text-left">
          <div className="lg:max-w-2/4 relative z-10 space-y-6">
            <h2 className="text-3xl  lg:text-4xl font-bold">
              Dê o primeiro passo rumo à alta performance
            </h2>
            <p className="text-2xl font-light ">
              Comece agora a visualizar suas métricas de engenharia com clareza
              e dados em tempo real.
            </p>
            <Button
              whatsapp
              variant="secondary"
              size="lg"
              className="bg-white txt-secondary hover:bg-gray-50 "
            >
              Solicite uma demo
            </Button>
          </div>

          <img
            src={elvenShildBackground}
            alt="Elven DORA Metrics shild"
            aria-hidden="true"
            className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0 lg:w-auto z-0 pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
