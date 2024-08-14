import { useEffect } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

interface Props {
  error: string;
  cb?: () => void;
}

const ErrorFetch = ({ error, cb }: Props) => {
  useEffect(() => {
    Swal.fire({
      toast: true,
      text: error,
      color: "#ea868f",
      timerProgressBar: true,
      timer: 3000,
      position: "bottom-right",
      icon: "error",
      iconColor: "#ea868f",
      background: "#842029",
      showCancelButton: false,
      showConfirmButton: false,
    }).then(cb);
  }, [error]);

  return null;
};

export { ErrorFetch };
