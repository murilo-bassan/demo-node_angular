import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { App } from './app';
import {Other} from './components/other/other'

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "home",
        component: Home
    },
    {
        path: "other",
        component: Other
    }
];
