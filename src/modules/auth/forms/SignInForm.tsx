import { Formik, Form, FormikProps } from "formik";
import { account, ID } from "config";
import * as Yup from "yup";

interface IType {
  children: (
    props: FormikProps<{ email: string; password: string }>
  ) => React.ReactElement | React.ReactElement[];
  className?: string;
}

const SignInForm = ({ children, className }: IType) => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values) => {
      account.createEmailSession(values.email, values.password);
      console.log(values.email, values.password);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string().required().email(),
      password: Yup.string()
        .min(8, "Password should at least be 8 characters")
        .required("Required Field"),
    })}
  >
    {(props) => <Form {...{ className }}>{children(props)}</Form>}
  </Formik>
);

export default SignInForm;
