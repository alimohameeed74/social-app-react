import { Button, FloatingLabel } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router";

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <div className="w-75 sm:w-125 p-5 bg-white rounded-2xl relative">
        <h2 className="font-extrabold text-2xl text-blue-500 mb-2">Sign in</h2>

        <p className="font-normal text-[14px] text-gray-400 mb-4">
          Sign in and continue your social journey.
        </p>

        <form className="py-3 h-fit overflow-y-auto scrollbar-none">
          {/* Email */}
          <div className=" w-full mb-6 ">
            <FloatingLabel
              variant="standard"
              label="Email Address"
              className="text-black!"
            />
          </div>

          {/* password */}
          <div className="relative z-0 w-full mb-6 group">
            <FloatingLabel
              variant="standard"
              label="Password"
              type={showPassword ? "text" : "password"}
              className="text-black!"
            />

            <i
              onClick={togglePassword}
              className={`fa-solid absolute inset-e-0 top-1/2 text-gray-400 text-[14px] cursor-pointer ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            ></i>
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center">
            <Button
              type="submit"
              className="text-white bg-brand box-border disabled:cursor-not-allowed disabled:bg-gray-300 border border-transparent hover:bg-brand-strong shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5"
            >
              Sign in
            </Button>

            <Button
              type="button"
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
