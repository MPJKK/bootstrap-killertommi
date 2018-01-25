import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // importataan angular bootstrapls


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    FooterComponent,
    NavigationComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
      NgbModule.forRoot() // lisätään importseihin
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
