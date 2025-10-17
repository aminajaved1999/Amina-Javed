import { Component, signal } from '@angular/core';
import { Menu } from "./components/menu/menu";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports:
  [
    RouterOutlet,
     Menu
    ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AminaJaved_Frontend');
}
