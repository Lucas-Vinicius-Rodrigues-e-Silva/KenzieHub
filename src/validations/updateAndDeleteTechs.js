import * as yup from "yup"

export const formSchemaUpdateAndDelete = yup.object().shape({
    status: yup.string().required("O status da tecnologia é obrigatório!")
})