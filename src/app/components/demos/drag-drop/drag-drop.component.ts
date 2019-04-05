import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

class Track {
}
class Task {
}

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
})

export class DragDropComponent implements OnInit {
  author="";
  tracks = [
    {
      "title": "Todo",
      "id": "todo",
      "tasks": [
        {
          "id": "first-task",
          "title": "First Task",
          "description": "This is my first task"
        }
      ]
    },
    {
      "title": "In Progress",
      "id": "inprogress",
      "tasks": [
        {
          "id": "seconf-task",
          "title": "Second Task",
          "description": "This is my first task"
        }
      ]
    },
    {
      "title": "D-Done",
      "id": "ddone",
      "tasks": [
        {
          "id": "third-task",
          "title": "Third Task",
          "description": "This is my first task"
        }
      ]
    },
    {
      "title": "QA Pass",
      "id": "qapass",
      "tasks": [
        {
          "id": "fourth-task",
          "title": "Fourth Task",
          "description": "This is my first task"
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  /**
   * An array of all track ids. Each id is associated with a `cdkDropList` for the
   * track talks. This property can be used to connect all drop lists together.
   */
  get trackIds(): string[] {
    return this.tracks.map(track => track.id);
  }

  onTalkDrop(event: CdkDragDrop<Task[]>) {
    // In case the destination container is different from the previous container, we
    // need to transfer the given task to the target data array. This happens if
    // a task has been dropped on a different track.
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onTrackDrop(event: CdkDragDrop<Track[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }
}
