import { Injectable } from '@angular/core';

// Siempre q se genera una app de angular se genera por defecto un inyector llamado root, por eso por defecto el servicio es proveido por el inyecto q ya existe (root).
// Se podría cambiar la configuracion para q el servicio se inyectará en otro modulo q no es el modulo principal.
@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor() { }
}
