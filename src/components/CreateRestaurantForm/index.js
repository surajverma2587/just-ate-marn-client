import { useForm } from "react-hook-form";

const CreateRestaurantForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("name", { required: true })}
          placeholder="Restaurant name"
        />
        {errors.name && "Restaurant name is required"}
      </div>
      <div>
        <input
          {...register("address", { required: true })}
          placeholder="Restaurant address"
        />
        {errors.address && "Restaurant address is required"}
      </div>
      <div>
        <input
          {...register("postCode", { required: true })}
          placeholder="Restaurant post code"
        />
        {errors.postCode && "Restaurant post code is required"}
      </div>
      <div>
        <input
          {...register("phoneNumber", { required: true })}
          placeholder="Restaurant phone number"
        />
        {errors.phoneNumber && "Restaurant phone number is required"}
      </div>
      <div>
        <input {...register("email")} placeholder="Restaurant email" />
      </div>
      <div>
        <input
          {...register("description")}
          placeholder="Restaurant description"
        />
      </div>
      <div>
        <input
          {...register("bannerUrl", { required: true })}
          placeholder="Restaurant banner url"
        />
        {errors.bannerUrl && "Restaurant banner url is required"}
      </div>
      <div>
        <input
          {...register("deliveryEstimate")}
          placeholder="Restaurant delivery estimate"
        />
      </div>

      <input type="submit" />
    </form>
  );
};

export default CreateRestaurantForm;
