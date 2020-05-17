import { logarTempoDeExecução } from "../helpers/decorators/logarTempoDeExecução";
export abstract class View<T> {

    protected _elemento: JQuery;
    protected _escapar: boolean;

    constructor(seletor: string, escapar: boolean = false) {

        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    @logarTempoDeExecução(true)
    update(model:T){
        let  template = this.template(model);
        if (this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;
}



