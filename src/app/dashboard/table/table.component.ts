import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../shared/services/service';
import { Router,ActivatedRoute } from '@angular/router';
import {ToasterService} from '../../shared/services/toaster.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { CookieService } from 'ngx-cookie';
//import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';
import {ExcelService} from '../../shared/services/excel.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
export class NgbdModalContent {
    @Input() name;
    constructor(public activeModal: NgbActiveModal) { }
}
@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    //providers: [NgbPaginationConfig] 
})

export class TableComponent implements OnInit {
    categorydata: any;
    //currentPage2 :any;
    pno:any;
    totalrecord:any
    itemsPerPage:any;
    currentPage:any;
    totalRecords: any;
    initialPageValue = 1;
    startpagevalue = 0;
    restid:any;
    qr:any;
    tabid:any;
    closeResult:any;
    public myAngularxQrCode: string = null;
    constructor(private modalService: NgbModal,private appservice: AppService,private router: Router, private route: ActivatedRoute, private toasterservice: ToasterService, private loaderservice: LoaderService, private cookieservice: CookieService, private excelService:ExcelService  ){
        this.myAngularxQrCode = 'Your QR code data string';
    }
    //config.boundaryLinks = true
    ngOnInit() {
        this.restid =JSON.parse(this.cookieservice.get("loginuserMerck")).restaurant_id;
        if (!this.cookieservice.get("loginuserMerck")) {
            this.router.navigate(['/auth']);
        }
        this.getcategory();
        
    }
    getcategory() {
        
        this.appservice.table(this.startpagevalue,10,this.restid)
            .subscribe(
                data => {
                    if (data.status == '1') {
                       // this.currentPage2=data.count;
                        this.myAngularxQrCode = 'Your QR code data string';
                        this.categorydata = data.data;
                        this.totalRecords = data.record;
                        this.itemsPerPage =10;
                        this.currentPage =this.initialPageValue;
                    }
                }
            );
    }
    deletecategory(id){
        this.appservice.deletecategory(id)
            .subscribe(
                data => {
                    console.log(data);
                    if(data.status=='1')
                    {
                        this.categorydata = data.data;
                        this.toasterservice.Success(data.message);   
                        this.router.navigate(['/category']);                
                    }else if(data.status=='2'){
                        this.toasterservice.Error(data.message);
                        this.router.navigate(['/category']);  
                    }else{
                        this.toasterservice.Error(data.message);
                    }
                }
            );
    }
    goToCreatecategory(id) {
        // alert();
        this.router.navigate(['/create-table', id]);
    }
    goToaddcategory(id) {
        // alert();
        this.router.navigate(['/create-table', id]);
    }
    handleChange(en){
        this.pno=en-1;
         this.appservice.table(this.pno,10,this.restid)
        .subscribe(
            data => {
                if(data.status=='1'){
                    this.categorydata = data.data;
                    this.totalRecords = data.record;
                    this.itemsPerPage =10;
                    this.currentPage =en;
                }
            }
        );
    }

    exportAsXLSX():void {
        console.log("excel download");
        this.excelService.exportAsExcelFile(this.categorydata, 'sample');
     }
     getrecord(){
        this.totalrecord=document.getElementById("getpage");
        this.appservice.table(this.startpagevalue,this.totalrecord.value,this.restid)
        .subscribe(
            data => {
                if(data.status=='1'){
                    this.categorydata = data.data;
                    if(this.totalrecord.value == 10){
                        this.totalRecords = data.record;
                    }else{
                        this.totalRecords = '';
                    }
                    this.itemsPerPage =10;
                    this.currentPage =this.initialPageValue;
                }
            }
        );
    }
    open(content,id) {
        
        this.appservice.tabledetail(id)
        .subscribe(
            data => {
                if(data.status=='1'){
                    this.restid= data.data[0].restaurant_id;
                    this.tabid= data.data[0].id;
                    this.qr = "http://13.233.172.180/Signup?restaurantcode="+ this.restid+"&tableid="+this.tabid;
                    //console.log(this.qr);
                    this.myAngularxQrCode =  this.qr;
                } else {
                   
                }
            }
        );
         this.modalService.open(content).result.then((result) => {
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

}
