(() => {

    // Arreglo de temperaturas en Celsius
    const celsiusTemperatures = [33.6, 12.34];

    // Dirección IP del servidor
    const serverIpAddress = '123.123.123.123';

    // Listado de usuarios
    const users = [
        { id: 1, email: 'fernando@google.com' },
        { id: 2, email: 'juan@google.com' },
        { id: 3, email: 'melissa@google.com' }
    ];

    // Listado de correos electrónicos
    const userEmails = users.map(user => user.email);

    // Variables booleanas de un videojuego
    const isJumping = false;
    const isRunning = true;
    const hasNoItems = true;
    const isLoading = false;

    // Tiempo inicial
    const startTime = new Date().getTime();

    // ...

    // Tiempo transcurrido
    const elapsedTime = new Date().getTime() - startTime;

    // Obtiene los libros
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // Obtiene libros desde una URL
    function getBooksByUrl(url: string) {
        throw new Error('Function not implemented.');
    }

    // Obtiene el área de un cuadrado
    function calculateSquareArea(sideLength: number) {
        throw new Error('Function not implemented.');
    }

    // Imprime el trabajo si está activo
    function printJobIfActive() {
        throw new Error('Function not implemented.');
    }
    
    




})();
console.log('Ejercicio 02 ejecutado');



