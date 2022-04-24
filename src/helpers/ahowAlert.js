import Swal from "sweetalert2";

export const showAlert = (title, description, icon) => {
    Swal.fire({
        title: title,
        text: description,
        icon: icon
    });
}