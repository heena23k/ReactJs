import React from "react";
import "./form.css";
import { useForm } from "react-hook-form";

const FormVal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const password=watch(password);


  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        {/* Email Field */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Email is invalid",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        {/* Password Field */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              // validate: value =>value=== Password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </div>

        {/* Age Field */}
        <div>
          <label>Age:</label>
          <input
            type="number"
            {...register("age", {
              required: "Age is required",
              min: {
                value: 18,
                message: "You must be at least 18 years old",
              },
            })}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>

        {/* Gender Field */}
        <div>
          <label>Gender:</label>
          <select
            {...register("gender", {
              required: "Gender is required",
            })}
          >
            <option value="">Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="others">Others</option>
          </select>
          {errors.gender && <span>{errors.gender.message}</span>}
        </div>

        {/* Submit Button */}
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormVal;
