import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";

interface IType {
  children: (
    props: FormikProps<{ email: string; password: string }>
  ) => React.ReactElement[] | React.ReactElement;
}

const SignUpForm = ({ children }: IType) => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={() => {}}
    validationSchema={Yup.object().shape({
      email: Yup.string().required().email(),
      password: Yup.string().required(),
    })}
  >
    {(props) => <Form>{children(props)}</Form>}
  </Formik>
);

export default SignUpForm;
