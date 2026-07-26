import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { CourseService } from '../../../services/course';

@Component({
  selector: 'app-enrollment-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css',
})
export class EnrollmentForm {
  studentName = '';
  studentEmail = '';
  courseId: number | null = null;
  preferredSemester = '';
  agreeToTerms = false;
  submitted = false;

  constructor(private courseService: CourseService) {}

  onSubmit(form: NgForm) {
    console.log('Form value:', form.value);
    console.log('Form valid:', form.valid);
    if (form.valid) {
      this.courseService
        .createCourse({
          name: `Requested course for ${this.studentName}`,
          code: `REQ-${this.courseId}`,
          credits: 3,
          gradeStatus: 'pending',
        })
        .subscribe({
          next: (created) => {
            console.log('Course created:', created);
            this.submitted = true;
          },
          error: (err) => console.error('Failed to create course:', err),
        });
    }
  }
}
