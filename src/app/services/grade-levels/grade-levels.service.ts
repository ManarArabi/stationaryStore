import { Injectable } from '@angular/core';
import { GradeLevels } from './../../mocks/grade-levels';
import { GradeLevel } from './../../types/grade-levels';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeLevelsService {

  constructor() { }

  getGradeLevels(): Observable<GradeLevel[]>{
    return of(GradeLevels);
  }
}
