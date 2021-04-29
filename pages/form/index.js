import {
  Container,
  Input,
  View,
  Timeline,
  QuestionForm,
  Button,
  DefaultSpan,
} from "@/components/index";
import { useForm } from "react-hook-form";
import { questionData } from "../../data";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAppContext } from "@/components/AppContext";
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import NProgress from 'nprogress';

const CREATE_LEAD_MUTATION = gql`
  mutation CREATE_LEAD_MUTATION($data: LeadCreateInput!) {
    createLead(data: $data) { 
      name
    }
  }
`;

const Step = ({ inputs, register, errors }) => (
  <View>
    {inputs.map((question) => {
      return (
        <View formInput>
          <Input
            key={question.inputName}
            {...question}
            {...register(question?.validateName, {
              ...question?.validate,
            })}
          />
          {errors[question?.validateName] && (
            <DefaultSpan>Esse campo é obrigatório</DefaultSpan>
          )}
        </View>
      );
    })}
  </View>
);

export default function Form() {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const { updateLeadInfo } = useAppContext();
  const [createLead, { loading }] = useMutation(CREATE_LEAD_MUTATION, {
    onCompleted: () => { NProgress.done() }
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    await updateLeadInfo(data);
    const parsedLeadInfo = await Object.fromEntries(Object.entries(data).map(pair => {
      if (pair[1] === 'true') {
        pair[1] = true;
      } else if (pair[1] === 'false') {
        pair[1] = false;
      }
      return pair;
    }));
    NProgress.start()
    const res = await createLead({
      variables: {
        data: parsedLeadInfo
      }
    });
    router.push("report");
  };

  const handleNextPage = (activeTab) => {
    // Define o array dos nomes dos fields da etapa atual
    const currentStepFieldNames = Object.values(questionData)[activeTab].map(
      (field) => field.inputName
    );
    // Valida se há algum field com valor undefined na etapa atual
    const validateNextStep = (inputNames) => {
      return watch(inputNames).findIndex((value) => value === undefined) === -1;
    };
    if (validateNextStep(currentStepFieldNames)) {
      setActiveTab(activeTab + 1);
    }
  };
  return (
    <View bg="#f8f9fa">
      <View formHeader bg="#483A96" height="12vw">
        <Container>
          <View headerImg width="15vw" height="2vw" padding="2vw 0 0 1.5vw">
            <Image
              src="/assets/img/logo-white.png"
              width={253}
              height={48}
              layout="responsive"
            />
          </View>
        </Container>
      </View>
      <Container type="form">
        <Timeline activeTab={activeTab} />

        <QuestionForm onSubmit={handleSubmit(onSubmit)}>
          <View padding="1vw 5vw">
            {activeTab === 0 && (
              <Step
                inputs={questionData.demographic}
                register={register}
                errors={errors}
              />
            )}

            {activeTab === 1 && (
              <Step
                inputs={questionData.employerBrand}
                register={register}
                errors={errors}
              />
            )}
            {activeTab === 2 && (
              <Step
                inputs={questionData.internalExternalEngagement}
                register={register}
                errors={errors}
              />
            )}

            {activeTab === 3 && (
              <Step
                inputs={questionData.talentJourney}
                register={register}
                errors={errors}
              />
            )}

            {activeTab === 4 && (
              <Step
                inputs={questionData.structureMetrics}
                register={register}
                errors={errors}
              />
            )}
          </View>
          <View flex padding="0vw 5vw" style={{ justifyContent: "flex-end" }}>
            {activeTab !== 0 && (
              <Button type="form" onClick={() => setActiveTab(activeTab - 1)}>
                Voltar
              </Button>
            )}
            {activeTab == 4 ? (
              <Input type="submit" inputValue="Enviar" disabled={loading} /> 
            ) : (
              <Button type="form" disabled={loading} onClick={() => handleNextPage(activeTab)}>
                Próximo
              </Button>
            )}
          </View>
        </QuestionForm>
      </Container>
    </View>
  );
}
