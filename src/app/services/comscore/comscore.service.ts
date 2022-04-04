import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

const COMSCORE_CONFIG = {
  c2: `12345678`,
  mp_brand: `brandname`,
  ns_site: `example.ch`,
}

declare global {
  interface Window { COMSCORE: any; }
}

window.COMSCORE = window.COMSCORE || [];

@Injectable({
  providedIn: 'root'
})
export class ComscoreService {

  loaded$ = new Subject<void>()

  constructor() {
    if (window.location.hostname !== 'localhost') {
      // Initialize beacon.js
      var s = document.createElement("script");
      var el = document.getElementsByTagName("script")[0];
      s.async = true;
      s.onload = () => {
          this.loaded$.next()
      }
      s.src = `https://sb.scorecardresearch.com/cs/${COMSCORE_CONFIG.c2}/beacon.js`;
      el.parentNode?.insertBefore(s, el);
    }

    this.loaded$.subscribe(() => {
      this.sendRequest()
    })
  }

  sendRequest(options?: any) {
    if (window.location.hostname !== 'localhost') {

      // Generate random fpid value if it is not yet available
      let fpid = "1234567891234_12345678"

      // Request
      ; (window['COMSCORE'] && window['COMSCORE'].beacon({
        c1: "2",
        c2: COMSCORE_CONFIG.c2,
        mp_brand: COMSCORE_CONFIG.mp_brand,
        ns_site: COMSCORE_CONFIG.ns_site,
        mp_v: "1.0.0",
        mp_tax: "379",
        mp_format: "1026",
        cs_fpid: fpid,
        mp_login: 3,
        ...options
      }));

    }
  }
}
