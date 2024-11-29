import '../Others/EstiloR.css';
import { useState } from 'react';

function ConfigForm(){
    const [inputs,setInputs] = useState({});

    const handleChange = (event) => {
      const name= event.target.name;
      const value= event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) =>{
      event.preventDefault();
      alert(inputs);
    }

    <div class="container">
            <div class="form-card text-bg-dark border border-3 border-success container pt-5 rounded shadow p-4 mb-4" id="registro">
              <h2>Configuración:</h2>
              <form class="" onSubmit={handleSubmit}>
                <label for="reg-text">Umbral de Temperatura (°C)</label>
                <input type="text" id="reg-text" name="temp" value={inputs.temp || ""} onChange={handleChange}/>
          
                <label for="reg-text">Umbral de Sonido (dB)</label>
                <input type="text" id="reg-text" name="sound" value={inputs.sound || ""} onChange={handleChange}/>
          
                <label for="reg-text">Umbral de Luz</label>
                <input type="text" id="reg-text" name="light" value={inputs.light || ""} onChange={handleChange}/>

                <label for="reg-text">Umbral de Fuego</label>
                <input type="text" id="reg-text" name="fire" value={inputs.fire || ""} onChange={handleChange}/>
          
                <div class="checkbox-wrapper">
                  <input type="checkbox" id="terms" name="terms" />
                  <label for="terms">Recibir Notificaciones</label>
                </div>
                
                <button class="btn btn-success" type="submit">Guardar Cambios</button>
              </form>
            </div>
          </div>
}

export default function Config(){
    return(
        <ConfigForm />
    );
}