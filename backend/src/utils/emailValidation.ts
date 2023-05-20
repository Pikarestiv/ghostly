// validation.js
const validateEmail = (email: string) => {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Validate email format
  return emailRegex.test(email);
};

module.exports = { validateEmail };