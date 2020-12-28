import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
}) 
export class TopnavComponent {
    @Input() isAuthenticated: boolean = false;

    constructor(private router: Router){}
    
    showMyProfile(): void {
        this.router.navigate(['/profile']);
    }

    showHome(): void {
        this.router.navigate(['/home']);
    }
}