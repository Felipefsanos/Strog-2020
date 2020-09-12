import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SelectComponent } from './content/select/select.component';
import { FlexLayoutModule } from '@angular/flex-layout/typings/module';

@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent,
      CarouselComponent,
      ContentComponent,
      FooterComponent,
      SelectComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
