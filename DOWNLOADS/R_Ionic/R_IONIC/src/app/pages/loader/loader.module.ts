import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoaderPageRoutingModule } from './loader-routing.module';

import { LoaderPage } from './loader.page';


@NgModule({
    declarations: [LoaderPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoaderPageRoutingModule,
        //FolderPageModule
    ],

    
        
})
export class LoaderPageModule {}
