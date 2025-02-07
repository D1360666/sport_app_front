import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Toolbar } from 'primeng/toolbar';
import { SharedModule } from 'primeng/api'
import { AvatarModule } from 'primeng/avatar'

@Component({
    selector: 'app-header',
    standalone:true,
    imports: [CommonModule, Toolbar, AvatarModule, ButtonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {

}
