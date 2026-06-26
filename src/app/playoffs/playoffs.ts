import { Component } from '@angular/core';
import { PlayoffsInfo } from '../playoffs-info';

@Component({
  selector: 'app-playoffs',
  imports: [],
  templateUrl: './playoffs.html',
  styleUrl: './playoffs.css',
})
export class Playoffs {

  //should be same as what is in playoffs-info.ts
  displayedColumns: string [] = [
    'Round',
    'Opponent',
    'Result',
    'Games',
    'MVP',
  ];

  playoffDate: PlayoffsInfo[] = [
    //insert the playoff series here
  ]

}
