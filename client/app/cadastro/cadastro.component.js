"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var foto_component_1 = require("../foto/foto.component");
var foto_service_1 = require("../foto/foto.service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var CadastroComponent = (function () {
    function CadastroComponent(service, fb, route, router) {
        var _this = this;
        this.foto = new foto_component_1.FotoComponent();
        this.mensagem = '';
        this.isMsgError = false;
        this.service = service;
        this.route = route;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.service.buscaFotoPorId(id)
                    .subscribe(function (foto) {
                    _this.foto = foto;
                    _this.isMsgError = false;
                    _this.mensagem = 'Foto recuperada com sucesso!!';
                }, function (erro) {
                    console.log(erro);
                    _this.isMsgError = true;
                    _this.mensagem = 'Ocorreu um erro  ao recuperar a mensagem! Favor procurar o analista responsável!';
                });
            }
        });
        this.meuForm = fb.group({
            titulo: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            url: ['', forms_1.Validators.required],
            descricao: [''],
        });
    }
    CadastroComponent.prototype.cadastrar = function () {
        var _this = this;
        event.preventDefault();
        console.log(this.foto);
        this.service.cadastra(this.foto).subscribe(function () {
            _this.foto = new foto_component_1.FotoComponent();
            console.log('Foto salva com sucessso!');
            _this.mensagem = 'Foto salva com sucesso!';
            // this.router.navigate(['']);
        }, function (erro) { return console.log(erro); });
    };
    CadastroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cadastro',
            templateUrl: './cadastro.component.html'
        }),
        __metadata("design:paramtypes", [foto_service_1.FotoService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
    ], CadastroComponent);
    return CadastroComponent;
}());
exports.CadastroComponent = CadastroComponent;
//# sourceMappingURL=cadastro.component.js.map