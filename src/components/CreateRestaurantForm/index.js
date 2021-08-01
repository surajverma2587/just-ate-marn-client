import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import FormInput from "../FormInput";
import Title from "../Title";
import LoadingSpinner from "../LoadingSpinner";
import ErrorCard from "../ErrorCard";
import { CREATE_RESTAURANT } from "../../graphql/mutations";

import "./CreateRestaurantForm.css";

const CreateRestaurantForm = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createRestaurant, { data, error, loading }] = useMutation(
    CREATE_RESTAURANT,
    {
      onCompleted: (data) => {
        history.push(`/restaurants/${data.createRestaurant.id}`);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const onSubmit = async (formData) => {
    await createRestaurant({
      variables: {
        createRestaurantInput: formData,
      },
    });
  };

  if (loading) {
    return <LoadingSpinner message="Creating your restaurant" />;
  }

  if (error) {
    return <ErrorCard />;
  }

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
