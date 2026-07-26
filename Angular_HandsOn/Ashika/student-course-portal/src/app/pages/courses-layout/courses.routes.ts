import { Routes } from '@angular/router';
import { CoursesLayout } from './courses-layout';
import { CourseList } from '../course-list/course-list';
import { CourseDetail } from '../course-detail/course-detail';

export const COURSES_ROUTES: Routes = [
  {
    path: '',
    component: CoursesLayout,
    children: [
      { path: '', component: CourseList },
      { path: ':id', component: CourseDetail },
    ],
  },
];
