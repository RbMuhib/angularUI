import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {loginResponse, loginUser} from '../model/auth.model'
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
@Injectable()
export class AuthService {
        constructor(private http: HttpClient){}

        loginUser(user: loginUser): Observable <loginResponse>{
                return this.http.post<loginResponse>(environment.rootUrl + "/api/Login/Login", user) 

        }

}