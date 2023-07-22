

import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
const lista = [MatButtonModule, MatCardModule

]
@NgModule({
    //los ... es para meter los elementos de la lista
    exports: [...lista],
    imports: [...lista],
  })
  export class MaterialModule {}