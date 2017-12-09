import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatCheckboxModule, MatInputModule,
    MatFormFieldModule, MatSelectModule, MatRadioModule,
    MatCardModule, MatOptionModule, MatIconModule, MatGridListModule,
    MatTabsModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        MatOptionModule,
        MatIconModule,
        MatGridListModule,
        MatTabsModule,
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        MatOptionModule,
        MatIconModule,
        MatGridListModule,
        MatTabsModule,
    ],
})
export class MaterialAngularModule { }
