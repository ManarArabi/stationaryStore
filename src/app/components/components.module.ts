import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { GradeLevelsComponent } from './grade-levels/grade-levels.component';

import { IonicModule } from  '@ionic/angular';

@NgModule({
    declarations: [
        HeaderComponent,
        GradeLevelsComponent
    ],
    imports: [IonicModule],
    exports: [
        HeaderComponent,
        GradeLevelsComponent
    ]
})

export class ComponentsModule {}