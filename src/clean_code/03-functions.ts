(() => {

    // Obtener información de una película por ID
    function getMovieById(movieId: string): void {
        console.log({ movieId });
    }

    // Obtener el elenco de una película por ID
    function getMovieCastById(movieId: string): void {
        console.log({ movieId });
    }

    // Obtener la biografía de un actor por ID
    function getActorBiographyById(actorId: string): void {
        console.log({ actorId });
    }


    // Crear una película
    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }

    function createMovie(movie: Movie): void {
        const { title, description, rating, cast } = movie;

        console.log({
            title,
            description,
            rating,
            cast
        });
    }


    // Crear un actor si no existe
    function createActor(
        fullName: string,
        birthDate: Date
    ): boolean {

        // Tarea asíncrona para verificar el nombre
        // ...

        if (fullName.toLowerCase() === 'fernando') {
            return false;
        }

        console.log('Crear actor', {
            fullName,
            birthDate
        });

        return true;
    }


    // Pruebas
    getMovieById('1');

    getMovieCastById('1');

    getActorBiographyById('101');

    createMovie({
        title: 'Avengers',
        description: 'Película de superhéroes',
        rating: 9,
        cast: ['Robert Downey Jr.', 'Chris Evans']
    });

    console.log(
        createActor('Juan Pérez', new Date('1990-05-15'))
    );

})();

