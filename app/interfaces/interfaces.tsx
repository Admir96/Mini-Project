export interface regUser {
   username? :string,
   password?: string 
   confirmPassword?: string
    subscribeToNewsLetter?: SubscribeToNewsLetter 
    gender?: Gender 
    status?: Status 
    yearOfBirth?: Number
}
export interface products {
  id:number;
  name:string;
  price:number;
  linkedProducts?: products[];
}

export interface logUser{
  name:string;
  password:string;
}

export enum Gender{
  'male',
  'famale',
  'other'
}
export enum SubscribeToNewsLetter{
  'Yes',
  'No'
}
export enum Status{
  'Active',
  'Inactive'
}