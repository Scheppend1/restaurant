import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { ChartistModule } from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { Dashboard1Component } from "./dashboard1/dashboard1.component";
//import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import {AppuserComponent} from './appuser/appuser.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {ProductComponent} from './product/product.component';
import {CreateProductComponent} from './create-product/create-product.component';
import { CKEditorModule } from 'ngx-ckeditor';
import {ContactComponent} from './contact/contact.component';
import {CreateContactComponent} from './create-contact/create-contact.component';
import {BlogComponent} from './blog/blog.component';
import {CreateBlogComponent} from './create-blog/create-blog.component';
import {CategoryComponent} from './category/category.component';
import {CreateCategoryComponent} from './create-category/create-category.component';
import {CarrierComponent} from './carrier/carrier.component';
import {CreateCarrierComponent} from './create-carrier/create-carrier.component';
import {AddtocartComponent} from './addtocart/addtocart.component';
import {TodaySoldComponent} from './todaysold/todaysold.component';
import {ExpirethismonthComponent} from './expirethismonth/expirethismonth.component';
import {TableComponent} from './table/table.component';
import {CreatetableComponent} from './create-table/create-table.component';
import { RejectorderComponent } from './rejectorder/rejectorder.component';
import { PendingorderComponent } from './pendingorder/pendingorder.component';
import {CloseorderComponent } from './closeorder/closeorder.component';
//import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { CreateManagerComponent} from './create-manager/create-manager.component';
import { QRCodeModule } from 'angularx-qrcode';
@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ChartistModule,
        NgbModule,
        MatchHeightModule,
        ReactiveFormsModule, 
        FormsModule,
        CKEditorModule,
        QRCodeModule,
        //BarecodeScannerLivestreamModule
    ],
    exports: [],
    declarations: [
        TableComponent,
        CreatetableComponent,
        Dashboard1Component,
        AppuserComponent,
        CreateUserComponent,
        ProductComponent,
        CreateProductComponent,
        ContactComponent,
        CreateContactComponent,
        BlogComponent,
        CreateBlogComponent,
        CategoryComponent,
        CreateCategoryComponent,
        CarrierComponent,
        CreateCarrierComponent,
        AddtocartComponent,
        TodaySoldComponent,
        ExpirethismonthComponent,
        RejectorderComponent,
        PendingorderComponent,
        CloseorderComponent,
        CreateManagerComponent,
    ],
    providers: [],
})
export class DashboardModule { }
