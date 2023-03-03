import logo from '/home/sabino/organo/src/logo.svg';
import './footer.css'

const Footer = () => {
    return(
        <footer className='foot'>
            <div  className='img1'>
                <h6 className='str'>
                    Criado com React
                </h6>
                <img src={logo} alt='React'></img>
            </div>
            <div  className='img2'>
                <img src='/Logo.png' alt='Logo.png'></img>
            </div>
        </footer>
    )
}

export default Footer