import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { PersonasComponent } from "./pages/personas/personas.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HomeComponent, PersonasComponent],
    template: `
      <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg"
        alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <app-home></app-home>
        <app-personas></app-personas>
      </section>
      </main>
  `,
    //templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sportapp';
}
