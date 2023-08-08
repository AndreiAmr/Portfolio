import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import * as yup from 'yup';
import { useToast } from '@chakra-ui/react';

const initialValues = {
  name: '',
  email: '',

  title: '',
  description: '',
};

const validationSchema = yup.object().shape({
  name: yup.string().required('Nome não pode ser vazio.'),
  email: yup
    .string()
    .email('E-mail deve ser válido.')
    .required('E-mail é obrigatório.'),

  title: yup.string().required('Titulo não pode ser vazio.'),
  description: yup.string().required('Descrição é obrigatória.'),
});

const useContact = () => {
  const toast = useToast();

  const { values, handleChange, handleSubmit, errors, resetForm } = useFormik({
    initialValues,
    onSubmit: async (prop) => {
      await emailjs.send('service_brhbk4p', 'template_h9dlfng', {
        from_name: prop.name,
        title: prop.title,
        message: prop.description,
        from_email: prop.email,
      });

      resetForm();

      toast({
        description: 'Copiado com sucesso !',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    },
    validationSchema,
  });

  return {
    items: {
      values,
      errors,
    },
    handlers: {
      handleChange,
      handleSubmit,
    },
  };
};

export default useContact;
