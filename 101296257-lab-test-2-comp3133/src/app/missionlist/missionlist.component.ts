import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../space-x.service';
import { Mission } from '../mission.models';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionListComponent implements OnInit {
  missions: Mission[] = [];
  
  constructor(private spaceXService: SpaceXService) { }
  
  ngOnInit(): void {
    this.getMissions();
  }
  
  getMissions(): void {
    this.spaceXService.getMissions()
      .subscribe(missions => this.missions = missions);
  }
}
