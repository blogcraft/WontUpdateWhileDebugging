import { Component, OnInit } from '@angular/core';
import { version } from '../../../version';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-signed-out',
  templateUrl: './signed-out.component.html',
  styleUrls: ['./signed-out.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatCardModule, RouterOutlet],
})
export class SignedOutComponent implements OnInit {
  v = version;
  tituloPagina: string;
  constructor() {}

  ngOnInit() {
    this.tituloPagina = "Won't Update while Debugging! :P";
  }
}
