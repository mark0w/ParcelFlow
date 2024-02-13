import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
    NbButtonModule,
    NbCardModule, NbContextMenuModule, NbDatepickerModule, NbFormFieldModule, NbIconModule,
    NbInputModule,
    NbLayoutModule, NbMenuModule,
    NbSidebarModule,
    NbThemeModule, NbTreeGridModule
} from "@nebular/theme";
import {NbEvaIconsModule} from "@nebular/eva-icons";
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SettingsComponent } from './views/settings/settings.component';
import { PackageAdministrationComponent } from './views/package-administration/package-administration.component';
import { NoDataComponent } from './views/no-data/no-data.component';
import { InsertPackageComponent } from './views/insert-package/insert-package.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SettingsComponent,
    PackageAdministrationComponent,
    NoDataComponent,
    InsertPackageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NbThemeModule.forRoot({name: 'dark'}),
        BrowserAnimationsModule,
        NbButtonModule,
        NbLayoutModule,
        NbSidebarModule.forRoot(),
        NbEvaIconsModule,
        FormsModule,
        NbCardModule,
        NbInputModule,
        NbIconModule,
        NbFormFieldModule,
        NbMenuModule.forRoot(),
        NbContextMenuModule,
        NbDatepickerModule.forRoot(),
        ReactiveFormsModule,
        NbTreeGridModule,
        NgxDatatableModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
