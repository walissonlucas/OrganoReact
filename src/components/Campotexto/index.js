import './CampoTexto.css'

const CampoTexto = (props) => {

    //let valor = ''

    const Digitado = (evento) => {
        props.Alterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={Digitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto