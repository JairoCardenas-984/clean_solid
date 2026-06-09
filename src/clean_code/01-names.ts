(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const fs = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const arhivos = fs.map( f => f.flagged );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
     // Fecha actual
    const currentDate = new Date();

    // Días transcurridos
    const elapsedDays = 23;

    // Número de archivos en un directorio
    const filesInDirectory = 33;

    // Primer nombre
    const firstName = 'Fernando';

    // Apellido
    const lastName = 'Herrera';

    // Días desde la última modificación
    const daysSinceLastModification = 12;

    // Cantidad máxima de clases por estudiante
    const maxClassesPerStudent = 6;

})();
console.log('Ejercicio 01 ejecutado');
