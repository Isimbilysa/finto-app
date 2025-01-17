import { Component, OnInit } from '@angular/core';
import { SideNavComponent } from '../../../../common/navigation/side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { CreateAssetComponent } from '../create-asset/create-asset.component';
import { AssetService } from '../service/asset.service';
import { Asset } from '../../../../shared/types/asset';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-list-assets',
  imports: [
    SideNavComponent,
    CommonModule,
    ButtonModule,
    DialogModule,
    CreateAssetComponent,
    ToastModule
  ],
  templateUrl: './list-assets.component.html',
  styleUrl: './list-assets.component.css',
})
export class ListAssetsComponent implements OnInit{
  constructor(private assetService : AssetService){}
  assets: Asset[] | null = null;
  ngOnInit(): void {
    this.assetService.getAssets().subscribe({
      next: (data) => {
        this.assets = data; // Assign the fetched data
        console.log('Assets loaded:', this.assets);
      },
      error: (err) => {
        console.error('Failed to fetch assets:', err);
      },
    });
  }


  

  visible = true;
  toggleDialog() {
    this.visible = !this.visible;
  }
}
