import '../Others/EstiloR.css';
import { useState } from 'react';

function RegisterForm() {
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
              <h2>Registrar Sensor</h2>
              <form class="" onSubmit={handleSubmit}>
                <label for="reg-name">Ingrese número de sensor</label>
                <input type="text" id="reg-name" name="name" value={inputs.name || ""} onChange={handleChange} required />
          
                <label for="reg-email">Ingresa tu correo electrónico</label>
                <input type="email" id="reg-email" name="email" value={inputs.email || ""} onChange={handleChange} required />
          
                <label for="reg-password">Crea una contraseña</label>
                <input type="password" id="reg-password" name="password" value={inputs.password || ""} onChange={handleChange} required />
          
                <label for="reg-confirm-password">Confirma tu contraseña</label>
                <input type="password" id="reg-confirm-password" name="confirm-password" required />
          
                <div class="checkbox-wrapper">
                  <input type="checkbox" id="terms" name="terms" value={inputs.terms || ""} onChange={handleChange} required />
                  <label for="terms">Acepto todos los términos y condiciones</label>
                </div>
                
                <button class="btn btn-success" type="submit">Registrar Sensor</button>
              </form>
            </div>
    </div>
}

export default function Registro() {
    return(
      <div>
          <RegisterForm />
      </div>
    );
}