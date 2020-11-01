import { Component, OnInit , Input} from '@angular/core';
import { AppService } from '../../shared/services/service';
import { Router,ActivatedRoute } from '@angular/router';
import {ToasterService} from '../../shared/services/toaster.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie';
import {ExcelService} from '../../shared/services/excel.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
export class NgbdModalContent {
    @Input() name;
    constructor(public activeModal: NgbActiveModal) { }
}
@Component({
    selector: 'app-todaysold',
    templateUrl: './todaysold.component.html',
    styleUrls: ['./todaysold.component.scss']
})

export class TodaySoldComponent implements OnInit {
    TodaySolddata: any;
    Salereport:FormGroup;
    excelbaseurl:any;
    startValue: any;
    endValue:any;
    startDateValue:any;
    endDateValue:any;
    totalRecords: any;
    initialPageValue = 1;
    startpagevalue = 0;
    pno:any;
    d:any;
    today :any;
    totalrecord:any
    itemsPerPage:any;
    currentPage:any;
    startdate:any;
    enddate:any;
    getstatusvalue:any;
    closeResult:any;
    statusreport:any;
    loguser:any;
    tabid:any;
    restid:any;
    rid:any;
    tid:any;
    itemifo:any;
    listid:any;
    resid:any;
    constructor(private modalService: NgbModal,private appservice: AppService,private router: Router, private route: ActivatedRoute, private toasterservice: ToasterService, private loaderservice: LoaderService, private cookieservice: CookieService, private excelService:ExcelService ){}
    ngOnInit() {
        this.d =new Date();
        this.today =this.d.getFullYear() + "-" + (this.d.getMonth()+1) + "-" + this.d.getDate();
        //this.endValue = this.d.getFullYear() + "-" + (this.d.getMonth()+1) + "-" + (this.d.getDate()-1);
        this.startValue =this.d.getFullYear() + "-" + (this.d.getMonth()+1) + "-" + (this.d.getDate()-2);
        this.loguser =JSON.parse(this.cookieservice.get("loginuserMerck")).id;
        this.endValue=this.d.getFullYear() + "-" + (this.d.getMonth()+1) + "-" + (this.d.getDate()+1);
        this.resid =JSON.parse(this.cookieservice.get("loginuserMerck")).restaurant_id;
        //console.log(this.endValue);
        //console.log(this.startValue);
        if(!this.cookieservice.get("loginuserMerck")){
            this.router.navigate(['/auth']);
        }
        this.getTodaySold();
        this.startdate=this.startValue;
        this.enddate=this.today;
    }

    getTodaySold() {
        this.appservice.getreport(this.startpagevalue,10,2,this.resid)
            .subscribe(
                data => {
                    if(data.status=='1'){
                        this.TodaySolddata = data.data;
                        this.totalRecords = data.record;
                        this.itemsPerPage =10;
                        this.currentPage =this.initialPageValue;
                        //this.ngOnInit();
                    } else {
                        this.TodaySolddata = data.data;
                        //this.ngOnInit();
                    }
                }
            );
    }
    getsalesreport(){
        this.startDateValue=document.getElementById("startdate");
        this.endDateValue=document.getElementById("enddate");
        this.appservice.getreport(this.startpagevalue,10,2,this.resid)
        .subscribe(
            data => {
                if(data.status=='1'){
                    this.TodaySolddata = data.data;
                   // this.excelbaseurl=sessionStorage.getItem("excelurl");
                    this.totalRecords = data.record;
                    this.itemsPerPage =10;
                    this.currentPage =this.initialPageValue;
                }else{
                    this.TodaySolddata = data.data;
                    this.totalRecords = data.record;
                    this.itemsPerPage =10;
                    this.currentPage =this.initialPageValue;
                }
            }
        );
    }
    handleChange(en){
        this.pno=en-1;
        this.startDateValue=document.getElementById("startdate");
        this.endDateValue=document.getElementById("enddate");
        this.appservice.getreport(this.pno,10,2,this.resid)
        .subscribe(
            data => {
                if(data.status=='1'){
                    this.TodaySolddata = data.data;
                   // this.excelbaseurl=sessionStorage.getItem("excelurl");
                    this.totalRecords = data.record;
                    this.itemsPerPage =10;
                    this.currentPage =en;
                } else {
                    this.TodaySolddata = data.data;
                }
            }
        );
    }

    exportAsXLSX():void {
        console.log("excel download");
        this.excelService.exportAsExcelFile(this.TodaySolddata, 'sample');
     }
    getrecord(){
        this.totalrecord=document.getElementById("getpage");
        this.startDateValue=document.getElementById("startdate");
        this.endDateValue=document.getElementById("enddate");
        this.appservice.getreport(this.startpagevalue,this.totalrecord.value,2,this.resid)
        .subscribe(
            data => {
                if(data.status=='1'){
                    this.TodaySolddata = data.data;
                   // this.excelbaseurl=sessionStorage.getItem("excelurl");
                    
                    if(this.totalrecord.value == 10){
                        this.totalRecords = data.record;
                    }else{
                        this.totalRecords = '';
                    }
                    this.itemsPerPage =10;
                    this.currentPage =this.initialPageValue;
                } else {
                    this.TodaySolddata = data.data;
                } 
            }
        );
    }
    getstatusrecord(){
        this.totalrecord=document.getElementById("getpage");
        this.startDateValue=document.getElementById("startdate");
        this.endDateValue=document.getElementById("enddate");
        this.appservice.getreport(this.startpagevalue,this.totalrecord.value,2,this.resid)
        .subscribe(
            data => {
                if(data.status=='1'){
                    this.TodaySolddata = data.data;
                   // this.excelbaseurl=sessionStorage.getItem("excelurl");
                    
                    if(this.totalrecord.value == 10){
                        this.totalRecords = data.record;
                    }else{
                        this.totalRecords = '';
                    }
                    this.itemsPerPage =10;
                    this.currentPage =this.initialPageValue;
                } else {
                    this.TodaySolddata = data.data;
                }
            }
        );
    }
    open(content,id) {
        
        this.appservice.getiteminfo(id)
        .subscribe(
            data => {
                if(data.status=='1'){
                    this.itemifo = data.data;
                } else {
                    this.itemifo = data.data;
                }
            }
        );
         this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    open1(content1,id) {
        this.listid=id;
        this.modalService.open(content1).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    // This function is used in open
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
    
    // Open modal with dark section
    openModal(customContent) {
        this.modalService.open(customContent, { windowClass: 'dark-modal' });
    }

    // Open content with dark section
    openContent() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    }

    changestatus(state,id){   
        
        this.loaderservice.display(true);
        this.restid=document.getElementById("restid");
        this.tabid=document.getElementById("tabid");
        this.appservice.updatestatus(state,this.restid.value,this.tabid.value,id)
        .subscribe(
            data=>{
                if(data.status=='1')
                {
                    this.toasterservice.Success(data.message);  
                    this.getTodaySold(); 
                }else if(data.status=='2'){
                    this.toasterservice.Error(data.message);
                }else{
                    this.toasterservice.Error(data.message);
                }
            }
        );
    } 
    changecook(con,val,oid){   
        
        this.loaderservice.display(true);
        this.appservice.updatecook(con,val,oid)
        .subscribe(
            data=>{
                if(data.status=='1')
                {
                    this.toasterservice.Success(data.message);
                    this.itemifo = data.data; 
                }else
                {
                    this.toasterservice.Error(data.message);
                    this.itemifo = data.data;
                }
            }
        );
    }
      
}
