import { Component, signal, inject } from '@angular/core';
import { UiList } from './ui-list/ui-list';
import { RouterOutlet } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


interface SwapiFilm {
  title: string;
  episode_id: number;
  release_date: string;
  director: string;
}

interface SwapiPlanet {
  name: string;
  diameter: string;
  climate: string;
}

interface SwapiStarship {
  name: string;
  model: string;
  manufacturer: string;
}

interface SwapiResponse<T> {
  count: number;
  results: T[];
}

type ListData = { id: number; title: string; somedata: string }[];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UiList, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('swapi');
  listNames = ["Films", "Planets", "Spaceships"];

  private http = inject(HttpClient);

  // Displayed data.
  films$?: Observable<ListData> = undefined;
  planets$?: Observable<ListData> = undefined;
  starships$?: Observable<ListData> = undefined;

  loadData() {
    // Films endpoint.
    const filmsReq = this.http
      .get<SwapiResponse<SwapiFilm>>('https://swapi.dev/api/films/')
      .pipe(
        map(res => res.results
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(film => ({
            id: film.episode_id,
            title: film.title,
            somedata: film.release_date
          }))
        )
      );

    // Planets endpoint.
    const planetsReq = this.http
      .get<SwapiResponse<SwapiPlanet>>('https://swapi.dev/api/planets/')
      .pipe(
        map(res => res.results.map((planet, index) => ({
          id: index + 1,
          title: planet.name,
          somedata: planet.climate
        }))
      ));

    // Starships endpoint.
    const starshipsReq = this.http
      .get<SwapiResponse<SwapiStarship>>('https://swapi.dev/api/starships/')
      .pipe(
        map(res => res.results.map((ship, index) => ({
          id: index + 1,
          title: ship.name,
          somedata: ship.model
        }))
      ));

    // Assign each observable.
    this.films$ = filmsReq;
    this.planets$ = planetsReq;
    this.starships$ = starshipsReq;
  }

}
