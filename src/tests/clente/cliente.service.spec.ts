import { ClienteModel } from './../../app/cliente/cliente.model';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpResponse } from '@angular/common/http';
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick, getTestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { ClienteService } from '../../app/cliente/cliente.service';

describe('Component Tests', () => {

    describe('Cliente Service', () => {
        let service: ClienteService;
        let httpMock: HttpTestingController;
        let injector: TestBed;
        const urlGetClientes = 'http://localhost:8080/clientes';
        let clienteTeste: ClienteModel = new ClienteModel();
        clienteTeste.nome = "Teste";
        clienteTeste.tipo = 0;
        clienteTeste.cpfOuCnpj = "12341234123";
        clienteTeste.email = "teste@gmail.com";
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule],
                providers: [
                    ClienteService
                ]
            });
        }));

        beforeEach(() => {
            injector = getTestBed();
            service = injector.get(ClienteService);
            httpMock = injector.get(HttpTestingController);
        });
        describe('Serviços de Cliente', () => {
            it('Testa a chamada url de cadastrarClientes', () => {
                service.cadastrarClientes(clienteTeste).subscribe(() => { });

                const req = httpMock.expectOne({ method: 'POST' });
                expect(req.request.url).toEqual(urlGetClientes);
            });

            it('Retorna codigo 200 no metodo cadastrarClientes', () => {
                service.cadastrarClientes(clienteTeste).subscribe((received) => {

                    expect(received.status).toEqual(200);
                });
                const req = httpMock.expectOne({ method: 'POST' });
            });

            it('Retorna codigo 404 no metodo cadastrarClientes', () => {
                service.cadastrarClientes(clienteTeste).subscribe(null, (_error: any) => {
                    expect(_error.status).toEqual(404);
                });
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush('Invalid request parameters', {
                    status: 404, statusText: 'Bad Request'
                });

            });

            it('Testa a chamada url de buscarClientes', () => {
                service.buscarClientes().subscribe(() => { });

                const req = httpMock.expectOne({ method: 'GET' });
                expect(req.request.url).toEqual(urlGetClientes);
            });

            it('Retorna codigo 200 no metodo buscarClientes', () => {
                service.buscarClientes().subscribe(null, (resposta: any) => {
                    expect(resposta.status).toEqual(200);
                });
                const req = httpMock.expectOne({ method: 'GET' });
            });

            it('Retorna codigo 404 no metodo buscarClientes', () => {
                service.buscarClientes().subscribe(null, (_error: any) => {
                    expect(_error.status).toEqual(404);
                });
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush('Invalid request parameters', {
                    status: 404, statusText: 'Bad Request'
                });

            });
        });

    });
});
