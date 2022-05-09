import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  private storage: any;



  constructor() {
    this.storage = window.localStorage
   }

  setUser(key: string, value: any){
    this.storage.setItem(key, JSON.stringify(value));
  }

  getUser(key: string): any {
    return JSON.parse(this.storage.getItem(key))
  }

  deleteUser(key:string): boolean{
    this.storage.removeItem(key);
    return true
  }

}
