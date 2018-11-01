import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Custom Import */
import { LoginComponent } from './login/login.component';
import { ProfessorComponent } from './professor/professor.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  // Set root to login page
  { path: 'professor', component: ProfessorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'student', component: StudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
