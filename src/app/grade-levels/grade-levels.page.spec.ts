import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GradeLevelsPage } from './grade-levels.page';

describe('GradeLevelsPage', () => {
  let component: GradeLevelsPage;
  let fixture: ComponentFixture<GradeLevelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeLevelsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GradeLevelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
