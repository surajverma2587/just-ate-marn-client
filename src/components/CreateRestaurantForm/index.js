import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

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

  const onSubmit = (formData) => {
    createRestaurant({
      variables: {
        createRestaurantInput: formData,
      },
    });
  };

  return (
    <Container className="border p-4 my-3">
      <h2 className="px-3 text-center my-4">Create Restaurant Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="my-3 px-3">
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <div class="form-text text-danger">Restaurant name is required</div>
          )}
        </div>

        <div class="mb-3 px-3">
          <input
            type="text"
            class="form-control"
            placeholder="Address"
            {...register("address", { required: true })}
          />
          {errors.address && (
            <div class="form-text text-danger">
              Restaurant address is required
            </div>
          )}
        </div>

        <div class="mb-3 px-3">
          <input
            type="text"
            class="form-control"
            placeholder="Post code"
            {...register("postCode", { required: true })}
          />
          {errors.postCode && (
            <div class="form-text text-danger">
              Restaurant post code is required
            </div>
          )}
        </div>

        <div class="mb-3 px-3">
          <input
            type="text"
            class="form-control"
            placeholder="Phone number"
            {...register("phoneNumber", { required: true })}
          />
          {errors.phoneNumber && (
            <div class="form-text text-danger">
              Restaurant phone number is required
            </div>
          )}
        </div>

        <div class="mb-3 px-3">
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            {...register("email")}
          />
        </div>

        <div class="mb-3 px-3">
          <input
            type="text"
            class="form-control"
            placeholder="Description"
            {...register("description")}
          />
        </div>

        <div class="mb-3 px-3">
          <input
            type="text"
            class="form-control"
            placeholder="Banner URL"
            {...register("bannerUrl", { required: true })}
          />
          {errors.bannerUrl && (
            <div class="form-text text-danger">
              Restaurant banner URL is required
            </div>
          )}
        </div>

        <div class="mb-3 px-3">
          <input
            type="text"
            class="form-control"
            placeholder="Delivery estimate"
            {...register("deliveryEstimate")}
          />
        </div>

        <div className="d-grid gap-2 px-3">
          <Button variant="primary" size="lg" type="submit">
            Create Restaurant
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default CreateRestaurantForm;
