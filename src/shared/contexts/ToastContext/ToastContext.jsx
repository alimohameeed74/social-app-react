import { createContext, useState } from "react";
import CustomToast from "../../components/Custom-Toast/CustomToast";

// eslint-disable-next-line react-refresh/only-export-components
export const toasterContext = createContext();

export default function ToasterProvider({ children }) {
  const [toast, setToast] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [message, setMessage] = useState("");
  function showToast(isSuccess, message) {
    setToast(true);
    setIsSuccess(isSuccess);
    setMessage(message);
  }
  function hideToast() {
    setToast(false);
  }
  return (
    <toasterContext.Provider value={{ showToast, hideToast }}>
      {children}

      {toast ? (
        <CustomToast type={isSuccess ? "success" : "fail"} message={message} />
      ) : (
        <></>
      )}
    </toasterContext.Provider>
  );
}
