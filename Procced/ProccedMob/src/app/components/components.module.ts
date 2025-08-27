import { GrpInputRangeComponent } from './input/grp-input-range/grp-input-range.component';
import { GrpInputComponent } from './input/grp-input/grp-input.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';






@NgModule({
    imports:[IonicModule, CommonModule, FormsModule, ],
    declarations: [GrpInputComponent, GrpInputRangeComponent,
        GrpInputComponent, ],

    exports:[GrpInputComponent, GrpInputRangeComponent,
      
    GrpInputComponent, ],

})
export class ComponentsModule {}
