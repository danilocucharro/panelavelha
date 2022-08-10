import logoImg from '../../assets/logo.svg';
import { BiSearchAlt } from 'react-icons/bi'
import { Content, BtnCadastro, BtnLogin, BtnPesquisarReceita, InserirReceita, NomeLogo, ImgLogo, FormReceita } from './styles';

export function Header(){
    return(

          <Content>
            <NomeLogo>PANELA VELHA</NomeLogo>
            <ImgLogo src={logoImg} alt="panela velha"/>
            <FormReceita action="">
                <InserirReceita type="text" placeholder="Pesquise sua receita!" />
                <BtnPesquisarReceita type="submit" value="gay">
                  <BiSearchAlt size={20}/>
                </BtnPesquisarReceita>
            </FormReceita>
            <BtnCadastro>
              CADASTRE-SE
            </BtnCadastro>
            <BtnLogin>
              LOGIN
            </BtnLogin>

          </Content>

    )
}