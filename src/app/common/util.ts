import {Observable, Observer} from 'rxjs';
// import { UserCodes } from '../model/user-codes';

export function createHttpObservable(url: string): any {
// export function createHttpObservable(url: string): Observable<UserCodes[]> {
    return new Observable((observer: Observer<any>) => {
    // return Observable.create(observer => {

        const controller = new AbortController();
        const signal = controller.signal;

        fetch(url, {signal})
            .then(response => {

                if (response.ok) {
                    return response.json();
                }
                else {
                    observer.error('Request failed with status code: ' + response.status);
                }
            })
            .then(body => {

                observer.next(body);

                observer.complete();

            })
            .catch(err => {

                observer.error(err);

            });

        return () => controller.abort();


    });
}
