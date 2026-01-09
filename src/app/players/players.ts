import { Component } from '@angular/core';
import { PlayerInfo } from '../player-info';

@Component({
  selector: 'app-players',
  standalone:true,
  imports: [],
  templateUrl: './players.html',
  styleUrl: './players.css',
})
export class Players {  
  //define headers
  displayedColumns: string[] = ['Number','Name', 'Position','Nationality', 'Age', 'GP', 'Goals', 'Assists', 'Points'];

  //main data
  //source https://www.hockey-reference.com/teams/PIT/1996.html
  playerData: PlayerInfo[] = [
    {Number: '66', Name: 'Mario Lemieux', Position: 'C', Nationality: 'CA', Age:30, GP:70, Goals:69,Assists:92, Points:161},
    {Number: '68', Name: 'Jaromír Jágr', Position: 'RW', Nationality: 'CZ', Age:23, GP:82, Goals:62,Assists:87, Points:149},
    {Number: '10', Name: 'Ron Francis', Position: 'C', Nationality: 'CA', Age:32, GP:77, Goals:27,Assists:92, Points:119},
    {Number: '93', Name: 'Petr Nedvěd', Position: 'LW', Nationality: 'CZ', Age:24, GP:80, Goals:45,Assists:54, Points:99},
    {Number: '17', Name: 'Tomas Sandström', Position: 'RW', Nationality: 'FI', Age:31, GP:58, Goals:35,Assists:35, Points:70},
    {Number: '3-56', Name: 'Sergei Zubov', Position: 'D', Nationality: 'USSR', Age:25, GP:64, Goals:11,Assists:55, Points:66},
    {Number: '8-20', Name: 'Bryan Smolinski', Position: 'C', Nationality: 'USA', Age:24, GP:81, Goals:24,Assists:40, Points:64},
    {Number: '29', Name: 'Markus Näslund', Position: 'LW', Nationality: 'SE', Age:22, GP:66, Goals:19,Assists:33, Points:52},
    {Number: '15', Name: 'Dmitri Mironov', Position: 'D', Nationality: 'USSR', Age:30, GP:72, Goals:3,Assists:31, Points:34},
    {Number: '27', Name: 'Glen Murray', Position: 'RW', Nationality: 'CA', Age:23, GP:69, Goals:14,Assists:15, Points:29},
    {Number: '22', Name: 'Norm Maciver', Position: 'D', Nationality: 'CA', Age:31, GP:32, Goals:2,Assists:21, Points:23},
    {Number: '23', Name: 'Chris Joseph', Position: 'D', Nationality: 'CA', Age:26, GP:70, Goals:5,Assists:14, Points:19},
    {Number: '51', Name: 'Dave Roche', Position: 'LW', Nationality: 'CA', Age:20, GP:71, Goals:7,Assists:7, Points:14},
    {Number: '2', Name: 'Chris Tamer', Position: 'D', Nationality: 'USA', Age:25, GP:70, Goals:4,Assists:10, Points:14},
    {Number: '6', Name: 'Neil Wilkinson', Position: 'D', Nationality: 'CA', Age:28, GP:41, Goals:2,Assists:10, Points:12},
    {Number: '18', Name: 'François Leroux', Position: 'D', Nationality: 'CA', Age:25, GP:66, Goals:2,Assists:9, Points:11},
    {Number: '8', Name: 'Kevin Miller', Position: 'LW', Nationality: 'USA', Age:30, GP:13, Goals:6,Assists:5, Points:11},
    {Number: '16', Name: 'Joe Dziedzic', Position: 'LW', Nationality: 'USA', Age:24, GP:69, Goals:5,Assists:5, Points:10},
    {Number: '26-76', Name: 'Richard Park', Position: 'C', Nationality: 'ROK', Age:19, GP:56, Goals:4,Assists:6, Points:10},
    {Number: '26', Name: 'Dave McLlwain', Position: 'RW', Nationality: 'CA', Age:29, GP:18, Goals:2,Assists:4, Points:6},
    {Number: '36', Name: 'J.J. Daigneault', Position: 'D', Nationality: 'CA', Age:30, GP:13, Goals:3,Assists:3, Points:6},
    {Number: '14-36', Name: 'Brad Lauer', Position: 'LW', Nationality: 'CA', Age:29, GP:21, Goals:4,Assists:1, Points:5},
    {Number: '4', Name: 'Corey Foster', Position: 'D', Nationality: 'CA', Age:26, GP:11, Goals:2,Assists:2, Points:4},
    {Number: '12', Name: 'Chris Wells', Position: 'C', Nationality: 'CA', Age:20, GP:54, Goals:2,Assists:2, Points:4},
    {Number: '52', Name: 'Rusty Fitzgerald', Position: 'C', Nationality: 'USA', Age:23, GP:21, Goals:1,Assists:2, Points:3},
    {Number: '35', Name: 'Tom Barrasso', Position: 'G', Nationality: 'USA', Age:30, GP:49, Goals:0,Assists:3, Points:3},
    {Number: '24', Name: 'Ian Moran', Position: 'D', Nationality: 'USA', Age:23, GP:51, Goals:1,Assists:1, Points:2},
    {Number: '44', Name: 'Ed Patterson', Position: 'RW', Nationality: 'CA', Age:23, GP:35, Goals:0,Assists:2, Points:2},
    {Number: '31', Name: 'Ken Wregget', Position: 'G', Nationality: 'CA', Age:31, GP:37, Goals:0,Assists:2, Points:2},
    {Number: '11', Name: 'Alek Stojanov', Position: 'RW', Nationality: 'CA', Age:22, GP:10, Goals:1,Assists:0, Points:1},
    {Number: '38-39', Name: 'Peter Allen', Position: 'D', Nationality: 'CA', Age:25, GP:8, Goals:0,Assists:0, Points:0},
    {Number: '28', Name: 'Jeff Christian', Position: 'LW', Nationality: 'CA', Age:25, GP:3, Goals:0,Assists:0, Points:0},
    {Number: '3-33', Name: 'Stefan Bergkvist', Position: 'D', Nationality: 'SE', Age:20, GP:2, Goals:0,Assists:0, Points:0},
    {Number: '55', Name: 'Drake Berehowsky', Position: 'D', Nationality: 'CA', Age:24, GP:1, Goals:0,Assists:0, Points:0},
    {Number: '9', Name: 'Len Barrie', Position: 'C', Nationality: 'CA', Age:26, GP:5, Goals:0,Assists:0, Points:0},
    {Number: '28', Name: 'Greg Andrusak', Position: 'D', Nationality: 'CA', Age:26, GP:2, Goals:0,Assists:0, Points:0},
  ]
}
