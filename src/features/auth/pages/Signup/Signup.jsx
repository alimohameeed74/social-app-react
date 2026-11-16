import { Button, FloatingLabel, Select } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import ErrorMsg from "../../../../shared/components/Error-Message/ErrorMsg";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
    getValues,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      dateOfBirth: new Date().toISOString().split("T")[0],
      gender: "male",
      password: "",
      rePassword: "",
    },
    mode: "all",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  function togglePassword() {
    setShowPassword(!showPassword);
  }
  function toggleRePassword() {
    setShowRePassword(!showRePassword);
  }

  function createAccount(data) {
    console.log(data);
  }

  function resetForm() {
    reset();
  }
  return (
    <>
      <div className="w-75 sm:w-125 p-5 bg-white rounded-2xl relative">
        <h2 className="font-extrabold text-2xl text-blue-500 mb-2">
          Create New Account
        </h2>

        <p className="font-normal text-[14px] text-gray-400 mb-4">
          Register to our social app.
        </p>

        <form
          onSubmit={handleSubmit(createAccount)}
          className="py-3 h-125 overflow-y-auto scrollbar-none"
        >
          {/* Full Name */}
          <div className=" w-full mb-6 ">
            <FloatingLabel
              variant="standard"
              label="Full Name"
              className="text-black!"
              {...register("name", {
                required: {
                  value: true,
                  message: "Full Name is required.",
                },
                pattern: {
                  value: /^[a-zA-Z ]{3,}$/,
                  message: "Full Name must be at least 3 characters long.",
                },
              })}
            />

            {errors.name && touchedFields.name ? (
              <ErrorMsg mess={errors.name.message} />
            ) : (
              <></>
            )}
          </div>

          {/* Username */}
          <div className=" w-full mb-6 ">
            <FloatingLabel
              variant="standard"
              label="Username"
              className="text-black!"
              {...register("username", {
                required: {
                  value: true,
                  message: "Username is required.",
                },
                pattern: {
                  value: /^[a-zA-Z ]{3,}$/,
                  message: "Username must be at least 3 characters long.",
                },
              })}
            />
            {errors.username && touchedFields.username ? (
              <ErrorMsg mess={errors.username.message} />
            ) : (
              <></>
            )}
          </div>

          {/* Email */}
          <div className=" w-full mb-6 ">
            <FloatingLabel
              variant="standard"
              label="Email Address"
              className="text-black!"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required.",
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email.",
                },
              })}
            />
            {errors.email && touchedFields.email ? (
              <ErrorMsg mess={errors.email.message} />
            ) : (
              <></>
            )}
          </div>

          {/* Gender */}
          <div className="w-full mb-6">
            <label
              htmlFor="gender"
              className="block mb-2.5 text-sm text-black font-medium"
            >
              Gender
            </label>

            <Select
              id="gender"
              className="mb-6"
              theme={{
                field: {
                  select: {
                    base: "block w-full px-3 py-2.5 text-sm text-black! focus:ring-0!  bg-white! border border-default-medium rounded-[10px]  shadow-xs placeholder:text-body",
                  },
                },
              }}
              {...register("gender")}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </div>

          {/* DOB */}

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              min="1950-01-01"
              max={new Date().toISOString().split("T")[0]}
              {...register("dateOfBirth")}
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            />
          </div>

          {/* password */}
          <div className="mb-6">
            <div className="relative z-0 w-full  group">
              <FloatingLabel
                variant="standard"
                label="Password"
                type={showPassword ? "text" : "password"}
                className="text-black!"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Must contain uppercase, lowercase, number and special character, with at least 8 characters.",
                  },
                })}
              />

              <i
                onClick={togglePassword}
                className={`fa-solid absolute inset-e-0 top-1/2 text-gray-400 text-[14px] cursor-pointer ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
              ></i>
            </div>
            {errors.password && touchedFields.password ? (
              <ErrorMsg mess={errors.password.message} />
            ) : (
              <></>
            )}
          </div>

          {/* rePassword */}
          <div className="mb-6">
            <div className="relative z-0 w-full  group">
              <FloatingLabel
                variant="standard"
                label="Confirm Password"
                type={showRePassword ? "text" : "password"}
                className="text-black!"
                {...register("rePassword", {
                  required: {
                    value: true,
                    message: "Confirm Password is Required",
                  },
                  validate: (value) => {
                    if (getValues("password") !== value) {
                      return "Passwords do not match.";
                    }
                  },
                })}
              />

              <i
                onClick={toggleRePassword}
                className={`fa-solid absolute inset-e-0 top-1/2 text-gray-400 text-[14px] cursor-pointer ${showRePassword ? "fa-eye-slash" : "fa-eye"}`}
              ></i>
            </div>
            {errors.rePassword && touchedFields.rePassword ? (
              <ErrorMsg mess={errors.rePassword.message} />
            ) : (
              <></>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center">
            <Button
              disabled={!isValid}
              type="submit"
              className="text-white bg-brand box-border disabled:cursor-not-allowed disabled:bg-gray-300 border border-transparent hover:bg-brand-strong shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5"
            >
              Create
            </Button>

            <Button
              type="button"
              onClick={resetForm}
              className="text-gray-700! bg-gray-200! box-border border border-transparent hover:bg-gray-700! hover:text-white! shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5"
            >
              Cancel
            </Button>
          </div>
        </form>

        <span className="text-sm text-body block text-center pt-3">
          Have an account?{" "}
          <Link
            to="/auth/signin"
            className="hover:decoration-1 hover:underline"
          >
            Sign in
          </Link>
        </span>
      </div>
    </>
  );
}
