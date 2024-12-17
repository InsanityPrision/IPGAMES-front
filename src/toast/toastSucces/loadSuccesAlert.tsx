import { toast } from "react-toastify";

const loadSuccesAlert = (message: string, image: string) => {
  return toast.success(message, {
    icon: <img src={`/${image}.svg`} alt="" />,
    closeButton: false,
    autoClose: 2000,
  });
};

export default loadSuccesAlert;
