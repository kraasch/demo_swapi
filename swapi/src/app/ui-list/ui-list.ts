
import { Component, Input, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';

interface SwapiFilm {
  title: string;
  episode_id: number;
  release_date: string;
  director: string;
}

interface SwapiFilmResponse {
  count: number;
  results: SwapiFilm[];
}

@Component({
  selector: 'app-ui-list',
  imports: [ CommonModule ],
  template: `
<ul class="list bg-base-100 rounded-box shadow-md">

  <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">{{ title }}</li>

  <ul *ngIf="movies$ | async as movies">
    <li *ngFor="let movie of movies">
      {{ movie.episode_id }} - {{ movie.title }} ({{ movie.release_date }})
    </li>
  </ul>

  <li class="list-row">
    <div class="text-4xl font-thin opacity-30 tabular-nums">01</div>
    <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
    <div class="list-col-grow">
      <div>Dio Lupa</div>
      <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
    </div>
    <button class="btn btn-square btn-ghost">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
    </button>
  </li>

  <li class="list-row">
    <div class="text-4xl font-thin opacity-30 tabular-nums">02</div>
    <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
    <div class="list-col-grow">
      <div>Ellie Beilish</div>
      <div class="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
    </div>
    <button class="btn btn-square btn-ghost">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
    </button>
  </li>

  <li class="list-row">
    <div class="text-4xl font-thin opacity-30 tabular-nums">03</div>
    <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
    <div class="list-col-grow">
      <div>Sabrino Gardener</div>
      <div class="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
    </div>
    <button class="btn btn-square btn-ghost">
      <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
    </button>
  </li>
  `,
  styles: ``,
})
export class UiList {
  @Input() title: string = "";

  private http = inject(HttpClient);

  movies$: Observable<SwapiFilm[]> = this.http
    .get<SwapiFilmResponse>('https://swapi.dev/api/films/')
    .pipe(map(res => res.results.sort((a, b) => a.episode_id - b.episode_id)));

}
