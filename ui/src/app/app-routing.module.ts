import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./views/login/login.component";
import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {InsertPackageComponent} from "./views/insert-package/insert-package.component";
import {PackageAdministrationComponent} from "./views/package-administration/package-administration.component";

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
},
  {
    path: 'overview',
    component: DashboardComponent,
  },
  {
    path: 'administration',
    children: [
      {
        path: 'manage-packages',
        component: PackageAdministrationComponent,
      },
      {
      path: 'insert-package',
      component: InsertPackageComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
