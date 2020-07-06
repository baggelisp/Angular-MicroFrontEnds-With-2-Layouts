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

  microFrontEndsLayout = [
    {
      name: 'app1',
      route: '/app1',
      layout: 'sidebar'
    },
    {
      name: 'app2',
      route: '/app2',
      layout: 'full'
    }
  ]

  constructor(private router: Router) { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const currentMF = this.microFrontEndsLayout.find(microfr => microfr.route === event.url);
        if (currentMF){
          if (currentMF.layout === 'sidebar'){
            this.openSidebar = true;
          } else {
            this.openSidebar = false;
          }
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
