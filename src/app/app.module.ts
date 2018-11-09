/* Module */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Custom Import Angular Module (In imports)
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfViewerModule } from 'ng2-pdf-viewer';

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
    DemoComponent
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
    PdfViewerModule
  ],
  /* Service Injection */
  providers: [],
  /* Root Component */
  bootstrap: [AppComponent]
})
export class AppModule { }
