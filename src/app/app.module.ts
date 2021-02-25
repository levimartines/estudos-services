import { CdkTableModule } from '@angular/cdk/table';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DepartmentFormComponent } from './department-form/department-form.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    DepartmentFormComponent,
    ProductsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkTableModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
