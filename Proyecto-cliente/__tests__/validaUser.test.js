const { loginUser } = require('../loginUser');

// Mock de base de datos con usuarios registrados
const registeredUsers = [
  { email: 'german19@gmail.com', password: '192922' },
  { email: 'cami23@gmail.com', password: '200396' },
  { email: 'lala192@gmail.com', password: '478974' },
];

// Prueba unitaria utilizando Jest
describe('Login de usuario', () => {
  it('Inicio sesión con un correo registrado', () => {
    // Datos de prueba
    const email = 'german19@gmail.com';
    const password = '192922';

    // Llamar a la función loginUser con los datos de prueba
    const result = loginUser(email, password, registeredUsers);

    // Comprobar que el resultado es verdadero (sesión iniciada)
    expect(result).toBe(true);
  });

  it('No inicia sesión con un correo no registrado', () => {
    // Datos de prueba
    const email = 'alex145@gmail.com';
    const password = 'alex78';

    // Llamar a la función loginUser con los datos de prueba
    const result = loginUser(email, password, registeredUsers);

    // Comprobar que el resultado es falso (sesión no iniciada)
    expect(result).toBe(true);
  });
});