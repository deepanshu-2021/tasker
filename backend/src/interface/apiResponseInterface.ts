export interface IapiResponse<T>{
    success:true;
    data?: T;
    message?: string;
}