const ACTION_SCOPE = '[Todo]';

export namespace TodoActions {
  export class Add {
    static readonly type = `${ACTION_SCOPE} Add`;

    constructor(public payload: any) {}
  }

  export class Edit {
    static readonly type = `${ACTION_SCOPE} Edit`;

    constructor(public payload: any) {}
  }

  export class FetchAll {
    static readonly type = `${ACTION_SCOPE} Fetch All`;
  }

  export class Delete {
    static readonly type = `${ACTION_SCOPE} Delete`;

    constructor(public id: number) {}
  }
}