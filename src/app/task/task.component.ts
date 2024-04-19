import { Component, ElementRef, ViewChild } from '@angular/core';
import Sortable from 'sortablejs';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
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
    const options = {
      group: {
        name: 'tasks',
      },

      // Element dragging ended
      onAdd: (evt: any) => {
        // Update your data model based on the new order (optional)
        this.updateItems(evt.from.id, evt.to.id, evt.oldIndex, evt.newIndex);
      },

      onUpdate: (evt: any) => {
        this.sortItems(evt.from.id, evt.oldIndex, evt.newIndex);
      },
    };

    Sortable.create(this.planning.nativeElement, options);
    Sortable.create(this.pending.nativeElement, options);
    Sortable.create(this.writing.nativeElement, options);
  }

  async updateItems(
    sourceListId: string,
    destinationListId: string,
    oldIndex: number,
    newIndex: number
  ) {
    const source = this.getItemArrayByListId(sourceListId);
    const destination = this.getItemArrayByListId(destinationListId);

    // Implement logic to move item between arrays
    const [movedItem] = source.tasks.splice(oldIndex, 1);

    destination.tasks.splice(newIndex, 0, movedItem);
  }

  async sortItems(sourceListId: string, oldIndex: number, newIndex: number) {
    const sourceArray = this.getItemArrayByListId(sourceListId);
    const [movedItem] = sourceArray.tasks.splice(oldIndex, 1);
    sourceArray.tasks.splice(newIndex, 0, movedItem);
  }

  getItemArrayByListId(listId: string) {
    switch (listId) {
      case 'planning':
        return { status: 'planning', tasks: this.planningTasks };
      case 'pending':
        return { status: 'pending', tasks: this.pendingTasks };
      case 'writing':
        return { status: 'writing', tasks: this.writingTasks };
      default:
        return { status: '', tasks: [] };
    }
  }
}
