import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFileUploaderModule } from "angular-file-uploader";




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    
    ReactiveFormsModule,
   
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFileUploaderModule,
    RouterModule.forRoot([
      {path:'signup',component:SignupComponent},
      {path:'',redirectTo:'signup',pathMatch:'full'},
      {path:'view',component:ViewComponent},
      {path:'**',component:NotfoundComponent}
    ]),
    BrowserAnimationsModule,
      
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
