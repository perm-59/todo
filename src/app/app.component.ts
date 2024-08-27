import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToDoState } from './store/app.state';
import { TodoActions } from './store/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tsr';

  constructor(private readonly _store: Store) {

  }


  ngOnInit(): void {
    setInterval(() => {
      this._store.dispatch(new TodoActions.Add(1))
    }, 5_000)    
  }
}
