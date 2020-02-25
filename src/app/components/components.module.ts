import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HeaderComponent } from './header/header.component';
import { GradeLevelsComponent } from './grade-levels/grade-levels.component';
import { LightHeaderComponent } from './light-header/light-header.component';

import { IonicModule } from  '@ionic/angular';

@NgModule({
    declarations: [
        HeaderComponent,
        GradeLevelsComponent,
        LightHeaderComponent
    ],
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        HeaderComponent,
        GradeLevelsComponent,
        LightHeaderComponent
    ]
})

export class ComponentsModule {}