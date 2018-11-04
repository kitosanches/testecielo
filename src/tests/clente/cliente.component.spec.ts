import { ClienteService } from './../../app/cliente/cliente.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpResponse } from '@angular/common/http';
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { ClienteFormularioComponent } from '../../app/cliente/cliente-formulario/cliente-formulario.component';
import { MessageService } from '../../../node_modules/primeng/api';
import { ClienteModel } from '../../app/cliente/cliente.model';
import { ClienteComponent } from '../../app/cliente/cliente.component';

describe('Component Tests', () => {

    describe('Cliente', () => {
        let comp: ClienteComponent;
        let fixture: ComponentFixture<ClienteComponent>;
        let service: ClienteService;
        let chamarNgOnInit: any;
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule],
                declarations: [ClienteComponent],
                providers: [
                    ClienteService
                ]
            })
                .overrideTemplate(ClienteComponent, '')
                .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ClienteComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ClienteService);
            chamarNgOnInit = {
                chamada: () => {
                    comp.ngOnInit();
                }
            };

            spyOn(chamarNgOnInit, 'chamada');
            chamarNgOnInit.chamada();
        });
        it('Verifica se o ngOnInit é chamado', () => {
            expect(chamarNgOnInit.chamada).toHaveBeenCalled();
        });

        it('Realiza a chamada do metodo buscarClientes',
            inject([],
                fakeAsync(() => {
                    comp.buscarClientes();
                    spyOn(service, 'buscarClientes');
                    tick();
                    expect(service.buscarClientes).not.toBeNull();
                }))
        );    

    });

});
