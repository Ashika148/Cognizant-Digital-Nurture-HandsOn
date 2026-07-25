import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';
import { Notification } from '../../components/notification/notification';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CourseSummaryWidget, Notification],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';
  availableCoursesCount = 0;

  constructor(private courseService: CourseService) {}

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

  ngOnInit() {
    this.courseService.getCourses().subscribe((courses) => {
      this.availableCoursesCount = courses.length;
      console.log('HomeComponent initialised — courses loaded');
    });
  }

  ngOnDestroy() {
    console.log('HomeComponent destroyed');
  }
}
