import * as yup from "yup"

export const formSchemaNewTech = yup.object().shape({
    title:yup.string().required("O nome da tecnologia é obrigatório!"),
    status: yup.string().required("O status da tecnologia é obrigatório!")
})