import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header(){
    return(
        <Container>
          <Content>
            <label>PANELA VELHA</label>
            <img src={logoImg} alt="panela velha"/>
              <input type="text" placeholder="Pesquise por uma receita!" />
                <button type="submit">
                  CADASTRE-SE
                </button>
                <button type="submit">
                  LOGIN
                </button>
          </Content>
        </Container>
    )
}