import {
  Graph,
  Title,
  Waves,
  Container,
  Column,
  Paragraph,
  View,
} from "@/components/index";
import Image from "next/image";

export default function Report() {
  return (
    <>
      <Waves salmon>
        <Container type="report">
          <View width="41vw" padding="9vw 0 0 0">
            <Title
              type="report-hero"
              color="white"
              title1="SEU TERMÔMETRO DE "
              title2="EMPLOYER BRANDING "
              title3="ESTA AQUI!"
            />
          </View>
        </Container>
      </Waves>
      <Container type="report">
        <Column small padding="0 3vw 0 0">
          <View>
            <Title
              color="salmon"
              type="report-title"
              title1="Você está no modo de sobrevivência"
            />
            <View width="24vw">
              <Paragraph>
                Sua trajetória com <b>Employer Branding</b> está só começando!"
              </Paragraph>
            </View>
          </View>
        </Column>
        <Column big padding="0 0 0 8vw">
          <View width="35vw" height="18.5vw">
            <Image
              src="/assets/img/velocimetro.png"
              width={673}
              height={356}
              layout="responsive"
            />
          </View>
        </Column>
        <Column full>
          <View width="60vw" margin="8vw 0" cookie>
            <Paragraph>
              Baseado n as suas respostas, as suas estratégias e ações de
              Employer Branding ainda estão no modo sobrevivência. O trabalho de
              marca empregadoda ainda esta começando em muitas empresas, entao
              veja isso como uma oportunidade para desenvolver sua estratéfia!
              Dê uma olhada nos resultados abaixo e entenda em que você pode
              direcionar seus esforços.
            </Paragraph>
          </View>
        </Column>
        <Column full>
          <View flex around width="100%" margin="4vw 0 0 0">
            <Graph value="50" title="presença da marca empregadora" />
            <Graph
              value="50"
              color="#F55D3E"
              title="engajamento interno e externo"
            />
            <Graph value="50" color="#F0A202" title="jornada do Talento" />
            <Graph
              value="50"
              color="#419D78"
              title="estrutura do time e métricas"
            />
          </View>
        </Column>
        <Column full></Column>
      </Container>
    </>
  );
}
