import { Routes } from '@angular/router';
import path from 'path';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
    {
        path: '', component: HomePageComponent
    },
    {
        path: 'contact-page', component: ContactPageComponent
    },
];
