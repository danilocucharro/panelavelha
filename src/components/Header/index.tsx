import logoImg from '../../assets/logo.svg';
import { Content, BtnCadastro, BtnLogin, PesquisarReceita } from './styles';

export function Header(){
    return(

          <Content>
            <label>PANELA VELHA</label>
            <img src={logoImg} alt="panela velha"/>
              <PesquisarReceita type="text" placeholder="Pesquise por uma receita!" />
                <BtnCadastro>
                  <strong>CADASTRE-SE</strong>
                </BtnCadastro>
                <BtnLogin>
                  <strong>LOGIN</strong>
                </BtnLogin>

          </Content>

    )
}