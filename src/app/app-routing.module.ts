import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BacksquadComponent } from './backsquad/backsquad.component';
import { BicepComponent } from './bicep/bicep.component';
import { ChestComponent } from './chest/chest.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FitnessComponent } from './fitness/fitness.component';
import { FrontSquatComponent } from './front-squat/front-squat.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LatsComponent } from './lats/lats.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PaysessionComponent } from './paysession/paysession.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShoulderComponent } from './shoulder/shoulder.component';
import { TrainersComponent } from './trainers/trainers.component';
import { TricepComponent } from './tricep/tricep.component';
import { YogaComponent } from './yoga/yoga.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'fitness',component:FitnessComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'yoga', component:YogaComponent},
  {path:'trainers', component:TrainersComponent},
  {path:'contactus', component:ContactUsComponent},
  {path:'aboutus', component:AboutUsComponent},
  {path:'Login', component:LoginComponent},
  {path:'Registration',component:RegistrationComponent},
  {path:'chest',component:ChestComponent},
  {path:'tricep', component:TricepComponent},
  {path:'shoulder', component:ShoulderComponent},
  {path:'bicep', component:BicepComponent},
  {path:'lats', component:LatsComponent},
  {path:'frontsquat',component:FrontSquatComponent},
  {path:'backsquat', component:BacksquadComponent},
  {path:'paymentsession', component:PaysessionComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:"**",component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
