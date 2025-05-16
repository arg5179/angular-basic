import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './components/counter/counter.component';
import { EventComponent } from './components/event/event.component';
import { ButtonClickComponent } from './components/button-click/button-click.component';
import { GetsetComponent } from './components/getset/getset.component';
import { ControlFlowComponent } from "./components/control-flow/control-flow.component";
import { ForLoopComponent } from "./components/for-loop/for-loop.component";
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { TodolistComponent } from "./components/todolist/todolist.component";
import { DynamicstylingComponent } from "./components/dynamicstyling/dynamicstyling.component";
import { DirectivesComponent } from './components/directives/directives.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BasicrountingComponent } from './components/basicrounting/basicrounting.component';
import { HeaderroutingComponent } from "./components/headerrouting/headerrouting.component";
import { DynamicRoutingComponent } from "./components/dynamic-routing/dynamic-routing.component";
import { ReactiveformComponent } from "./components/reactiveform/reactiveform.component";
import { TemplatedrivenformComponent } from "./components/templatedrivenform/templatedrivenform.component";
import { PassdataComponent } from "./components/passdata/passdata.component";
import { PipesComponent } from "./components/pipes/pipes.component";
import { LifecycleComponent } from "./components/lifecycle/lifecycle.component";
import { ServicesComponent } from "./components/services/services.component";
import { APIComponent } from "./components/api/api.component";
import { CallAPIComponent } from "./components/call-api/call-api.component";
import { LazyloadingComponent } from "./components/lazyloading/lazyloading.component";

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    CallAPIComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'basicAngular';
}
