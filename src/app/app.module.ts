import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { MissionComponent } from './components/mission/mission.component';
import { ContactComponent } from './components/contact/contact.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ServicesComponent } from './components/services/services.component';
import { ImpactComponent } from './components/impact/impact.component';
import { OurstructureComponent } from './components/ourstructure/ourstructure.component';
import { AwardsComponent } from './components/awards/awards.component';
import { MeasurementComponent } from './components/measurement/measurement.component';
import { StoriesComponent } from './components/stories/stories.component';
import { FundingsectionComponent } from './components/fundingsection/fundingsection.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NeweventvoulnteerregformComponent } from './components/neweventvoulnteerregform/neweventvoulnteerregform.component';
import { ResearchComponent } from './pages/research/research.component';
import { VolunteerComponent } from './pages/volunteer/volunteer.component';
import { EducationComponent } from './pages/education/education.component';
import { AdminloginComponent } from './pages/admin/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './pages/admin/admindashboard/admindashboard.component';

import { HealthcareComponent } from './pages/healthcare/healthcare.component';
import { FoodnutritionComponent } from './pages/foodnutrition/foodnutrition.component';
import { DonateformComponent } from './pages/donateform/donateform.component';
import { DonationhistoryComponent } from './pages/donationhistory/donationhistory.component';
import { WomenempowermentComponent } from './pages/womenempowerment/womenempowerment.component';
import { VolunteerregistrationComponent } from './pages/volunteerregistration/volunteerregistration.component';
import { VolunteerdetailsComponent } from './pages/admin/volunteerdetails/volunteerdetails.component';
import { DonorrecordsComponent } from './pages/admin/donorrecords/donorrecords.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { CommunitydevelopmentComponent } from './pages/communitydevelopment/communitydevelopment.component';
import { BlogComponent } from './pages/blog/blog.component';
import { EventregistrationComponent } from './pages/admin/eventregistration/eventregistration.component';
import { DisasterreliefComponent } from './pages/disasterrelief/disasterrelief.component';
import { DifferentlyabledComponent } from './pages/differentlyabled/differentlyabled.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { ProgramlistComponent } from './pages/programlist/programlist.component';
import { EventlistComponent } from './pages/admin/eventlist/eventlist.component';
import { MessagelistComponent } from './pages/admin/messagelist/messagelist.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    MissionComponent,
    ContactComponent,
    TestimonialsComponent,
    ServicesComponent,
    ImpactComponent,
    OurstructureComponent,
    AwardsComponent,
    MeasurementComponent,
    StoriesComponent,
    FundingsectionComponent,
    AboutusComponent,
    HomeComponent,
    NeweventvoulnteerregformComponent,
    ResearchComponent,
    VolunteerComponent,
    EducationComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    HealthcareComponent,
    FoodnutritionComponent,
    DonateformComponent,
    DonationhistoryComponent,
    WomenempowermentComponent,
    VolunteerregistrationComponent,
    VolunteerdetailsComponent,
    DonorrecordsComponent,
    CommunitydevelopmentComponent,
    BlogComponent,
    EventregistrationComponent,
    DisasterreliefComponent,
    DifferentlyabledComponent,
    MainlayoutComponent,
    AdminlayoutComponent,
    ProgramlistComponent,
    EventlistComponent,
    MessagelistComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SidebarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
