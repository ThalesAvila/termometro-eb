import React, { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from '@apollo/client';
import { useForm } from "react-hook-form";
import gql from 'graphql-tag';
import NProgress from 'nprogress';

import { sendForm } from "@/services/hubspot";

import {
  Container,
  Input,
  View,
  Timeline,
  QuestionForm,
  Button,
  DefaultSpan,
} from "@/components/index";
import { HubspotFormData, questionData } from "../../data";
import { useAppContext } from "@/components/AppContext";
import parseLeadInfo from "utils/parseLeadInfo";

const CREATE_LEAD_MUTATION = gql`
  mutation CREATE_LEAD_MUTATION($data: LeadCreateInput!) {
    createLead(data: $data) { 
      name
      id
    }
  }
`;

const UPDATE_LEAD_MUTATION = gql`
  mutation UPDATE_LEAD_MUTATION($id: ID!, $data: LeadUpdateInput) {
    updateLead(id: $id, data: $data) { 
      id
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
  const [leadId, setLeadId] = useState(0);  
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const { updateLeadInfo } = useAppContext();

  const [createLead, { loading: loadingCreate }] = useMutation(CREATE_LEAD_MUTATION, {
    onCompleted: () => { NProgress.done() }
  });
  const [updateLead, { loading: loadingUpdate }] = useMutation(UPDATE_LEAD_MUTATION, {
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
    NProgress.start()    
    const parsedLeadInfo = parseLeadInfo(data)

    delete parsedLeadInfo.contactInformation
    delete parsedLeadInfo.lastname

    if (activeTab === 0) {
      const res = await createLead({
        variables: {
          data: parsedLeadInfo
        }
      });


      setLeadId(res.data.createLead.id)

      const fields = HubspotFormData.map(field => {
        const value = data[field.formPropValue]

        // Hubspot e-mail validation doesn't accept emails that begin
        // with capital letter, therefore we need to parse to lowercase
        const objField = {
          name: field.name,
          value: field.name === 'email' ? typeof value === 'string' && value.toLowerCase() : value
        }

        return objField
      })

      try {
        await sendForm({
          fields,
          portalId: '8797988', // correspondent id from hubspot get forms
          formId: '9dd6cbd6-1fa7-4703-ba49-2881e3e2980b' // correspondent id from hubspot get forms
        })
      } catch (err) {
        console.log(err)
      }
    }

    if (activeTab > 0 && activeTab < 4) {
      await updateLead({
        variables: {
          id: leadId,
          data: parsedLeadInfo
        }
      });
    }

    if (activeTab === 4){
      await updateLead({
        variables: {
          id: leadId,
          data: parsedLeadInfo
        }
      });

      router.push({
        pathname: 'report',
        query: { id: leadId }
      });
      return
    }

    handleNextPage(activeTab)
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
            <img
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
            <Button
              type="submit"
              disabled={loadingCreate || loadingUpdate}
              onClick={() => handleSubmit(onSubmit)}>
                {activeTab !== 4 ? "Próximo" : "Enviar"}
            </Button>
          </View>
        </QuestionForm>
      </Container>
    </View>
  );
}
