import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {AppService} from '../../shared/services/service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ActivatedRoute ,Router} from '@angular/router';
import {ToasterService} from '../../shared/services/toaster.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { CookieService } from 'ngx-cookie';
//import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
    selector: 'app-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.scss'],
})

export class CreateProductComponent implements OnInit{
    showbutton: boolean;
    id: any;
    ProductForm: FormGroup;
    showErrorMsg: string;
    categorydata : any;
    restdata :any;
    public editorValue: string = '';
    file: any;
    fileName: any;
    name: any;
    descen: any;
    loguser :any;
    d:any;
    exdate:any;
    expiredate:any;
    hsndata:any;
    gst:any;
    gstvalue:any;
    restid:any;
    //baseurl : any;
    //@ViewChild(BarecodeScannerLivestreamComponent)
    //barecodeScanner: BarecodeScannerLivestreamComponent;
    barcodeValue :any;
   constructor(private appservice: AppService,private router: Router, private route: ActivatedRoute, private toasterservice: ToasterService, private loaderservice: LoaderService, private cookieservice: CookieService  ){}
    
    ngOnInit(){
        if(!this.cookieservice.get("loginuserMerck")){
            this.router.navigate(['/auth']);
        }
        this.loguser =JSON.parse(this.cookieservice.get("loginuserMerck")).id;
        this.restid =JSON.parse(this.cookieservice.get("loginuserMerck")).restaurant_id;
        this.id = this.route.snapshot.paramMap.get('id');
        if(this.id){
            this.getproduct();
            this.getcategory();
            this.getrestdata();
            this.showbutton = true;
            this.exdate=new Date();
            console.log(this.id);
            this.ProductForm = new FormGroup({
                cat_id: new FormControl("", [Validators.required]),
                name: new FormControl("", [Validators.required]),
                cost: new FormControl("", [Validators.required]),
                tags: new FormControl("", [Validators.required]),
                description: new FormControl("", [Validators.required]),
                in_stock: new FormControl(1, [Validators.required]),
                is_veg: new FormControl(1, [Validators.required]),
            });
        }
       
    }
    
    getcategory(){
        //console.log(this.loguser);
        this.appservice.category(0,100,this.restid)
        .subscribe(
            data=>{
                if(data.status=='1'){
                    this.categorydata = data.data;
                }
            }
        );
    }
    getrestdata(){
        this.appservice.restdata()
        .subscribe(
            data=>{
                if(data.status=='1'){
                    console.log(data);
                    this.restdata = data.data;
                }
            }
        );
    }
    getproduct(){
        this.appservice.ProductDetail(this.id)
            .subscribe(
              data=>{
                  //console.log(data);
                  if(data.status=='1')
                  {
                      this.showErrorMsg = "";
                      this.descen=data.data[0].image;
                      this.exdate=data.data[0].expire_date;
                      this.gst=data.data[0].gst;
                      this.ProductForm = new FormGroup({
                        cat_id: new FormControl(data.data[0].cat_id, [Validators.required]),
                        name: new FormControl(data.data[0].name, [Validators.required]),
                        cost: new FormControl(data.data[0].cost, [Validators.required]),
                        description: new FormControl(data.data[0].description, [Validators.required]),
                        tags: new FormControl(data.data[0].tags, [Validators.required]),
                        in_stock: new FormControl(data.data[0].In_stock, [Validators.required]),
                        is_veg: new FormControl(data.data[0].Is_veg, [Validators.required]),
                    });
                      console.log(this.ProductForm);
                      
                  }else{
                      this.showbutton = false;
                  }
              }
          );
    }
    filechange(e){
        //console.log('dd');
        this.file = e.target.files[0];
        //console.log(this.file);
        this.fileName = e.target.files[0];
        this.name = e.target.files[0].name;
    }
    createproduct(image){
        console.log(image);
        console.log(this.ProductForm);
        if(this.ProductForm.invalid){
            this.toasterservice.Error("Please enter the required filed");
            return;
        }    
        if(this.ProductForm.valid){
            //console.log(this.ProductForm);
            this.loaderservice.display(true);
            this.appservice.addproduct( this.ProductForm.value,this.fileName,this.loguser,this.restid)
            .subscribe(
            data=>{
                console.log(data);
                if(data.status=='1')
                {
                    this.toasterservice.Success(data.message);   
                    this.router.navigate(['/product']);                
                }else if(data.status=='2'){
                    this.toasterservice.Error(data.message);
                    this.router.navigate(['/product']);  
                }else{
                    this.toasterservice.Error(data.message);
                }
            }
        );
            //console.log(this.UserForm.value);
        }
    }
    editproduct(){
        if(this.ProductForm.invalid){
            this.toasterservice.Error("Please enter the required filed");
            return;
        }    
        if(this.ProductForm.valid){
            this.loaderservice.display(true);
            this.appservice.editproduct(this.ProductForm.value,this.id,this.fileName,this.loguser,this.restid)
            .subscribe(
                data=>{
                    console.log(data);
                    if(data.status=='1')
                    {
                        this.toasterservice.Success(data.message);   
                        this.router.navigate(['/product']);                
                    }else if(data.status=='2'){
                        this.toasterservice.Error(data.message);
                        this.router.navigate(['/product']);  
                    }else{
                        this.toasterservice.Error(data.message);
                    }
                }
            );
        }
    }
    xyz(){
        console.log('ccc');
        this.barcodeValue ='aaaa';
        setTimeout(function() {
            $('#upfile').trigger('click');
          }, 10000);
        
        //$( '#upfile' ).off( 'click' );
        //$('#barcode').trigger('stop');
    }
    Gotolist(){
        this.router.navigate(['/product']);
    }
}


