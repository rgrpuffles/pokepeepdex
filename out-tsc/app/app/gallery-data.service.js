import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs';
import * as i0 from "@angular/core";
export class GalleryDataService {
    http = inject(HttpClient);
    manifest$ = this.http
        .get('assets/cards-manifest.json')
        .pipe(shareReplay({ bufferSize: 1, refCount: false }));
    static ɵfac = function GalleryDataService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GalleryDataService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: GalleryDataService, factory: GalleryDataService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GalleryDataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
