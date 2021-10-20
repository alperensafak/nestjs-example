import { RoleModel } from 'tools/models/role.model';
import { GroupModel } from 'tools/models/group.model';
import { IsNotEmpty, Length, IsEmail, IsDateString } from 'class-validator';

export class UserCreateDto {
  @IsNotEmpty()
  @Length(2, 20)
  name: string;
  surname: string;
  image: string;
  password: string;
  @IsEmail()
  email: string;
  @IsDateString()
  birthDay: Date;
}

export class UserUpdateDto {
  name: string;
  surname: string;
  image: string;
  password: string;
  email: string;
  birthDay: Date;
  roles: RoleModel[];
  groups: GroupModel[];
}

export class UserLoginDto {
  email: string;
  password: string;
}