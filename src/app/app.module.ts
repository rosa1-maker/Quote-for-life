import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QoutesComponent } from './qoutes/qoutes.component';
import { QouteDirective } from './qoute.directive';
import { FormComponent } from './form/form.component';
import { QoutePipe } from './qoute.pipe';
import { QouteDetailsComponent } from './qoute-details/qoute-details.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'

// import { enableProdMode} from '@angular/core';
// enableProdMode();
// bootstrap(....);
@NgModule({
  declarations: [
    AppComponent,
    QoutesComponent,
    QouteDirective,
    FormComponent,
    QoutePipe,
    QouteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
