
import axios from 'axios'

const _api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HUBSPOT_SUBMISSION_URL
})

interface SendFormFields {
    [key: string]: string
}

interface SendFormProps {
    fields: SendFormFields[]
    portalId: string
    formId: string
}

export const sendForm = async ({ fields, portalId, formId }: SendFormProps) => {
    const res = await _api.post(`/integration/submit/${portalId}/${formId}`, {
        fields
    })

    return res
}