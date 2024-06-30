import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { User } from "./models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User> {
    return this.httpClient.get("https://randomuser.me/api/").pipe(map((response: any) => new User(response.results[0])));
  }
}