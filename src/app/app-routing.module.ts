import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjecListingComponent } from './components/projec-listing/projec-listing.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MediaComponent } from './components/media/media.component';

const routes: Routes = [
  {
   path:'' , component:HomeComponent
  },
{
  path: 'projects',component: ProjecListingComponent
},
{
  path:'project/:projectId',component:ProjectDetailComponent
},
{
  path:'about-us',component:AboutUsComponent
},
{
  path:'media',component:MediaComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
