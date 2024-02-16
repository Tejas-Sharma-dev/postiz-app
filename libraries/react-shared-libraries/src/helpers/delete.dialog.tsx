import Swal from "sweetalert2";

export const deleteDialog = async (message: string, confirmButton?: string) => {
    const fire = await Swal.fire({
        title: 'Are you sure?',
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: confirmButton || 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
    });

    return fire.isConfirmed;
}
