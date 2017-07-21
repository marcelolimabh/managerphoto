import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';


@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    fotos: FotoComponent[] = [];
    service: FotoService;

    constructor(service: FotoService) {

        this.service = service;
        this.service.lista().subscribe(fotos => this.fotos = fotos, error => console.log(error));


    }

    remove(foto) {
        console.log('Vai chamar o servico');
        this.service.remove(foto)
            .subscribe(() => console.log('Foto removida com sucesso'), erro => console.log(erro));
    }



}