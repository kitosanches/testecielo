import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import {InputTextModule} from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';
import {CarouselModule} from 'primeng/carousel';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {TooltipModule} from 'primeng/tooltip';
import {InputMaskModule} from 'primeng/inputmask';
import {KeyFilterModule} from 'primeng/keyfilter';
import {ToastModule} from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    TabMenuModule,
    TabViewModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    CardModule,
    DataViewModule,
    CarouselModule,
    ToggleButtonModule,
    TooltipModule,
    InputMaskModule,
    KeyFilterModule,
    ToastModule
  ],
  declarations: [],
  exports:  [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    TabMenuModule,
    TabViewModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    CardModule,
    DataViewModule,
    CarouselModule,
    ToggleButtonModule,
    TooltipModule,
    InputMaskModule,
    KeyFilterModule,
    ToastModule
  ]
})
export class PrimengModule { }
