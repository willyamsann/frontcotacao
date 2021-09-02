import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProviderDetailsComponent } from './components/provider-details/provider-details.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddProviderComponent } from './components/add-provider/add-provider.component';
import { ProvidersListComponent } from './components/providers-list/providers-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'teste', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'providers', component: ProvidersListComponent },
  { path: 'provider-details', component: ProviderDetailsComponent },
  { path: 'add-provider', component: AddProviderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
