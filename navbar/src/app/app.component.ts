import { Component , OnInit} from '@angular/core';
import { Router , NavigationStart} from '@angular/router';

@Component({
  selector: 'navbar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'navbar';
  openSidebar: boolean;

  constructor(private router: Router) { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url == '/app2'){
          this.openSidebar = false;
        } else {
          this.openSidebar = true;
        }
      }
    });
  }

  ngOnInit() {
    this.openSidebar = true;
  }

  openCloseSidebar(){
    this.openSidebar = !this.openSidebar;
  }
}
