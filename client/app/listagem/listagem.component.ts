import { Component } from '@angular/core';
import {FotoService} from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';


@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent{

    fotos: FotoComponent[] = [];

    constructor(service: FotoService) {
        
        service.lista().subscribe(fotos => this.fotos = fotos, error => console.log(error));
        
        
    }

    remove(foto){
        console.log('chamou metodo remove');
        console.log(foto);
    }



}