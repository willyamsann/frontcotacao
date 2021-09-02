import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/models/provider.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {

  provider: Provider;
  constructor(private providerService: ProviderService,private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.provider = new Provider;
  }

  createProvider(){
    this.provider.active = true;
    this.providerService.create(this.provider)
    .subscribe((res) => {
      this.router.navigate(["/providers"]);
    });
  }

}
