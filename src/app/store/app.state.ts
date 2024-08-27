import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { TodoActions } from './app.actions';

export interface ToDoStateModel {
  todo: number[]
}

@State<ToDoStateModel>({
  name: 'todo',
  defaults: {
    todo: []
  }
})
@Injectable()
export class ToDoState {
  constructor() {}

  /**
   * Simple Example
   */
  @Action(TodoActions.Add)
  add(ctx: StateContext<ToDoStateModel>, item: number) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      todo: [...state.todo, item]
    });
    console.log(ctx.getState())
  }
}