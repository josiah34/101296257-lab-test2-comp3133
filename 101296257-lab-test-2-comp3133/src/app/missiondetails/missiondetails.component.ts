import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceXService } from '../space-x.service';


@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissionDetailsComponent implements OnInit {
  @Input() mission: any;

  constructor(private route: ActivatedRoute, private spaceXService: SpaceXService) {}

  ngOnInit(): void {
    this.getMission();
  }
  getMission(): void {
    const flightNumber = this.route.snapshot.paramMap.get('flight_number') ?? '';
    this.spaceXService.getMission(flightNumber).subscribe((data: any) => {
      this.mission = data;
    });
  }
  
}
