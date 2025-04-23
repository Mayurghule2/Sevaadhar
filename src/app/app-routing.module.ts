import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HomeComponent } from './pages/home/home.component';
import { ResearchComponent } from './pages/research/research.component';
import { VolunteerComponent } from './pages/volunteer/volunteer.component';
import { EducationComponent } from './pages/education/education.component';
import { AdminloginComponent } from './pages/admin/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './pages/admin/admindashboard/admindashboard.component';
import { HealthcareComponent } from './pages/healthcare/healthcare.component';
import { FoodnutritionComponent } from './pages/foodnutrition/foodnutrition.component';
import { ContactComponent } from './components/contact/contact.component';
import { DonateformComponent } from './pages/donateform/donateform.component';
import { WomenempowermentComponent } from './pages/womenempowerment/womenempowerment.component';
import { VolunteerregistrationComponent } from './pages/volunteerregistration/volunteerregistration.component';
import { NeweventvoulnteerregformComponent } from './components/neweventvoulnteerregform/neweventvoulnteerregform.component';
import { CommunitydevelopmentComponent } from './pages/communitydevelopment/communitydevelopment.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ImpactComponent } from './components/impact/impact.component';
import { DisasterreliefComponent } from './pages/disasterrelief/disasterrelief.component';
import { DifferentlyabledComponent } from './pages/differentlyabled/differentlyabled.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { DonorrecordsComponent } from './pages/admin/donorrecords/donorrecords.component';
import { VolunteerdetailsComponent } from './pages/admin/volunteerdetails/volunteerdetails.component';
import { EventregistrationComponent } from './pages/admin/eventregistration/eventregistration.component';
import { ProgramlistComponent } from './pages/programlist/programlist.component';
import { EventlistComponent } from './pages/admin/eventlist/eventlist.component';
import { MessagelistComponent } from './pages/admin/messagelist/messagelist.component';

// const routes: Routes = [
//   { path: 'about', component: AboutusComponent },
//   { path: 'our-impact', component: ImpactComponent },
//   { path: 'research', component: ResearchComponent },
//   { path: 'contact-us', component: ContactComponent},
//   { path: 'blog', component: BlogComponent},
//   { path: 'new-event-volunteer-registration', component: NeweventvoulnteerregformComponent},
//   { path: 'donate-form', component: DonateformComponent},

//   { path: 'volunteer', component: VolunteerComponent },
//   { path: 'volunteer-registration', component: VolunteerregistrationComponent },
//   { path: 'education', component: EducationComponent },
//   { path: 'community-development', component: CommunitydevelopmentComponent },
//   { path: 'healthcare', component:HealthcareComponent },
//   { path: 'disaster-relief', component:DisasterreliefComponent },
//   { path: 'food-nutrition', component:FoodnutritionComponent },
//   {path: 'adminlogin', component: AdminloginComponent},
//   { path: 'women-empowerment', component: WomenempowermentComponent },
//   { path: 'differently-abled', component: DifferentlyabledComponent },
//   { path: 'admin/dashboard', component: AdmindashboardComponent },
//   { path: '', component: HomeComponent },
    
// ];

const routes: Routes = [
  {
    path: '',
    component:MainlayoutComponent,
    children:[
      { path: 'about', component: AboutusComponent },
      { path: 'our-impact', component: ImpactComponent },
      { path: 'research', component: ResearchComponent },
      { path: 'contact-us', component: ContactComponent},
      { path: 'blog', component: BlogComponent},
      { path: 'program-list', component: ProgramlistComponent},
      { path: 'new-event-volunteer-registration', component: NeweventvoulnteerregformComponent},
      { path: 'donate-form', component: DonateformComponent},
    
      { path: 'volunteer', component: VolunteerComponent },
      { path: 'volunteer-registration', component: VolunteerregistrationComponent },
      { path: 'education', component: EducationComponent },
      { path: 'community-development', component: CommunitydevelopmentComponent },
      { path: 'healthcare', component:HealthcareComponent },
      { path: 'disaster-relief', component:DisasterreliefComponent },
      { path: 'food-nutrition', component:FoodnutritionComponent },
      {path: 'adminlogin', component: AdminloginComponent},
      { path: 'women-empowerment', component: WomenempowermentComponent },
      { path: 'differently-abled', component: DifferentlyabledComponent },
      // { path: 'admin/dashboard', component: AdmindashboardComponent },
      { path: '', component: HomeComponent },
    ]
  },

  {
    path: 'admin',
    component: AdminlayoutComponent,
    children:[
      {path: 'dashboard', component: AdmindashboardComponent},
      {path: 'donor-record', component: DonorrecordsComponent},
      {path: 'volunteer-details', component: VolunteerdetailsComponent},
      {path: 'event-registration', component: EventregistrationComponent},
      {path: 'event-list', component: EventlistComponent},
      {path: 'message-list', component: MessagelistComponent},
    ]
  },
  { path: '**', redirectTo: '' }


  
    
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
