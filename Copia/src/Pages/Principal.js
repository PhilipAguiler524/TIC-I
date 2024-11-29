function MainForm(){
    return(
        <section>
        <h2>Sensor XXXXXXXX</h2>
        <a to="config" class="btn btn-success">Configuración</a>
        </section>
    );
}

export default function MainPage(){
    return(
        <div>
            <MainForm />
        </div>
    );
}