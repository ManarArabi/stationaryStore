import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchResPage } from './search-res.page';

describe('SearchResPage', () => {
  let component: SearchResPage;
  let fixture: ComponentFixture<SearchResPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchResPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
