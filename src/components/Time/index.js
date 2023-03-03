import Usuario from '../Usuario'
import './Time.css'

const Time = (props) => {
    const cor1 = { borderColor: props.corPrimaria }
    const cor2 = { backgroundColor: props.corSecundaria }
 
    return(
        (props.usuarios.length > 0) && <section className='time' style={cor2}>
            <h3 style={cor1}>{props.nome}</h3>
            <div className='usuarios'>
                {props.usuarios.map(usuario => <Usuario corDeFundo={props.corPrimaria} key={usuario.nome} nome={usuario.nome} cargo={usuario.cargo} imagem={usuario.imagem}/> )}
            </div>
        </section>
            
    )
}

export default Time