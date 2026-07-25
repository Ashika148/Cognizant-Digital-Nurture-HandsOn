import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseList } from './course-list';
import { Course } from '../../models/course.model';

describe('CourseList (NgRx)', () => {
  let fixture: ComponentFixture<CourseList>;
  let store: MockStore;

  const mockCourses: Course[] = [
    { id: 1, name: 'Angular Fundamentals', code: 'CS101', credits: 3, gradeStatus: 'passed' },
    { id: 2, name: 'Data Structures', code: 'CS102', credits: 4, gradeStatus: 'pending' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseList],
      providers: [
        provideMockStore({
          initialState: {
            course: { courses: mockCourses, loading: false, error: null },
            enrollment: { enrolledCourseIds: [] },
          },
        }),
        { provide: Router, useValue: { navigate: () => {} } },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { queryParamMap: { get: () => null } } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseList);
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should render course cards from the initial state', () => {
    const cards = fixture.debugElement.queryAll(By.css('app-course-card'));
    expect(cards.length).toBe(2);
  });

  it('should show the loading indicator when loading is true', () => {
    store.setState({
      course: { courses: [], loading: true, error: null },
      enrollment: { enrolledCourseIds: [] },
    });
    fixture.detectChanges();

    const loadingText = fixture.debugElement.query(By.css('p'))?.nativeElement.textContent;
    expect(loadingText).toContain('Loading courses');
  });
});
