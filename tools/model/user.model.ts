import { AuditModel } from './audit.model';
import { RoleModel } from './role.model';
import { GroupModel } from './group.model';
import * as mongoose from 'mongoose'

export class UserModel {
  id:string;
  name:string;
  surname:string;
  image:string;
  email:string;
  password:string;
audit:AuditModel;
birthDay: Date
  roles: RoleModel[];
groups:GroupModel[];
}


export const UserSchema = new mongoose.Schema({

  name:String,
  surname:String,
  image:String,
  email:String,
  password:String,
  birthDay: Date,
  audit:Object,
  roles:Array,
  groups:Array,
})