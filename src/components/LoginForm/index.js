import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import FormInput from "../FormInput";
import Title from "../Title";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const LOGIN = gql`
  mutation Mutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      token
      user {
        id
        email
      }
    }
  }
`;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login] = useMutation(LOGIN);

  const history = useHistory();

  const { onLogin } = useContext(UserContext);

  const onSubmit = async (formData) => {
    try {
      const { data } = await login({
        variables: {
          loginInput: formData,
        },
      });

      if (data.login) {
        const {
          token,
          user: { email, id },
        } = data.login;

        onLogin({
          id,
          email,
          token,
        });
        history.push(`/`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="form-container">
      <Title text="Login Form" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          placeholder="Email address"
          error={errors.email}
          register={register("email", { required: true })}
        />
        <FormInput
          placeholder="Password"
          type="password"
          error={errors.password}
          register={register("password", { required: true })}
        />
        <div className="button-block">
          <Button variant="primary" size="lg" type="submit">
            Login
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default LoginForm;
