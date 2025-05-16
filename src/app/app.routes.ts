import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ButtonClickComponent } from './components/button-click/button-click.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { EventComponent } from './components/event/event.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { UserComponent } from './components/user/user.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { GetsetComponent } from './components/getset/getset.component';
import { ForLoopComponent } from './components/for-loop/for-loop.component';
import { AdminComponent } from './components/lazyloading/admin/admin.component';

export const routes: Routes = [
    {path:'forloop', component: ForLoopComponent},
    {path: 'getset', component: GetsetComponent},
    {path: 'user/:id', component: UserComponent},
    {path: 'two-way-data-binding', component: TwoWayDataBindingComponent},
    {path: 'todolist', component: TodolistComponent},
    {path: 'control', component: ControlFlowComponent},
    {path: 'counter',component:  CounterComponent},
    {path: 'event',component:  EventComponent},
    {path: 'directives', component: DirectivesComponent},
    {path: 'button-click',component:  ButtonClickComponent},
    // {path: 'admin', component: AdminComponent},
    {path: 'admin', loadComponent: () => import('./components/lazyloading/admin/admin.component').then(c => c.AdminComponent)}
    // {path: '**', component: PagenotfoundComponent}
];