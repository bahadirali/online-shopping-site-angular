import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { IProduct } from './interfaces/IProduct';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'online-shopping-site-angular';

  constructor(public auth: AuthService){}
}
