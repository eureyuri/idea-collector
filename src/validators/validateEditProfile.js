export default function validateEditProfile(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "A username is required";
  }

  if (!values.email) {
    errors.email = "A email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.currentPassword) {
    errors.currentPassword = "Current password is required";
  } else if (values.currentPassword.length < 6) {
    errors.currentPassword = "Current password must be at least 6 characters";
  }

  if (values.newPassword.length < 6) {
    errors.newPassword = "New password must be at least 6 characters";
  }

  return errors;
}
