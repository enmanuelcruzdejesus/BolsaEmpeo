import { Injectable } from '@angular/core';

declare var toastr: any;


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  Success(title: string, mesage?:string){

    toastr.success(title,mesage);

  }

  Warning(message: string, title?:string){

    toastr.warning(message,title);

  }

  Error(message: string, title?:string){
    toastr.error(message,title);
  }

  Info(message: string){
    toastr.Infor(message);
  }

}
