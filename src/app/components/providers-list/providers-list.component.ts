import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/models/provider.model';
import { Router } from '@angular/router';
import { ProviderService } from 'src/app/services/provider.service';
import { faCoffee,faBinoculars,faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.css']
})
export class ProvidersListComponent implements OnInit {

  providers?: Provider[];
  faCoffee = faCoffee;
  faBinoculars = faBinoculars;
  faTrash = faTrash;


  constructor(private providerService: ProviderService,private router: Router) { }

  ngOnInit(): void {
    this.loadProviders();
  }

  loadProviders(){
    this.providerService.getAll()
    .subscribe(
      data => {
        this.providers = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  getToDetails(id:number){
    this.router.navigate(['/provider-details', { providerId: id }]);
 
  }

  deleteById(id:number){
    this.providerService.deleteById(id)
    .subscribe(
      error => {
        console.log(error);
      });
  }
}
