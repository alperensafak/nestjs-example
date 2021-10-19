import { TicketTypeModel } from '../model/ticket-type.model';
import { UserModel } from '../model/user.model';
import { AuditModel } from '../model/audit.model';
import { ActivityModel } from '../model/activity.model';
import { InventoryModel } from '../model/inventory.model';


export class TicketCreateDto{
  name:string;
  description:string;
  type:TicketTypeModel;
  responsible:UserModel;
  audit:AuditModel;
  activities:ActivityModel[];
  inventories:InventoryModel[];
}