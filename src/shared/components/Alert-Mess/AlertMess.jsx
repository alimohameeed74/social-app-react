import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
export default function AlertMess({ mess, status }) {
  return (
    <Alert color={status} icon={HiInformationCircle}>
      {mess}.
    </Alert>
  );
}
