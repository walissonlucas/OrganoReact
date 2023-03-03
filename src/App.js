import { useState } from 'react';
import Banner from './components/Banner/index.js';
import Footer from './components/Footer/index.js';
import Formulario from './components/Formulario/index.js';
import Time from './components/Time/index.js';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'UX & Design',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    }
  ]

  const [usuarios, setUsuarios] = useState([])

  const usuarioAdd = (usuario) => {
    debugger
    setUsuarios([...usuarios, usuario])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        usuarioCadastrado={usuario => usuarioAdd(usuario)}
        times={times.map(time => time.nome)}  
      />
      
      {times.map(time => <Time  
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        usuarios={usuarios.filter(usuario => usuario.time === time.nome)}/>)
      }
      <Footer />
    </div>
  );
}

export default App;
