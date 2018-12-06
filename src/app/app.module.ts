/* Module */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Custom Import Angular Module (In imports)
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { NgPipesModule } from 'ngx-pipes';


/* Component */
import { AppComponent } from './app.component';
import { ProfessorComponent } from './professor/professor.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { CoursesComponent } from './courses/courses.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StartComponent } from './professor/start/start.component';
import { AfterComponent } from './professor/after/after.component';
import { TestComponent } from './test/test.component';
import { DemoComponent } from './demo/demo.component';
import { PastComponent } from './professor/past/past.component';
import { TaComponent } from './ta/ta.component';

import { FilterPipe } from './filter.pipe';
import { Student2Component } from './student2/student2.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faComments, faThumbsUp, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faClock, faTrashAlt, faListAlt } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  /* Component Injection */
  declarations: [
    AppComponent,
    // Custom
    ProfessorComponent,
    LoginComponent,
    StudentComponent,
    NavigationComponent,
    ProfileComponent,
    LogoutComponent,
    CoursesComponent,
    SidebarComponent,
    StartComponent,
    AfterComponent,
    TestComponent,
    DemoComponent,
    PastComponent,
    TaComponent,
    FilterPipe,
    Student2Component,
  ],
  /* Module Injection */
  imports: [
    BrowserModule,
    // Custom
    AppRoutingModule,
    NgbModule,    // ng-bootstrap
    FormsModule,            // Forms data binding,
    BrowserAnimationsModule, // For image animations
    ReactiveFormsModule,
    PdfViewerModule,
    NgxWebstorageModule.forRoot(),  // For local storage
    NgPipesModule,
    FontAwesomeModule
  ],
  /* Service Injection */
  providers: [],
  /* Root Component */
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faComments, faThumbsUp, faTrashAlt, faClock, faCheck, faListAlt);
  }
}
