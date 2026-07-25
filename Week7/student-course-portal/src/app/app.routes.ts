import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { StudentProfile } from './pages/student-profile/student-profile';
import { NotFound } from './pages/not-found/not-found';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'courses',
    loadChildren: () =>
      import('./pages/courses-layout/courses.routes').then((m) => m.COURSES_ROUTES),
  },
  { path: 'profile', component: StudentProfile, canActivate: [authGuard] },
  {
    path: 'enroll',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/enrollment/enrollment-module').then((m) => m.EnrollmentModule),
  },
  { path: '**', component: NotFound },
];
