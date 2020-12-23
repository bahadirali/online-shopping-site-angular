import { Component, Input } from "@angular/core";

@Component({
    selector: 'topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
}) 
export class TopnavComponent {
    @Input() isAuthenticated: boolean = false;
}