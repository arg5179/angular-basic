import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-headerrouting',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './headerrouting.component.html',
  styleUrl: './headerrouting.component.scss'
})
export class HeaderroutingComponent {
  constructor(private router: Router) {}
  ngOnInit(): void {
    // let name = this.route.snapshot.paramMap.get('name');
    // console.log(name);
  }

  handleProfile(){
    this.router.navigate(['todolist', {name:'ARG'}]);
  }
}
