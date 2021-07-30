import React from "react";
import { useForm } from "react-hook-form";

import FormInput from ".";

export default {
  title: "Components/Atoms/FormInput",
  component: FormInput,
};

export const BasicInput = (props) => {
  const { register } = useForm();

  return (
    <div style={{ width: "75%" }}>
      <FormInput {...props} register={register("name")} />
    </div>
  );
};

export const PasswordInput = (props) => {
  const { register } = useForm();

  return (
    <div style={{ width: "75%" }}>
      <FormInput {...props} register={register("name")} />
    </div>
  );
};

export const WithError = (props) => {
  const { register } = useForm();

  return (
    <div style={{ width: "75%" }}>
      <FormInput {...props} register={register("name", { required: true })} />
    </div>
  );
};

BasicInput.args = {
  placeholder: "First Name",
};

PasswordInput.args = {
  placeholder: "Password",
  type: "password",
};

WithError.args = {
  placeholder: "First Name",
  error: true,
};
