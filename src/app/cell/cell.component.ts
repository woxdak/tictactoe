import { Component, OnInit, Input } from '@angular/core';
import {CellEnum} from './CellEnum';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})

export class CellComponent implements OnInit {

  @Input() public piece: CellEnum = CellEnum.EMPTY;
  @Input() public row: number;
  @Input() public col: number;
  constructor() { }

  ngOnInit(): void {
  }

 
}
