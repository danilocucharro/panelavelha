import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #E5E5E5; 
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){/*quando o usuario tiver uma tela de ate 1080px a font vai diminuir pra 15px (o tamanho padrao é de 16px) */
            font-size: 93.75%; /*15px */
        }

        @media (max-width: 720px){/*diminuir o tamanho da fonte */
            font-size: 87.5%; /*14px */
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased; /*fontes mais nitidas pra visao do usuario*/ 
    } 
`
