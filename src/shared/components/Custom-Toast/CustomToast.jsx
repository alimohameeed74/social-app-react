import { Toast, ToastToggle } from "flowbite-react";
import { HiCheck, HiX } from "react-icons/hi";

export default function CustomToast({ type, message }) {
  const isSuccess = type === "success";
  return (
    <>
      <div className="absolute top-5 right-5 w-70 z-50">
        <Toast
          className={
            isSuccess
              ? "bg-green-100! border border-green-200!"
              : "bg-red-100! border border-red-200!"
          }
        >
          <div
            className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
              isSuccess
                ? "bg-green-200 text-green-600"
                : "bg-red-200 text-red-600"
            }`}
          >
            {isSuccess ? (
              <HiCheck className="h-5 w-5" />
            ) : (
              <HiX className="h-5 w-5" />
            )}
          </div>

          <div className="ml-3 text-xs font-normal text-gray-900">
            {message}
          </div>

          <ToastToggle
            className={`bg-transparent! ${isSuccess ? "text-green-600! hover:text-green-600!" : "text-red-600! hover:text-red-600!"} `}
          />
        </Toast>
      </div>
    </>
  );
}
