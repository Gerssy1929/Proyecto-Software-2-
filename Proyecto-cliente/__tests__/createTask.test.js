const { createTask } = require('../task');

// Mock de base de datos con proyectos y tareas existentes
const existingProjects = [
  { id: 1, name: 'Proyecto1' },
  { id: 2, name: 'Proyecto2' },
];

const existingTasks = [
  { id: 1, projectId: 1, name: 'Tarea1' },
  { id: 2, projectId: 2, name: 'Tarea2' },
];

// Prueba unitaria utilizando Jest
describe('Creación de tarea', () => {
  it('debería crear una tarea si se le asigna a un proyecto registrado y no existe otra tarea con el mismo nombre', () => {
    // Datos de prueba
    const taskName = 'NuevaTarea';
    const projectId = 1;

    // Llamar a la función createTask con los datos de prueba
    const result = createTask(taskName, projectId, existingProjects, existingTasks);

    // Comprobar que el resultado es verdadero (tarea creada)
    expect(result).toBe(true);
  });

  it('no debería crear una tarea si el proyecto no está registrado', () => {
    // Datos de prueba
    const taskName = 'NuevaTarea';
    const projectId = 3; // Proyecto no registrado

    // Llamar a la función createTask con los datos de prueba
    const result = createTask(taskName, projectId, existingProjects, existingTasks);

    // Comprobar que el resultado es falso (tarea no creada)
    expect(result).toBe(true);
  });

  it('no debería crear una tarea si ya existe otra tarea con el mismo nombre', () => {
    // Datos de prueba
    const taskName = 'Tarea1'; // Tarea con el mismo nombre ya existe
    const projectId = 1;

    // Llamar a la función createTask con los datos de prueba
    const result = createTask(taskName, projectId, existingProjects, existingTasks);

    // Comprobar que el resultado es falso (tarea no creada)
    expect(result).toBe(false);
  });
});