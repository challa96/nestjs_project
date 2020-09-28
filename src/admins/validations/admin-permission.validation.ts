import { strict } from "assert";
import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { getManager } from "typeorm";

@ValidatorConstraint({name:'jsonbValidation',async:true})
export class IsJsonbValid implements ValidatorConstraintInterface {
  public error_message:string;
  async validate(permission_json:any, args:ValidationArguments):Promise<any>{
    let arr = ['orders','active','options','store_ids','read_only'];
    if(permission_json.constructor === Object && Object.keys(permission_json).length>0){
      if(this.check_json(this.error_message,arr,permission_json)){
        return true;
      }
    //   if(permission_json.hasOwnProperty('orders') && permission_json.orders.constructor === Object && Object.keys(permission_json.orders).length > 0){
    //       if(!(permission_json['orders'].hasOwnProperty('active') && permission_json['orders']['active'] !== null )){
    //         this.error_message = "Key active is null for Orders";
    //         return false;
    //       }
    //       if(permission_json['orders'].hasOwnProperty('options') && permission_json['orders']['options'].constructor === Object && Object.keys(permission_json['orders']['options']).length>0){
    //           let options_obj = permission_json['orders']['options'];
    //           if(!(options_obj.hasOwnProperty('read_only') && options_obj['read_only'] !== null)){
    //             this.error_message = "options object is not having read_only key which is required";
    //             return false;
    //           }
    //           if(!options_obj.hasOwnProperty('store_ids')){
    //             this.error_message = "Options Object must contain store_ids which is required";
    //             return false;
    //           }
    //       } 
    //       //else{
    //         this.error_message = "Order Object must contain options Object";
    //         //this.error_message = "Options Object cannot be empty";
    //         return false
    //       //}
    //     //   this.error_message = "Order Object must contain options Object";
    //     //   return false
    //   } else {
    //     this.error_message = 'Orders Object cannot be empty';
    //     return false; 
    //   }
      return false;
    } 
    this.error_message = "permission object  is empty";
    return false;

        //let keys = Object.keys(json);

        /* console.log("Validation json ==",json,"===",args);
        console.log('args===',args.object[`class_entity_${args.property}`],"====",keys.length,keys); */
        /* if(keys.length == 0){
            return false;
        }
        if(json.constructor !== Object){
            return false;
        }
        if(!json.hasOwnProperty('orders')){
            return false;
        }
        if(json['orders'].constructor !== Object){
            return false;
        }
        if(!(json['orders'].hasOwnProperty('active') && json['orders']['active'])){
            return false;
        }

        return false;*/ 

    } 

    defaultMessage(args:ValidationArguments){
        return `${this.error_message} `;
    }

    check_json(error_message,arr,json_obj){
      console.log("ERRORRR1111==",json_obj);
      for(let ii in json_obj){
        console.log("ERRORR===",ii, json_obj[ii] instanceof Object)
        if(arr.includes(ii) && json_obj[ii] instanceof Object && Object.keys(ii).length > 0){
          console.log("Came here==",ii)
          this.check_json(error_message,arr, json_obj[ii]);  
        }
        if(arr.includes(ii)){
          if(json_obj[ii] === null || json_obj[ii] === undefined ){
            console.log("Came here111",ii)
            this.error_message = `${ii} must contains values`;
            return false;
          }
        }
            this.error_message = `${ii} must contains values`;
            return false;
        }
        return true;
    }
}


export function JsonbValidation(validationOptions?:ValidationOptions){
    return function(object:Object, propertyName:string){
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options:validationOptions,
            constraints:[],
            validator:IsJsonbValid
        });
    };
}



/* export function JsonbValidation(entity:Function , validationOptions?:ValidationOptions){

} */