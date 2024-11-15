import { IapiResponse } from "../interface/apiResponseInterface";
export class ApiResponse<T> implements IapiResponse<T> {
  message?: string;
  data?: T;
  success: true;
  constructor(data?: T,message?: string,) {
    this.message = message;
    this.data=data;
    this.success=true;
  }
}
