import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SpaceXService } from '../space-x.service';
import { Mission } from '../mission.models';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionListComponent implements OnInit {
  missions: Mission[] = [];
  searchForm = new FormGroup({
    year: new FormControl('')
  });
  
  constructor(private spaceXService: SpaceXService) { }
  
  ngOnInit(): void {
    this.getMissions();
  }
  
  getMissions(): void {
    this.spaceXService.getMissions()
      .subscribe(missions => this.missions = missions);
  }
  search(): void {
    const yearValue = this.searchForm.get('year')?.value;
    const year = yearValue ? parseInt(yearValue, 10) : 0;
    if (year) {
      this.spaceXService.getMissionsByYear(year).subscribe((data: Mission[]) => {
        this.missions = data;
      });
    } else {
      this.getMissions();
    }
  }
  
  
}

