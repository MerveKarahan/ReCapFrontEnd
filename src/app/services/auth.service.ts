import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangePassword } from '../models/changePassword';
import { Login } from '../models/login';
import { Register } from '../models/register';
import { ResponseModel } from '../models/response-model';
import { SingleResponseModel } from '../models/single-response-model';
import { TokenModel } from '../models/token-model';
import { LocalStorageService } from './local-storage.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl="https://localhost:44348/api/"
  constructor(private httpClient:HttpClient) { }

  login (loginModel:Login) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.baseUrl+"Auth/login",loginModel)

  }
  register(registerModel:Register){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.baseUrl+"Auth/register",registerModel)
  }
changePassword(changePassword:ChangePassword){
  return this.httpClient.post<ResponseModel>(this.baseUrl+"Users/changepassword",changePassword)
}

}