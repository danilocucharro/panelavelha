import logoImg from '../../assets/logo.svg';
import { Container } from './styles';

export function Header(){
    return(
        <Container>
          <label>PANELA VELHA</label>
          <img src={logoImg} alt="panela velha" height="30px" width="30px"/>
            <input type="text" placeholder="Pesquise por uma receita!" />
              <button type="submit">
                CADASTRE-SE
              </button>
              <button type="submit">
                LOGIN
              </button>
        </Container>
    )
}