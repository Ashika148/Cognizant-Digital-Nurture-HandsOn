import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { Highlight } from '../../directives/highlight';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, CreditLabelPipe, Highlight],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges, OnInit {
  @Input() course!: { id: number, name: string, code: string, credits: number, gradeStatus?: string };

  isExpanded = false;
  enrolledIds$: Observable<number[]>;
  isEnrolled = false;

  constructor(
    private store: Store,
    private router: Router
  ) {
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
  }

  ngOnInit() {
    this.enrolledIds$.subscribe((ids) => {
      this.isEnrolled = ids.includes(this.course.id);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['course']) {
      console.log('Previous course:', changes['course'].previousValue);
      console.log('Current course:', changes['course'].currentValue);
    }
  }

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  toggleEnroll() {
    if (this.isEnrolled) {
      this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
    } else {
      this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
    }
  }

  viewDetails() {
    this.router.navigate(['courses', this.course.id]);
  }

  get borderColor() {
    if (this.course.gradeStatus === 'passed') return 'green';
    if (this.course.gradeStatus === 'failed') return 'red';
    return 'grey';
  }

  get cardClasses() {
    return {
      'card--enrolled': this.isEnrolled,
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded,
    };
  }
}
