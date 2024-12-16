export const validateSignupForm = (formData) => {
  let isValid = true;

  const errors = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  if (!formData.name.trim()) {
    errors.name = "Name is required";
    isValid = false;
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email is invalid";
    isValid = false;
  }

  if (!formData.password) {
    errors.password = "Password is required";
    isValid = false;
  } else if (formData.password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
    isValid = false;
  }

  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
    isValid = false;
  }

  return { isValid, errors };
};
