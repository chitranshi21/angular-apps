import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { ServerResolver } from './servers/server/server-resolver.service';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';

const appRoutes: Routes = [
  { path: 'users', component: UsersComponent, children:[
    { path: ':id', component: UserComponent }
  ] },
  { path: 'servers', canActivateChild:[AuthGuardService], component: ServersComponent ,children: [
    {path: ':id', component: ServerComponent, resolve:{server: ServerResolver}},
    {path: ':id/edit', component: EditServerComponent}
  ] },
  {path: '', component: HomeComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServersService, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
