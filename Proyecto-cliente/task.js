function createTask(taskName, projectId, existingProjects, existingTasks) {
    // Verificar si el proyecto está registrado
    const project = existingProjects.find((project) => project.id === projectId);
    if (!project) {
      return false; // Proyecto no registrado
    }
  
    // Verificar si ya existe otra tarea con el mismo nombre
    const existingTask = existingTasks.find(
      (task) => task.name === taskName && task.projectId === projectId
    );
    if (existingTask) {
      return false; // Tarea con el mismo nombre ya existe
    }
  
    // Crear la nueva tarea (aquí puedes implementar la lógica de almacenamiento, por ejemplo, guardar en una base de datos)
    const newTask = { name: taskName, projectId };
    // ... lógica adicional ...
  
    return true; // Tarea creada exitosamente
  }
  
  module.exports = {
    createTask,
  };