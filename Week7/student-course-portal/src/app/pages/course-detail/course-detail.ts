import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course';
import { EnrollmentService, Student } from '../../services/enrollment';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail implements OnInit {
  course: Course | undefined;
  enrolledStudents: Student[] = [];
  isLoading = true;
  hasError = false;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.courseService.getCourseById(+id).subscribe({
        next: (course) => {
          this.course = course;
          this.isLoading = false;
        },
        error: () => {
          this.hasError = true;
          this.isLoading = false;
        },
      });

      // switchMap inside the service ensures that if this course id changes
      // rapidly (e.g. quick navigation between courses), only the latest
      // student lookup's results are used.
      this.enrollmentService.getStudentsByCourse(+id).subscribe({
        next: (students) => (this.enrolledStudents = students),
        error: (err) => console.error('Failed to load enrolled students:', err),
      });
    } else {
      this.isLoading = false;
    }
  }
}
