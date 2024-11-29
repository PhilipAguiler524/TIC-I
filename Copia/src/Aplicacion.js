function Mynav() {
    return(
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark border-bottom border-body text-muted justify-content-center fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand">SensorCheck</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggle-icon"></span>
                </button>
            </div>
        </nav>
    );
}

function MyLinks(){
    return(
        <section class="mt-3 container-fluid">
            <h1 class="m-3 mb-5" id="Header"></h1> 
            <div class="text-bg-dark border-bottom border-3 rounded border-success m-3 mb-5 p-3">
                <a to="ingreso" class="btn btn-success">Ver Sensor</a>
                <p>Revise un sensor registrado en el sistema</p>
            </div>
            <div class="text-bg-dark border-bottom border-3 rounded border-success m-3 mb-5 p-3">
                <a to="registro" class="btn btn-success">Registrar Sensor</a>
                <p>Registre un nuevo sensor en el sistema</p>
            </div>
            </section>
    );
}

export default function MyApp() {
    return( 
        <div>
            <Mynav />
            <MyLinks />
        </div>
    );
}