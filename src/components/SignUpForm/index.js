import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import FormInput from "../FormInput";
import Title from "../Title";
import LoadingSpinner from "../LoadingSpinner";
import { SIGNUP } from "../../graphql/mutations";

const SignUpForm = ({ redirect = "/login" }) => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signUp, { data, error, loading }] = useMutation(SIGNUP, {
    onCompleted: () => {
      history.push(redirect);
    },
    onError: () => {},
  });

  const onSubmit = async (formData) => {
    await signUp({
      variables: {
        signUpInput: formData,
      },
    });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Container className="form-container">
      <Title text="Sign Up Form" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          placeholder="First name"
          error={errors.firstName}
          register={register("firstName", { required: true })}
        />
        <FormInput
          placeholder="Last name"
          error={errors.lastName}
          register={register("lastName", { required: true })}
        />
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
            Sign Up
          </Button>
        </div>
        {error && !data && (
          <div className="text-center my-3 text-danger">
            Failed to sign up. Please try again.
          </div>
        )}
      </form>
    </Container>
  );
};

export default SignUpForm;
