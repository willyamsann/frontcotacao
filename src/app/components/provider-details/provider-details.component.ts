import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/models/provider.model';
import { Router,ActivatedRoute } from '@angular/router';
import { ProviderService } from 'src/app/services/provider.service';


@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.css']
})
export class ProviderDetailsComponent implements OnInit {

  provider: Provider;
  providerId?: number;

  constructor(private providerService: ProviderService,private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.providerId = Number(this.route.snapshot.paramMap.get('providerId'));
    this.getLoadProviderById(this.providerId);
  }

  getLoadProviderById(id:number){
    this.providerService.getById(id)
    .subscribe(
      data => {
        this.provider = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }

}
