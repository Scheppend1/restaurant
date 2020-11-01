import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dashboard1Component } from "./dashboard1/dashboard1.component";
import {AppuserComponent} from './appuser/appuser.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {ProductComponent} from './product/product.component';
import {CreateProductComponent} from './create-product/create-product.component';
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
import { CreateManagerComponent } from './create-manager/create-manager.component';

const routes: Routes = [
  {
    path: '',
    children: [
     
      {
        path: 'rejectorder',
        component: RejectorderComponent,
        data: {
          title: 'Reject Order'
        }
      },
      {
        path: 'pendingorder',
        component: PendingorderComponent,
        data: {
          title: 'Pending Order'
        }
      },
      {
        path: 'closeorder',
        component: CloseorderComponent,
        data: {
          title: 'Close Order'
        }
      },
      {
        path: 'dashboard',
        component: Dashboard1Component,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'table',
        component: TableComponent,
        data: {
          title: 'TAble Manage'
        }
      },
      {
        path: 'create-table/:id',
        component: CreatetableComponent,
        data: {
          title: 'Create Table'
        }
      },
      {
        path: 'appuser',
        component: AppuserComponent,
        data: {
          title: 'App user'
        }
      }, 
      {
        path: 'create-manager/:id',
        component: CreateManagerComponent,
        data: {
          title: 'Create Manager'
        }
      },
      {
        path: 'create-user/:id',
        component: CreateUserComponent,
        data: {
          title: 'Create User'
        }
      },
      {
        path: 'product',
        component: ProductComponent,
        data: {
          title: 'Product list'
        }
      },
      {
        path: 'create-product/:id',
        component: CreateProductComponent,
        data: {
          title: 'Add Product'
        }
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact list'
        }
      },
      {
        path: 'create-contact/:id',
        component: CreateContactComponent,
        data: {
          title: 'Add Contact'
        }
      },
      {
        path: 'blog',
        component: BlogComponent,
        data: {
          title: 'Blog list'
        }
      },
      {
        path: 'create-blog/:id',
        component: CreateBlogComponent,
        data: {
          title: 'Add Blog'
        }
      }, 
      {
        path: 'category',
        component: CategoryComponent,
        data: {
          title: 'Category list'
        }
      },
      {
        path: 'create-category/:id',
        component: CreateCategoryComponent,
        data: {
          title: 'Add Category'
        }
      },
      { 
        path: 'carrier',
        component: CarrierComponent,
        data: {
          title: 'Carrier list'
        }
      },
      { 
        path: 'create-carrier/:id',
        component: CreateCarrierComponent,
        data: {
          title: 'Add Carrier'
        }
      },
      { 
        path: 'addtocart',
        component: AddtocartComponent,
        data: {
          title: 'Add to cart list'
        }
      },  
      { 
        path: 'todaysold',
        component: TodaySoldComponent,
        data: {
          title: 'Today Sold list'
        }
      },
      {  
        path: 'expirethismonth',
        component: ExpirethismonthComponent,
        data: {
          title: 'Expire this month list'
        }
      }, 
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
