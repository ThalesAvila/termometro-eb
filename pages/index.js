import {
  Button,
  Title,
  Waves,
  Container,
  Column,
  Paragraph,
  View,
  EbCard,
  DeepCard,
} from "@/components/index";
import { EbData, DeepData } from "../data";
import { useRouter } from "next/router";

export default function App() {
  const router = useRouter();
  const handleClick = () => {
    router.push("form");
  };
  return (
    <>
      <Waves yellow>
        <Container>
          <View width="13vw" height="2.5vw" padding="3.5vw 0 6.3vw 0">
            <img
              src="/assets/img/logo.png"
              srcSet={`
                /assets/img/logo.png 0.5x,
                /assets/img/logo.png 0.75x,
                /assets/img/logo.png 1.5x,
              `}
              layout="responsive"
            />
            <Button onClick={handleClick} type="hero">
              quero meu diagnóstico
            </Button>
          </View>
          <Title
            bold
            hero
            type="hero"
            color="purple"
            title1="Employer Branding"
            rotated="TERMÔMETRO"
          />
        </Container>
      </Waves>
      <Container>
        <Column small padding="0 3vw 0 0">
          <Paragraph type={"paragraph"}>
            Responda as perguntas criadas pelo time de especialistas da Matchbox
            e tenha um Raio x da sua estratégia de marca empregadora. Use os
            resultados do Termômetro de Employer Branding para corrigir a rota
            do seu plano de ação e alavancar os resultados do seu RH.
          </Paragraph>
        </Column>
        <Column big padding="0 0 0 3vw">
          <View thermometer width="35vw">
            <img
              src="/assets/img/termometro.png"
              srcSet={`
                /assets/img/termometro.png 0.5x,
                /assets/img/termometro.png 0.75x,
                /assets/img/termometro.png 1.5x,
                /assets/img/termometro.png 2x,
                /assets/img/termometro.png 2.5x,
              `}
              layout="responsive"
            />
          </View>
        </Column>
      </Container>
      <Container>
        <Column full>
          <Button onClick={handleClick}>quero meu diagnóstico</Button>
        </Column>
        <Column small padding="3vw 0 0 0">
          <Title
            title1="saiba mais sobre o "
            title2="Termômetro de Employer Branding"
            color="survival"
          />
        </Column>
        <Column big padding="5vw 0 0 4vw">
          <Paragraph>
            O termômetro de Employer Branding é um diagnóstico criado pela
            Matchbox, com base na metodologia que utilizamos com os nossos
            clientes. As perguntas trazidas no questionário, avaliam sua
            estratégia de Employer Branding em quatro pilares:
          </Paragraph>
        </Column>
        <Column full>
          <EbCard data={EbData} />
        </Column>
        <Column margin="5vw 0" full>
          <Paragraph textAlign="center" highlight>
            A Matchbox utilizou exemplos reais de empresas que possuem um
            trabalho extenso de Marca Empregadora e Marketing de Recrutamento
            para a construção deste Termômetro de Employer Branding.
          </Paragraph>
        </Column>
      </Container>
      <Waves purple />
      <View bg="#4d339d">
        <Container>
          <Column small padding="0 7vw 0 0">
            <Title
              type="about"
              color="optimization"
              title1="sobre a "
              title2="Matchbox"
            />
            {
              //Trocar o matchbox para a logo da match amarelinha
            }
          </Column>
          <Column big>
            <Paragraph white justify>
              A Matchbox é uma HRTech que atua no segmento de aquisição de
              talentos, com a visão de mudar as regras do jogo em recrutamento.
              Para isso criamos o Spark, a primeira ferramenta de Employer
              Branding do mercado brasileiro, e oferecemos serviços de marketing
              de recrutamento que auxiliam os profissionais de employer branding
              a escalar sua estratégia de marca empregadora.
            </Paragraph>
          </Column>
        </Container>
      </View>
      <View bg="#4d339d" padding="0 0 5vw 0">
        <Container>
          <Column full>
            <View about="true" width="46.5vw" margin="5vw auto">
              <Title
                type="deep"
                color="optimization"
                title1="QUER APROFUNDAR O SEU CONHECIMENTO SOBRE "
                title2="Employer Branding?"
              />
            </View>
          </Column>
        </Container>
        <Container type="full">
          <DeepCard data={DeepData} />
        </Container>
      </View>
    </>
  );
}
