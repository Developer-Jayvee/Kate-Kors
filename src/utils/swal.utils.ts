import Swal from "sweetalert2";

export const swal = {
  error: (title: string) => {
    return Swal.fire({
      title: title,
      icon: "error",
      confirmButtonText: "Continue",
      cancelButtonText: "Cancel",
    });
  },
  success : (title : string) => {
    return Swal.fire({
        title:title,
        icon:"success",
        showConfirmButton:true,
        showCancelButton:false,
        showDenyButton:false,
    })
  },
  question: (
    question: string,
    confirmTxt = "Confirm",
    cancelText = "Cancel",
  ) => {
    return Swal.fire({
      title: question,
      showDenyButton: true,
      confirmButtonText: confirmTxt,
      denyButtonText: cancelText,
    });
  },
  loading: () => {
    return Swal.fire({
      title: "Please Wait",
      html: "Processing your request...",
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  },
  close: () => Swal.close(),
};
