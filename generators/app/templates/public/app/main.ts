import { bootstrap } from '@angular/platform-browser-dynamic';
import { Input, Component, OnInit, Injectable, enableProdMode } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS, Http, Response, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//enableProdMode();

let stls: Array<string> = ["* {font-family: Arial, Helvetica, sans-serif ;}"];


@Component({
    selector: 'my-app',
    template: `
    <h1>Hello World</h1>`,
    styles: stls
})

export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { 

    }

}

bootstrap (AppComponent)

