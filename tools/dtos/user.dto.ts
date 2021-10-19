import { RoleModel } from '../model/role.model';
import { GroupModel } from '../model/group.model';

export class UserCreateDto{
name:string;
surname:string;
image:string;
password:string;
email:string;
birthDay:Date;
}

export class UserUpdateDto{
  name:string;
  surname:string;
  image:string;
  password:string;
  email:string;
  birthDay:Date;
  roles:RoleModel[];
  groups:GroupModel[];
}

export class UserLoginDto {
  email:string;
  password:string;

}
