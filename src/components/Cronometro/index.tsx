import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../commom/utils/date";

export default function Cronometro() {
    console.log('conversao', tempoParaSegundos('01:01:01'))
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <button>
                Começar!
            </button>
        </div>
    )
}