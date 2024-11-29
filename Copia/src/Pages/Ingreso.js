import '../others/EstiloI.css';
import { useState } from 'react';

function LoginForm(){
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

            <form class="text-bg-dark border border-3 border-success container pt-5 rounded shadow p-4 mb-4" onSubmit={handleSubmit}>
              <h2>Login</h2>
              <div class="mb-3 mt-3">
                <label for="Usuario" class="form-label" id="username">Número de Sensor</label><br />
                <input class="form-control" type="text" placeholder="Número de Sensor" name="number" value={inputs.number} onChange={handleChange} required></input>
              </div>
              <div class="mb-3">
                <label for="pwd" class="form-label">Contraseña</label>
                <input class="form-control" type="password" placeholder="Contraseña" name="password" value={inputs.password} onChange={handleChange} required></input><br />
              </div>
              <div class="form-check mb-3">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox">Recuerdame</input>
                </label>
              </div>
              <button type="submit" class="btn btn-success">Ingresar</button>
            </form>
}

export default function Ingreso(){
    return(
            <LoginForm />
    );
}