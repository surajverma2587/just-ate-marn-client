import { useContext } from "react";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import FormInput from "../FormInput";
import Title from "../Title";
import LoadingSpinner from "../LoadingSpinner";
import { UserContext } from "../../context/UserContext";
import { LOGIN } from "../../graphql/mutations";

const LoginForm = ({ redirect = "/" }) => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login, { data, error, loading }] = useMutation(LOGIN, {
    onCompleted: (data) => {
      const {
        token,
        user: { email, id },
      } = data.login;

      onLogin({
        id,
        email,
        token,
      });

      history.push(redirect);
    },
    onError: () => {},
  });

  const { onLogin } = useContext(UserContext);

  const onSubmit = async (formData) => {
    await login({
      variables: {
        loginInput: formData,
      },
    });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

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
        {error && !data && (
          <div className="text-center my-3 text-danger">
            Incorrect email or password. Please try again.
          </div>
        )}
      </form>
    </Container>
  );
};

export default LoginForm;
