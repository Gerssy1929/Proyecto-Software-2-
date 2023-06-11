function createProject(projectName, user, existingProjects) {
    // Verificar si el usuario está registrado
    if (!user) {
      return false; // Usuario no registrado
    }
  
    // Verificar si ya existe un proyecto con el mismo nombre
    const existingProject = existingProjects.find(
      (project) => project.name === projectName
    );
    if (existingProject) {
      return false; // Proyecto con el mismo nombre ya existe
    }
  
    // Crear el nuevo proyecto (aquí puedes implementar la lógica de almacenamiento, por ejemplo, guardar en una base de datos)
    const newProject = { name: projectName };
    // ... lógica adicional ...
  
    return true; // Proyecto creado exitosamente
  }
  
  module.exports = {
    createProject,
  };