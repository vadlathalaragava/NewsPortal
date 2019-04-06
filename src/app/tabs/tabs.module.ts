import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import {NewsPageModule} from '../news/news.module';
import {NewsSinglePageModule} from '../news-single/news-single.module';
import {ContactPageModule} from '../contact/contact.module';
import {AboutPageModule} from '../about/about.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NewsPageModule,
    NewsSinglePageModule,
    ContactPageModule,
    AboutPageModule, 
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
