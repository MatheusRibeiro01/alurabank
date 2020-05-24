import { Negociacao } from './Negociacao'
import { logarTempoDeExecução } from "../helpers/decorators/logarTempoDeExecução";

export class Negociacoes {

    private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao:Negociacao){

        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[]{

        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraTexto(): void{

        console.log(JSON.stringify(this._negociacoes));
    }
}