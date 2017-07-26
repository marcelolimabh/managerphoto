import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';
import { PainelComponent } from '../painel/painel.component';


@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    fotos: FotoComponent[] = [];
    service: FotoService;

    mensagem: string = '';

    constructor(service: FotoService) {

        this.service = service;
        this.service.lista().subscribe(fotos => this.fotos = fotos, error => console.log(error));


    }
 
    remove(foto: FotoComponent, painel: PainelComponent) {
        console.log('Vai chamar o servico');
        this.service.remove(foto)
            .subscribe(() => {
                painel.fadeOut(() => {
                    console.log('Foto removida com sucesso');
                    //Clona o array
                    let fotosAtualizadas = this.fotos.slice(0)
                    //Recupera a posicao da foto no array
                    let indice = fotosAtualizadas.indexOf(foto);
                    //Exclui a foto do array
                    fotosAtualizadas.splice(indice, 1);
                    //Atualiza a lista de fotos do componente, essa é a forma como o Angular2 executa o processo de change detection.
                    this.fotos = fotosAtualizadas;
                    //Atuliza a mensagem
                    this.mensagem = "Foto removida com sucesso!";
                });


            }, erro => {
                console.log(erro);
                this.mensagem = "Não foi possivel excluir a foto";
            });
    }



}