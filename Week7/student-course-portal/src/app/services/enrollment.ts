import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, of, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CourseService } from './course';
import { Course } from '../models/course.model';

export interface Student {
  id: number;
  name: string;
  email: string;
}

interface Enrollment {
  id: string;
  studentId: number;
  courseId: number;
}

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  private enrolledCourseIds: number[] = [];

  // Service-to-service injection: EnrollmentService depends on CourseService
  // to resolve enrolled IDs into full Course objects.
  constructor(
    private courseService: CourseService,
    private http: HttpClient
  ) {}

  enroll(courseId: number): void {
    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter((id) => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourses(): Observable<Course[]> {
    if (this.enrolledCourseIds.length === 0) {
      return of([]);
    }
    return forkJoin(
      this.enrolledCourseIds.map((id) => this.courseService.getCourseById(id))
    ).pipe(map((courses) => courses.filter((c): c is Course => c !== undefined)));
  }

  // Given a courseId, look up enrollments for that course, then fetch the
  // matching student records. switchMap is used (rather than mergeMap) because
  // if a new courseId arrives before the first lookup finishes (e.g. the user
  // quickly selects a different course), switchMap cancels the stale inner
  // Observable and switches to the new one — preventing an out-of-date
  // response for a previously-selected course from overwriting the current
  // selection's results.
  getStudentsByCourse(courseId: number): Observable<Student[]> {
    return this.http.get<Enrollment[]>(`${API_URL}/enrollments?courseId=${courseId}`).pipe(
      switchMap((enrollments) => {
        if (enrollments.length === 0) {
          return of([]);
        }
        const studentRequests = enrollments.map((e) =>
          this.http.get<Student>(`${API_URL}/students/${e.studentId}`)
        );
        return forkJoin(studentRequests);
      })
    );
  }
}
