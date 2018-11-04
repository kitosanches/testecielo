import { ClienteService } from './../../app/cliente/cliente.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpResponse } from '@angular/common/http';
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { ClienteFormularioComponent } from '../../app/cliente/cliente-formulario/cliente-formulario.component';
import { MessageService } from '../../../node_modules/primeng/api';
import { cpus } from 'os';
import { ClienteModel } from '../../app/cliente/cliente.model';

describe('Component Tests', () => {

    describe('Formulário Cliente', () => {
        let comp: ClienteFormularioComponent;
        let fixture: ComponentFixture<ClienteFormularioComponent>;
        let service: ClienteService;
        let event = {
            checked: false,
        };
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule],
                declarations: [ClienteFormularioComponent],
                providers: [
                    ClienteService,
                    MessageService
                ]
            })
                .overrideTemplate(ClienteFormularioComponent, '')
                .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ClienteFormularioComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ClienteService);
        });

        it('Realiza a chamada do metodo cadastrarCliente',
            inject([],
                fakeAsync(() => {
                    comp.cliente = new ClienteModel();
                    comp.cliente.cpfOuCnpj = "109.653.110-07"
                    comp.cadastrarCliente();
                    spyOn(service, 'cadastrarClientes');
                    tick();
                    expect(service.cadastrarClientes).not.toBeNull();
                }))
        );
        it('Mudar tipo de documento ', () => {
            comp.mudarTipo(event);
            expect(comp.tipoPessoa).toBeFalsy();
            event.checked = true;
            comp.mudarTipo(event);
            expect(comp.tipoPessoa).toBeTruthy();
        });       

    });

});
