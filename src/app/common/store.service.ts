import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  saveCourse(courseId: number, changes): Observable<Response> {

    return fromPromise(fetch(`http://applicazioni-web.net/colposcopy_2021/cf_update.php`, {
      method: 'POST',
      body: JSON.stringify(changes),
      headers: {
        'content-type': 'application/json'
      }
    }));

    /* return fromPromise(fetch(`http://applicazioni-web.net/colposcopy_2021/cf_update.php`, {
      method: 'POST',
      body: changes,
      headers: {
        'content-type': 'multipart/form-data'
      }
    })); */


  }
}
