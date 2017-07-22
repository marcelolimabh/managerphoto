import { Component, Input } from '@angular/core'
import { FotoComponent } from '../foto/foto.component'
import { FotoService } from '../foto/foto.service'
import { ActivatedRoute } from '@angular/router';



import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();

    meuForm: FormGroup;

    service: FotoService;

    route: ActivatedRoute;

    mensagem: string ='';

    isMsgError = false;

    constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute) {
        this.service = service;
      
        this.route = route;
        this.route.params.subscribe(params => {
            let id: string = params['id'];
            if(id){
                this.service.buscaFotoPorId(id)
                .subscribe(foto => 
                    {
                        this.foto = foto;
                        this.isMsgError = false;
                        this.mensagem = 'Foto recuperada com sucesso!!'
                    } ,
                    erro => {
                        console.log(erro)
                        this.isMsgError = true;
                        this.mensagem = 'Ocorreu um erro  ao recuperar a mensagem! Favor procurar o analista responsável!'
                    }
                )}
            
        });
       this.meuForm = fb.group({
            titulo: ['', Validators.compose(
                [Validators.required, Validators.minLength(4)]
            )],
            url: ['', Validators.required],
            descricao: [''],
        });
    }

    cadastrar() {


        event.preventDefault();

        console.log(this.foto);

       

        
            this.service.cadastra(this.foto).subscribe(() => {
                this.foto = new FotoComponent();
                console.log('Foto salva com sucessso!');
                this.mensagem = 'Foto salva com sucesso!';



            }, erro => console.log(erro));
    }

}