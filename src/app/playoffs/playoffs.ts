import { Component } from '@angular/core';
import { PlayoffsInfo, PlayoffsGameInfo } from '../playoffs-info';

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

  //same as PlayoffsGameInfo
  displayedGameColumns: string[] = [
    'Round',
    'Game',
    'Location',
    'Opponent',
    'Result',
    'GF',
    'GA'
  ];

  roundData: PlayoffsInfo[] = [
    {Round: 'Quarter-Finals', Opponent: 'WSH', Result: 'W', Games: 6, MVP: 'Mario Lemieux'},
    {Round: 'Conference Semifinals', Opponent: 'NYR', Result: 'W', Games: 5, MVP: 'Mario Lemieux'},
    {Round: 'Conference Finals', Opponent: 'FLA', Result: 'L', Games: 7, MVP: 'John Vanbiesbrouck (FLA)'}
  ]

  playoffGameData: PlayoffsGameInfo[] = [
    {Round: 1, Game: 1, Location: 'H', Opponent: 'WSH', Result: 'L', GF: 4, GA:6},
    {Round: 1, Game: 2, Location: 'H', Opponent: 'WSH', Result: 'L', GF: 3, GA:5},
    {Round: 1, Game: 3, Location: 'A', Opponent: 'WSH', Result: 'W', GF: 4, GA:1},
    {Round: 1, Game: 4, Location: 'A', Opponent: 'WSH', Result: 'W', GF: 3, GA:2},
    {Round: 1, Game: 5, Location: 'H', Opponent: 'WSH', Result: 'W', GF: 4, GA:1},
    {Round: 1, Game: 6, Location: 'A', Opponent: 'WSH', Result: 'W', GF: 3, GA:2}, //end round 1 data
    {Round: 2, Game: 1, Location: 'H', Opponent: 'NYR', Result: 'W', GF: 4, GA:3},
    {Round: 2, Game: 2, Location: 'H', Opponent: 'NYR', Result: 'L', GF: 3, GA:6},
    {Round: 2, Game: 3, Location: 'A', Opponent: 'NYR', Result: 'W', GF: 3, GA:2},
    {Round: 2, Game: 4, Location: 'A', Opponent: 'NYR', Result: 'W', GF: 4, GA:1},
    {Round: 2, Game: 5, Location: 'H', Opponent: 'NYR', Result: 'W', GF: 7, GA:3}, //end round 2 data
    {Round: 3, Game:1, Location: 'H', Opponent: 'FLA', Result: 'L', GF: 1, GA:5},
    {Round: 3, Game:2, Location: 'H', Opponent: 'FLA', Result: 'W', GF: 3, GA:2},
    {Round: 3, Game:3, Location: 'A', Opponent: 'FLA', Result: 'L', GF: 2, GA:5},
    {Round: 3, Game:4, Location: 'A', Opponent: 'FLA', Result: 'W', GF: 2, GA:1},
    {Round: 3, Game:5, Location: 'H', Opponent: 'FLA', Result: 'W', GF: 3, GA:0},
    {Round: 3, Game:6, Location: 'A', Opponent: 'FLA', Result: 'L', GF: 3, GA:4},
    {Round: 3, Game:7, Location: 'H', Opponent: 'FLA', Result: 'L', GF: 1, GA:3}, //end round 3 data
  ]

}
