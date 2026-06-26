import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Players } from './players/players';
import { Results } from './results/results';
import { Playoffs } from './playoffs/playoffs';

export const routes: Routes = [
    {
        path:'',
        title:'1995-1996 Penguins',
        component:Home,
    },
    {
        path:'players',
        title:'Penguins Players',
        component:Players
    },
    {
        path:'results',
        title:'Penguins Results',
        component: Results
    },
    {
        path:'playoffs',
        title:'Penguins Playoffs',
        component: Playoffs 
    }
];
