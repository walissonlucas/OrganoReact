import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../Campotexto";
import ListaSuspensa from "../ListaSuspensa";
import "./form.css";

const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const Save = (evento) => {
    evento.preventDefault()
    props.usuarioCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setImagem('')
    setCargo('')
    setTime('')
  }

  return (
    <main className="body">
      <section className="formulario">
        <form onSubmit={Save}>
          <h2>Preencha os dados para criar o card</h2>
          <CampoTexto
              obrigatorio={true} 
              label="Nome" 
              placeholder="Digite seu nome" 
              valor={nome}
              Alterado={valor => setNome(valor)}
          />
          <CampoTexto 
              obrigatorio={true} 
              label="Cargo/Posição" 
              placeholder="Digite seu cargo"
              valor={cargo}
              Alterado={valor => setCargo(valor)} 
          />
          <CampoTexto 
              label="Imagem" 
              placeholder="Digite o endereço da imagem"
              valor={imagem}
              Alterado={valor => setImagem(valor)}
          />
          <ListaSuspensa 
              label="Time" 
              itens={props.times}
              valor={time}
              Alterado={valor => setTime(valor)}
          />
          <Botao>
            Criar Card
          </Botao>
        </form>
      </section>
    </main>
  );
};

export default Formulario;
