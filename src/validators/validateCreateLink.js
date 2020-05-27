export default function validateCreateLink(values) {
  let errors = {};

  if (!values.description) {
    errors.description = "A description is required";
  } else if (values.description.length < 5) {
    errors.description = "Description must be at least 10 characters.";
  }

  return errors;
}
