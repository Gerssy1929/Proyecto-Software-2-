const { createProject } = require('../project');

// Mock de base de datos con proyectos existentes
const existingProjects = [
  { name: 'Proyecto Sistemas Operativos' },
  { name: 'Proyecto UBNF Movil' },
  { name: 'Proyecto Software' },
];

// Mock de usuario registrado
const registeredUser = { id: 1, name: 'German' };

// Prueba unitaria utilizando Jest
describe('Creación de proyecto', () => {
  it('debería crear un proyecto si el usuario está registrado y no existe otro proyecto con el mismo nombre', () => {
    // Datos de prueba
    const projectName = 'NuevoProyecto';

    // Llamar a la función createProject con los datos de prueba
    const result = createProject(projectName, registeredUser, existingProjects);

    // Comprobar que el resultado es verdadero (proyecto creado)
    expect(result).toBe(true);
  });

  it('no debería crear un proyecto si el usuario no está registrado', () => {
    // Datos de prueba
    const projectName = 'Proyecto Ingenieria Economica';
    const unregisteredUser = null;

    // Llamar a la función createProject con los datos de prueba
    const result = createProject(projectName, unregisteredUser, existingProjects);

    // Comprobar que el resultado es falso (proyecto no creado)
    expect(result).toBe(true);
  });

  it('No debería crear un proyecto si ya existe otro proyecto con el mismo nombre', () => {
    // Datos de prueba
    const projectName = 'Proyecto UBNF Movil';

    // Llamar a la función createProject con los datos de prueba
    const result = createProject(projectName, registeredUser, existingProjects);

    // Comprobar que el resultado es falso (proyecto no creado)
    expect(result).toBe(false);
  });
});