import { Injectable } from "@nestjs/common";
import { User } from "./interfaces/user";

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {name: "José", email: "jose@email.com", age: 19, id: "132323", password: "kasakshiyq8ejindwqi"}
  ];
  findAll(): User[] {
    return this.users;
  } 
}