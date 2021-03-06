import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDTO } from '../models/carDTO';
import { ListResponseModel } from '../models/list-response-model';
import { ResponseModel } from '../models/response-model';
import { SingleResponseModel } from '../models/single-response-model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  baseUrl="http://localhost:58739/api/"
  
  constructor(private httpClient:HttpClient) { }

  getCarDTO():Observable<ListResponseModel<CarDTO>>{
    return this.httpClient.get<ListResponseModel<CarDTO>>(this.baseUrl+"Cars/getallcars")
  }
getCarById(carId:number):Observable<SingleResponseModel<CarDTO>>{
  return this.httpClient.get<SingleResponseModel<CarDTO>>(this.baseUrl+"Cars/getbyid?id="+carId)

}
getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
  return this.httpClient.get<ListResponseModel<Car>>(this.baseUrl+"Cars/getcarbybrandid?brandId="+brandId)
}
getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>>{
  return this.httpClient.get<ListResponseModel<Car>>(this.baseUrl+"Cars/getcarsbycolorid?colorId="+colorId)
}

    addCar(carModel:Car){
      return this.httpClient.post<ResponseModel>(this.baseUrl+"Cars/add",carModel)
    }
    updateCar(carModel:Car){
      return this.httpClient.post<ResponseModel>(this.baseUrl+"Cars/update",carModel)
    }
}
