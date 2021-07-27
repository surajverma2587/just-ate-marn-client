import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";

import FormInput from "../FormInput";

import "./CreateRestaurantForm.css";
import Title from "../Title";

const CREATE_RESTAURANT = gql`
  mutation Mutation($createRestaurantInput: CreateRestaurantInput!) {
    createRestaurant(input: $createRestaurantInput) {
      id
      name
      address
      postCode
      phoneNumber
      email
      rating
      ratings
      description
      bannerUrl
      deliveryEstimate
      menu {
        id
      }
    }
  }
`;

const CreateRestaurantForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createRestaurant] = useMutation(CREATE_RESTAURANT);

  const history = useHistory();

  const onSubmit = async (formData) => {
    const { data } = await createRestaurant({
      variables: {
        createRestaurantInput: formData,
      },
    });

    if (data) {
      history.push(`/restaurants/${data.createRestaurant.id}`);
    }
  };

  return (
    <Container className="form-container">
      <Title text="Create Restaurant Form" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          placeholder="Name"
          error={errors.name}
          register={register("name", { required: true })}
        />
        <FormInput
          placeholder="Address"
          error={errors.address}
          register={register("address", { required: true })}
        />
        <FormInput
          placeholder="Postcode"
          error={errors.postCode}
          register={register("postCode", { required: true })}
        />
        <FormInput
          placeholder="Phone Number"
          error={errors.phoneNumber}
          register={register("phoneNumber", { required: true })}
        />
        <FormInput
          placeholder="Email"
          error={errors.email}
          register={register("email", { required: false })}
        />
        <FormInput
          placeholder="Description"
          error={errors.description}
          register={register("description", { required: false })}
        />
        <FormInput
          placeholder="Banner URL"
          error={errors.bannerUrl}
          register={register("bannerUrl", { required: true })}
        />
        <FormInput
          placeholder="Delivery estimate"
          error={errors.deliveryEstimate}
          register={register("deliveryEstimate", { required: false })}
        />

        <div className="button-block">
          <Button variant="primary" size="lg" type="submit">
            Create Restaurant
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default CreateRestaurantForm;
