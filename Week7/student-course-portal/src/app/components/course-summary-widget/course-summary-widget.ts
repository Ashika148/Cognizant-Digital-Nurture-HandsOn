import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-summary-widget',
  imports: [],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css',
})
export class CourseSummaryWidget implements OnInit {
  courseCount = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.refreshCount();
  }

  refreshCount() {
    this.courseService.getCourses().subscribe((courses) => {
      this.courseCount = courses.length;
    });
  }

  addTestCourse() {
    this.courseService
      .createCourse({
        name: 'Test Course',
        code: 'TEST999',
        credits: 1,
        gradeStatus: 'pending',
      })
      .subscribe(() => {
        this.refreshCount();
      });
  }
}
