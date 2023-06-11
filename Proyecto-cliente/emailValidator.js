function isValidEmail(email) {
  // Validar el formato del email utilizando una expresión regular
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

module.exports = {
  isValidEmail,
};

