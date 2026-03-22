
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ui-list',
  imports: [ CommonModule ],
  template: `
  <ul class="list bg-base-100 rounded-box shadow-md">
  <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">{{ title }}</li>
  @if ((myDataList ?? []).length > 0) {
    <ul>
      @for (myEntry of myDataList; track myEntry.id) {
        <li class="list-row">
          <div class="text-4xl font-thin opacity-30 tabular-nums">&num;{{ myEntry.id }}</div>
          <!-- POTENTIALLY INTEGRATE AN IMAGE HERE
            <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
          -- END OF COMMENT -->
          <div class="list-col-grow">
            <div>{{ myEntry.title }}</div>
            <div class="text-xs uppercase font-semibold opacity-60">{{ fieldName }}: {{ myEntry.somedata }}</div>
          </div>
          <button class="btn btn-square btn-ghost">
            <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
          </button>
        </li>
      }
    </ul>
  }
  `,
  styles: ``,
})

export class UiList {
  @Input() title: string = "";
  @Input() fieldName: string = "";
  @Input() myDataList: any[] | null | undefined;
}
