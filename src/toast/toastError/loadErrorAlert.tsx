import { toast } from "react-toastify";

const loadErrorAlert = (message: string) => {
  return toast.error(message, {
    icon: <img src="/error.svg" alt="" />,
    closeButton: false,
    autoClose: 2000,
  });
};

export default loadErrorAlert;
