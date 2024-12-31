import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToyService } from '../../services/toy.service';  // Import ToyService
import { Toy } from '../../models/toy.model';  // Import Toy model
import { Router } from '@angular/router';

@Component({
  selector: 'app-toy-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [CommonModule]
})
export class ToyListComponent implements OnInit {
  toys: Toy[] = [];

  constructor(
    private toyService: ToyService, // Inject ToyService
    private router: Router // Inject Router for navigation
  ) {}

  ngOnInit(): void {
    //this.loadToys();
  }

  // loadToys(): void {
  //   this.toyService.getToys().subscribe((toys) => {
  //     this.toys = toys;
  //   });
  // }

  // viewToyDetails(id: string): void {
  //   // Navigate to the toy details page by ID
  //   this.router.navigate(['/toys', id]);
  // }
}
