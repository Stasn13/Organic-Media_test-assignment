import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class SendCredentialsService {
    constructor(
        private http: HttpClient
    ) {
    }

    sendCredentials(username, password): Observable<any> {
        return this.http.post('http://localhost:8888/user', {username, password}, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        });
    }
}
