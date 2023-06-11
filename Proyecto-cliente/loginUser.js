function loginUser(email, password, registeredUsers) {
    // Buscar en la lista de usuarios registrados
    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );
  
    // Retornar verdadero si se encontró un usuario válido
    return !!user;
  }
  
  module.exports = {
    loginUser,
  };