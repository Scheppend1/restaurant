import { Component, OnInit } from '@angular/core';
import {AppService} from '../../shared/services/service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ActivatedRoute ,Router} from '@angular/router';
import {ToasterService} from '../../shared/services/toaster.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { getBootstrapListener } from '@angular/router/src/router_module';
import { CookieService } from 'ngx-cookie';
@Component({
    selector: 'app-table',
    templateUrl: './create-table.component.html',
    styleUrls: ['./create-table.component.scss']
})

export class CreatetableComponent implements OnInit{
    id: string;
    showbutton: boolean;
    TableForm: FormGroup;
    showErrorMsg: string;
    restid:any;
    constructor(private appservice: AppService,private router: Router, private route: ActivatedRoute, private toasterservice: ToasterService, private loaderservice: LoaderService, private cookieservice: CookieService ){}

    ngOnInit(){
        
        if(!this.cookieservice.get("loginuserMerck")){
            this.router.navigate(['/auth']);
        }
        this.restid =JSON.parse(this.cookieservice.get("loginuserMerck")).restaurant_id;
        this.id = this.route.snapshot.paramMap.get('id');
        if(this.id){
            this.getcategory();
            this.showbutton = true;
            console.log(this.id);
            this.TableForm = new FormGroup({
                name: new FormControl("", [Validators.required]),
             });
        }
    }
    getcategory(){
      this.appservice.tabledetail(this.id)
        .subscribe(
            data=>{
                console.log(data);
                if(data.status=='1')
                {
                    this.showErrorMsg = "";
                    this.TableForm = new FormGroup({
                        name: new FormControl(data.data[0].name, [Validators.required]),
                    });
                    
                }else{
                    this.showbutton = false;
                }
            }
        );
    }
    createcategory(){
        if(this.TableForm.invalid){
            this.toasterservice.Error("Please enter the required filed");
            return;
        }    
        if(this.TableForm.valid){
            this.loaderservice.display(true);
            this.appservice.addtable(this.TableForm.value,this.restid)
            .subscribe(
            data=>{
                console.log(data);
                if(data.status=='1')
                {
                    this.toasterservice.Success(data.message);   
                    this.router.navigate(['/table']);                
                }else if(data.status=='2'){
                    this.toasterservice.Error(data.message);
                    this.router.navigate(['/table']);  
                }else{
                    this.toasterservice.Error(data.message);
                }
            }
        );
            //console.log(this.UserForm.value);
        }
    }
    editcategory(){
        if(this.TableForm.invalid){
            this.toasterservice.Error("Please enter the required filed");
            return;
        }    
        if(this.TableForm.valid){
            this.loaderservice.display(true);
            this.appservice.edittable(this.TableForm.value,this.id,this.restid)
            .subscribe(
                data=>{
                    console.log(data);
                    if(data.status=='1')
                    {
                        this.toasterservice.Success(data.message);   
                        this.router.navigate(['/table']);                
                    }else if(data.status=='2'){
                        this.toasterservice.Error(data.message);
                        this.router.navigate(['/table']);  
                    }else{
                        this.toasterservice.Error(data.message);
                    }
                }
            );
        }
    }
    Gotolist(){
        this.router.navigate(['/table']);
    }
}


