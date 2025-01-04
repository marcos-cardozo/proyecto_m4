import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  timer: 3000,
  timerProgressBar: true,
  showConfirmButton: false
});

export default Toast;
