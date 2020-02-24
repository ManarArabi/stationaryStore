import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PackagesPage } from './packages.page';

describe('PackagesPage', () => {
  let component: PackagesPage;
  let fixture: ComponentFixture<PackagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PackagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
