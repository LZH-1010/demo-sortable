import { Component, ElementRef, ViewChild } from '@angular/core';
import { Sortable, Draggable, SortableEvent } from '@shopify/draggable';

@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [],
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.scss',
})
export class Task2Component {
  @ViewChild('planning', { static: true })
  planning!: ElementRef<HTMLDivElement>;
  @ViewChild('pending', { static: true })
  pending!: ElementRef<HTMLDivElement>;
  @ViewChild('writing', { static: true })
  writing!: ElementRef<HTMLDivElement>;
  planningTasks = [
    { title: 'Orange', id: 1 },
    { title: 'Apple', id: 2 },
  ];

  pendingTasks = [
    { title: 'Banana', id: 3 },
    { title: 'Durian', id: 4 },
  ];

  writingTasks = [{ title: 'Kiwi', id: 5 }];

  ngOnInit(): void {
    const containers = document.querySelectorAll(
      '#MultipleContainers .StackedList'
    );

    const sortable = new Sortable(
      [
        this.pending.nativeElement,
        this.planning.nativeElement,
        this.writing.nativeElement,
      ],
      {
        draggable: 'div',
      }
    );

    //start, stop, sort, sorted
    sortable.on('sortable:stop', (eventName) => {
      //would handle these values similar to sortablejs?
      console.log(eventName.oldIndex);
      console.log(eventName.newIndex);
      console.log(eventName.oldContainer);
      console.log(eventName.newContainer);
    });
  }
}
