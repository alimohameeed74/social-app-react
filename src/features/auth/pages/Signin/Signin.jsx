import { Button, FloatingLabel, Spinner } from "flowbite-react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ErrorMsg from "../../../../shared/components/Error-Message/ErrorMsg";
import { toasterContext } from "../../../../shared/contexts/ToastContext/ToastContext";
import axios from "axios";
import { API_URL } from "../../../../shared/consts/Constants";
import { authContext } from "../../../../shared/contexts/AuthContext/AuthContext";

const loginSchema = z.object({
  email: z.email("Please enter a valid email.").nonempty("Email is Required."),
  password: z
    .string()
    .nonempty("Password is Required.")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must contain uppercase, lowercase, number and special character, with at least 8 characters.",
    ),
});

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { showToast, hideToast } = useContext(toasterContext);
  const { setUserInfo } = useContext(authContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid, isSubmitting, errors, touchedFields },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
    resolver: zodResolver(loginSchema),
  });

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  async function submit(data) {
    hideToast();
    try {
      const result = await axios.request({
        method: "POST",
        url: `${API_URL}/users/signin`,
        data: data,
      });
      showToast(true, result.data.message);
      localStorage.setItem("token_", result.data.data.token);
      setUserInfo(result.data.data.user);
      navigate("/system");
    } catch (error) {
      showToast(false, error.response.data.message);
    }
  }

  function resetForm() {
    reset();
    setShowPassword(false);
  }

  return (
    <>
      <div className="w-75 sm:w-125 p-5 bg-white rounded-2xl relative">
        <h2 className="font-extrabold text-2xl text-blue-500 mb-2">Sign in</h2>

        <p className="font-normal text-[14px] text-gray-400 mb-4">
          Sign in and continue your social journey.
        </p>

        <form
          onSubmit={handleSubmit(submit)}
          className="py-3 h-fit overflow-y-auto scrollbar-none"
        >
          {/* Email */}
          <div className=" w-full mb-6 ">
            <FloatingLabel
              variant="standard"
              label="Email Address"
              className="text-black!"
              {...register("email")}
            />
            {errors.email && touchedFields.email ? (
              <ErrorMsg mess={errors.email.message} />
            ) : (
              <></>
            )}
          </div>

          {/* password */}
          <div className="mb-6">
            <div className="relative z-0 w-full  group">
              <FloatingLabel
                variant="standard"
                label="Password"
                type={showPassword ? "text" : "password"}
                className="text-black!"
                {...register("password")}
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

          {/* Actions */}
          <div className="flex justify-between items-center">
            <Button
              disabled={!isValid || isSubmitting}
              type="submit"
              className="text-white bg-brand box-border disabled:cursor-not-allowed! disabled:bg-gray-600! border border-transparent hover:bg-brand-strong shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5"
            >
              {isSubmitting ? (
                <>
                  <Spinner
                    size="sm"
                    aria-label="Info spinner example"
                    className="me-3"
                    light
                  />
                  Signing in
                </>
              ) : (
                "Sign in"
              )}
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
          Don't have an account?{" "}
          <Link
            to="/auth/signup"
            className="hover:decoration-1 hover:underline"
          >
            Sign up
          </Link>
        </span>
      </div>
    </>
  );
}
