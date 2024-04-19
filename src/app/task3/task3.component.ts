import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';

interface TaskInfo {
  title: string;
  id: number;
}

@Component({
  selector: 'app-task3',
  standalone: true,
  imports: [CdkDropList, CdkDrag, CdkDropListGroup],
  templateUrl: './task3.component.html',
  styleUrl: './task3.component.scss',
})
export class Task3Component {
  planningTasks = [
    { title: 'Orange', id: 1 },
    { title: 'Apple', id: 2 },
  ];

  pendingTasks = [
    { title: 'Banana', id: 3 },
    { title: 'Durian', id: 4 },
  ];

  writingTasks = [{ title: 'Kiwi', id: 5 }];

  drop(event: CdkDragDrop<TaskInfo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
