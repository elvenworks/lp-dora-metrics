import { useState } from "react";
import Card from "../common/Card";
import Calculator from "../icons/Calculator";
import Range from "../common/Range";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";
import { useEffect } from "react";

export default function PriceSection() {
  const [hightAvailability, setHightAvailability] = useState(false);

  const USD_COST = Number(import.meta.env.VITE_USD_COST) || 5.51;

  const REPOSITORY_VALUE_USD =
    Number(import.meta.env.VITE_REPOSITORY_VALUE_USD) || 10;

  const USERS_CONECTED_VALUE_USD =
    Number(import.meta.env.VITE_USERS_CONECTED_VALUE_USD) || 10;

  const SYNC_VALUE_USD = Number(import.meta.env.VITE_SYNC_VALUE_USD) || 10;

  const HIGH_AVAILABILITY_MULTIPLY =
    Number(import.meta.env.VITE_HIGH_AVAILABILITY_MULTIPLY) || 2;

  const [numbersRepository, setNumberRepository] = useState(98);
  const [totalRepository, setTotalRepository] = useState(
    REPOSITORY_VALUE_USD * 98
  );

  const [usersConected, setUsersConected] = useState(15);
  const [totalUsersConected, setTotalUsersConected] = useState(
    USERS_CONECTED_VALUE_USD * 15
  );

  const [numbersSync, setNumbersSync] = useState(3);
  const [totalSync, setTotalSync] = useState(SYNC_VALUE_USD * 3);

  const [total, setTotal] = useState(2500);

  const MAX_REPOSITORY = 200;
  const MAX_USERS = 50;
  const MAX_SYNC = 5;

  const handleNumbersRepository = (e) => {
    const value = e.target.value;
    setNumberRepository(Number(value));
    setTotalRepository(REPOSITORY_VALUE_USD * Number(value));
  };

  const handleUsersConected = (e) => {
    const value = e.target.value;
    setUsersConected(Number(value));
    setTotalUsersConected(USERS_CONECTED_VALUE_USD * Number(value));
  };

  const handleNumbersSync = (e) => {
    const value = e.target.value;
    setNumbersSync(Number(value));
    setTotalSync(SYNC_VALUE_USD * Number(value));
  };

  const financial = (value) => {
    return Number.parseFloat(value).toFixed(2);
  };

  const convert = (value) => {
    return value * USD_COST;
  };

  useEffect(() => {
    const newTotal =
      (totalRepository + totalUsersConected + totalSync) *
      (hightAvailability ? HIGH_AVAILABILITY_MULTIPLY : 1);

    setTotal(newTotal);
  }, [
    totalRepository,
    totalUsersConected,
    totalSync,
    hightAvailability,
    HIGH_AVAILABILITY_MULTIPLY,
  ]);

  return (
    <section id="price">
      <div className="container mx-auto px-6 my-20">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold txt-primary">
            Escolha o plano ideal para sua operação
          </h2>
          <p className="text-2xl font-light inline txt-primary max-w-3xl mx-auto">
            Adapte o uso do{" "}
            <b className="txt-secondary font-bold">DORA Metrics</b> à maturidade
            da sua equipe, com opções que crescem junto com os seus desafios.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="w-full h-full">
            <div className="flex flex-row items-center">
              <Calculator />
              <h2 className="text-base font-semibold txt-primary px-4">
                Configure conforme suas necessidades
              </h2>
            </div>
            <div className="space-y-8 mt-8">
              <div>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-base txt-primary">
                    Precisa de alta disponibilidade?
                  </p>
                </div>

                <div className="flex flex-row items-center space-x-2 mt-4">
                  <div className="flex flex-row items-center space-x-2">
                    <Checkbox
                      name={"Sim"}
                      value={hightAvailability}
                      onChange={() => setHightAvailability(true)}
                    />
                    <label className="h-full font-base">Sim</label>
                  </div>

                  <div className="flex flex-row items-center space-x-2">
                    <Checkbox
                      name={"Não"}
                      value={!hightAvailability}
                      onChange={() => setHightAvailability(false)}
                    />
                    <label className="h-full font-base">Não</label>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-base txt-primary">
                    Repositórios conectados
                  </p>
                  <p className="txt-secondary font-semibold">
                    {numbersRepository}
                  </p>
                </div>

                <Range
                  min={1}
                  max={MAX_REPOSITORY}
                  onChange={handleNumbersRepository}
                  value={numbersRepository}
                />
              </div>

              <div>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-base txt-primary">Usuários simultâneos</p>
                  <p className="txt-secondary font-semibold">{usersConected}</p>
                </div>

                <Range
                  min={1}
                  max={MAX_USERS}
                  onChange={handleUsersConected}
                  value={usersConected}
                />
              </div>

              <div>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-base txt-primary">
                    Sincronizações simultâneas
                  </p>
                  <p className="txt-secondary font-semibold">{numbersSync}</p>
                </div>

                <Range
                  min={1}
                  max={MAX_SYNC}
                  onChange={handleNumbersSync}
                  value={numbersSync}
                />
              </div>
            </div>
          </Card>

          <Card
            borderColor={false}
            className="w-full h-full flex flex-col gap-12 bg-[#F9F6FF] border-[#B5A9F3]"
          >
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-base font-semibold txt-primary text-center px-4">
                Valor estimado mensal
              </h2>
              <h3 className="txt-secondary text-5xl font-bold">
                R$ {financial(convert(total))}
                <span className="txt-primary text-base">/mês</span>
              </h3>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h4 className="text-base font-semibold txt-primary">Resumo</h4>
              <p className="text-base txt-primary">
                Prioridade alta:{" "}
                <b className="txt-secondary">
                  {hightAvailability ? "Sim" : "Não"}
                </b>
              </p>

              <ul className="w-full space-y-4">
                <li className="flex flex-row justify-between">
                  <p className="text-base txt-primary">
                    Repositórios conectados:{" "}
                    <b className="txt-secondary">{numbersRepository}</b>
                  </p>

                  <p className="text-base txt-secondary font-bold">
                    R$ {financial(convert(totalRepository))}
                  </p>
                </li>

                <li className="flex flex-row justify-between">
                  <p className="text-base txt-primary">
                    Usuários simultâneos:{" "}
                    <b className="txt-secondary">{usersConected}</b>
                  </p>

                  <p className="text-base txt-secondary font-bold">
                    R$ {financial(convert(totalUsersConected))}
                  </p>
                </li>

                <li className="flex flex-row justify-between">
                  <p className="text-base txt-primary">
                    Sincronizações simultâneas:{" "}
                    <b className="txt-secondary">{numbersSync}</b>
                  </p>

                  <p className="text-base txt-secondary font-bold">
                    R$ {financial(convert(totalSync))}
                  </p>
                </li>
              </ul>
            </div>

            <p className="text-base text-center">
              Este valor é uma estimativa com base nas suas configurações. Para
              um orçamento customizado, fale com nosso time.
            </p>

            <div>
              <Button
                size="sm"
                className="text-lg px-8 w-full py-4 mx-auto lg:mx-0"
              >
                Solicitar orçamento
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
