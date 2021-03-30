import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FitnessComponent } from './fitness/fitness.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TrainersComponent } from './trainers/trainers.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChestComponent } from './chest/chest.component';
import { TricepComponent } from './tricep/tricep.component';
import { BicepComponent } from './bicep/bicep.component';
import { ShoulderComponent } from './shoulder/shoulder.component';
import { LatsComponent } from './lats/lats.component';
import { FrontSquatComponent } from './front-squat/front-squat.component';
import { BacksquadComponent } from './backsquad/backsquad.component';
import { YogaComponent } from './yoga/yoga.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FitnessComponent,
    GalleryComponent,
    ContactUsComponent,
    AboutUsComponent,
    PagenotfoundComponent,
    LoginComponent,
    RegistrationComponent,
    TrainersComponent,
    HeaderComponent,
    FooterComponent,
    ChestComponent,
    TricepComponent,
    BicepComponent,
    ShoulderComponent,
    LatsComponent,
    FrontSquatComponent,
    BacksquadComponent,
    YogaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
