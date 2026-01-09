import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Players } from './players/players';

export const routes: Routes = [
    {
        path:'',
        title:'1995-1996 Penguins',
        component:Home,
    },
    {
        path:'players',
        title:'test',
        component:Players
    }
];
