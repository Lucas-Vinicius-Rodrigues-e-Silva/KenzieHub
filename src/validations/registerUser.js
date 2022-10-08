import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório!"),
  email: yup
    .string()
    .required("O email é obrigatório!")
    .email("Email inválido!"),
  password: yup
    .string()
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .matches(/.{8,}/, "Deve ter no minimo 8 digitos")
    .required("A senha é obrigatória!"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ),
  bio: yup.string().required("A bio é obrigatória!"),
  contact: yup
    .string("O contato deve ser composto apenas por números!")
    .required("O telefone de contato é obrigatório!"),
  course_module: yup.string().required("O módulo é obrigatório!"),
});
