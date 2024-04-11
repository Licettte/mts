import { Global, css } from '@emotion/react'
import {  DARK_L_COLOR, DARK_PRIMARY_COLOR } from '@/styles/colors.ts';

export const mainFont = "'Montserrat', sans-serif";
const styles = css`
    margin: 0;
    padding: 0;
    font-style: ${mainFont};
    box-sizing: border-box;

    body {
        margin: 0;
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
        color: #4cc9f0;
        border-radius: 15px;

        &:hover {
            background-color: #4cc9f0;
            color: #fff;
            border: 1px solid #4cc9f0;
            box-shadow: 10px 10px 100px 6px #4cc9f0;
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
        color: #4cc9f0;
        border-radius: 15px;

        &:hover {
            background-color: #4cc9f0;
            color: #fff;
            border: 1px solid #4cc9f0;
            box-shadow: 10px 10px 100px 6px #4cc9f0;
        }
    }

`
export const GlobalStyle = () => <Global styles={styles} />
