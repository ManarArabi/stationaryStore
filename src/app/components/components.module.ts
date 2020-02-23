import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HeaderComponent } from './header/header.component';
import { GradeLevelsComponent } from './grade-levels/grade-levels.component';

import { IonicModule } from  '@ionic/angular';

@NgModule({
    declarations: [
        HeaderComponent,
        GradeLevelsComponent
    ],
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        HeaderComponent,
        GradeLevelsComponent
    ]
})

export class ComponentsModule {}