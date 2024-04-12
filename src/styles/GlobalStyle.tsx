import { Global, css } from '@emotion/react'
import { BRIGHT_COLOR, DARK_L_COLOR, DARK_PRIMARY_COLOR, LIGHT_COLOR } from '@/styles/colors.ts';

export const mainFont = "'Montserrat', sans-serif";
const styles = css`
    margin: 0;
    padding: 0;
    font-style: ${mainFont};
    box-sizing: border-box;

    body {
        margin: 0;
        background-color: ${DARK_L_COLOR};
    }

    html {
        overflow-y: scroll;

        &::-webkit-scrollbar {
            width: 18px;
        }

        &::-webkit-scrollbar-thumb {
            -webkit-appearance: none;
            width: 15px;
            height: 15px;
            border: 1px solid ${DARK_PRIMARY_COLOR};
            background-color: ${DARK_PRIMARY_COLOR};
        }

        &::-webkit-scrollbar-track {
            -webkit-appearance: none;
            width: 15px;
            height: 15px;
            border: 1px solid ${DARK_PRIMARY_COLOR};
            background-color: ${DARK_L_COLOR};
        }
    }

    a {
        border: 1px solid;
        background-color: transparent;
        text-transform: uppercase;
        font-size: 16px;
        padding: 15px 30px;
        transition: 0.2s;
        color: ${LIGHT_COLOR};
        border-radius: 15px;

        &:hover {
            background-color: ${BRIGHT_COLOR};
            color: #000000;
            border: 1px solid #79af2e;
            box-shadow: 5px 5px 30px 6px #faa607;
        }
    }

    button {
        border: 1px solid;
        background-color: transparent;
        text-transform: uppercase;
        font-size: 16px;
        padding: 15px 30px;
        transition: 0.2s;
        //margin-right: 100px;
        color: ${BRIGHT_COLOR};;
        border-radius: 15px;

        &:hover {
            background-color: ${BRIGHT_COLOR};
            color: #000000;
            border: 1px solid #79af2e;
            box-shadow: 5px 5px 30px 6px #faa607;
        }
    }

`
export const GlobalStyle = () => <Global styles={styles} />
