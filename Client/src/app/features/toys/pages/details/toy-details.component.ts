import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToyService } from '../../services/toy.service';
import { Toy } from '../../models/toy.model'; 

@Component({
  selector: 'app-toy-details',
  templateUrl: './toy-details.component.html',
  styleUrls: ['./toy-details.component.scss']
})
export class ToyDetailsComponent implements OnInit {
  toy: Toy | null = null;
  toyId: string = '';

  constructor(
    private route: ActivatedRoute,
    private toyService: ToyService
  ) {}

  ngOnInit(): void {
    // Get the toyId from the route params
    this.toyId = this.route.snapshot.paramMap.get('id')!;
    this.loadToyDetails();
  }

  loadToyDetails(): void {
    // Fetch the toy details using the ToyService
    // this.toyService.getToyById(this.toyId).subscribe((toyData) => {
    //   this.toy = toyData;
    // });
  }
}
