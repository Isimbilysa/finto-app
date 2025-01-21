import { Component, OnInit } from '@angular/core';
import { SideNavComponent } from '../../../../common/navigation/side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { CreateAssetComponent } from '../create-asset/create-asset.component';
import { AssetService } from '../service/asset.service';
import { Asset } from '../../../../shared/types/asset';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { UpdateAssetComponent } from '../update-asset/update-asset.component';

@Component({
  selector: 'app-list-assets',
  imports: [
    SideNavComponent,
    CommonModule,
    ButtonModule,
    DialogModule,
    CreateAssetComponent,
    ToastModule, 
    UpdateAssetComponent  
  ],
  templateUrl: './list-assets.component.html',
  styleUrl: './list-assets.component.css',
})
export class ListAssetsComponent implements OnInit{
  constructor(private assetService : AssetService, private messageService : MessageService){}
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

  delete(id:string){
    console.log('Deleting asset with id:', id); 
    this.assetService.deleteAsset(id).subscribe({
      next: (data) => {
        this.assets = data; // Assign the fetched data
        console.log('Assets loaded:', this.assets);
        this.messageService.add({severity:'success', summary:'Success', detail:'Asset deleted successfully!'});
      },
      error: (err) => {
        console.error('Failed to fetch assets:', err);
        this.messageService.add({severity:'error', summary:'Error', detail:err.error.message});
      },
    });
  }
}
