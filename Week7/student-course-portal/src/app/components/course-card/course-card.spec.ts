import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { CourseCard } from './course-card';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';

describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;
  let store: MockStore;

  const mockCourse = { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [
        provideMockStore({
          initialState: { enrollment: { enrolledCourseIds: [] } },
        }),
        { provide: Router, useValue: { navigate: () => {} } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    component.course = mockCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the course name', () => {
    const nameText = fixture.debugElement.query(By.css('p:nth-of-type(2)')).nativeElement.textContent;
    expect(nameText).toContain('Data Structures');
  });

  it('should dispatch enrollInCourse when Enroll is clicked and not yet enrolled', () => {
    spyOn(store, 'dispatch');
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(enrollInCourse({ courseId: 1 }));
  });

  it('should dispatch unenrollFromCourse when already enrolled', () => {
    component.isEnrolled = true;
    fixture.detectChanges();
    spyOn(store, 'dispatch');
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(unenrollFromCourse({ courseId: 1 }));
  });

  it('should log previous and current course on ngOnChanges', () => {
    spyOn(console, 'log');
    component.ngOnChanges({
      course: {
        previousValue: undefined,
        currentValue: mockCourse,
        firstChange: true,
        isFirstChange: () => true,
      },
    });
    expect(console.log).toHaveBeenCalledWith('Previous course:', undefined);
    expect(console.log).toHaveBeenCalledWith('Current course:', mockCourse);
  });
});
