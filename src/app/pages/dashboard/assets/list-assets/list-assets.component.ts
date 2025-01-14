import { Component } from '@angular/core';
import { SideNavComponent } from '../../../../common/navigation/side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { CreateAssetComponent } from '../create-asset/create-asset.component';

@Component({
  selector: 'app-list-assets',
  imports: [
    SideNavComponent,
    CommonModule,
    ButtonModule,
    DialogModule,
    CreateAssetComponent,
  ],
  templateUrl: './list-assets.component.html',
  styleUrl: './list-assets.component.css',
})
export class ListAssetsComponent {
  users = [
    {
      avatar: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
      name: 'Angelique Morse',
      email: 'benny89@yahoo.com',
      phone: '+46 8 123 456',
      company: 'Wuckert Inc',
      role: 'Content Creator',
      status: 'Banned',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
      name: 'Ariana Lang',
      email: 'avery43@hotmail.com',
      phone: '+54 11 1234-5678',
      company: 'Feest Group',
      role: 'IT Administrator',
      status: 'Pending',
    },
  ];
  visible = true;
  toggleDialog() {
    this.visible = !this.visible;
  }
}
