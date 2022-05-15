
import todoReducer from "../../../components/08-useReducer/todoReducer";
import { ActionTypesEnum } from "../../../enum/ActionTypesEnum";
import TodoActionInterface from "../../../interfaces/TodoActionInterface";

let action: TodoActionInterface;

describe("Test todoReducer", () => {

  it("should return empty array as state, when nothing is passed", () => {

    const state = todoReducer(undefined, action);
    expect(state).toStrictEqual([]);

  });

  it("should return empty array as state, when nothing is passed as action", () => {

    const state = todoReducer([], action);
    expect(state).toStrictEqual([]);

  });

  it("should add new todo", () => {

    action = {
      type: ActionTypesEnum.ADD,
      payload: {
        id: 1,
        description: "mock-description",
        done: false,
      }
    };

    const state = todoReducer([], action);
    expect(state).toStrictEqual([{
      id: 1,
      description: "mock-description",
      done: false,
    }]);

  });

  it("should return the same state when an invalid id is passed", () => {

    action = {
      type: ActionTypesEnum.DELETE,
      payload: {
        id: 2,
        description: "mock-description-2",
        done: false,
      }
    };

    const state = todoReducer([{
      id: 1,
      description: "mock-description",
      done: false,
    }], action);

    expect(state).toStrictEqual([{
      id: 1,
      description: "mock-description",
      done: false,
    }]);

  });

  it("should delete one todo when a valid id is passed", () => {

    action = {
      type: ActionTypesEnum.DELETE,
      payload: {
        id: 2,
        description: "mock-description-2",
        done: false,
      }
    };

    const state = todoReducer([{
      id: 1,
      description: "mock-description",
      done: false,
    }, {
      id: 2,
      description: "mock-description-2",
      done: false,
    }
  ], action);

    expect(state).toStrictEqual([{
      id: 1,
      description: "mock-description",
      done: false,
    }]);

  });

  it("should change the done boolean when todo id is correct", () => {

    action = {
      type: ActionTypesEnum.COMPLETE,
      payload: {
        id: 2,
        description: "mock-description-2",
        done: false,
      }
    };

    const state = todoReducer([{
      id: 1,
      description: "mock-description",
      done: false,
    }, {
      id: 2,
      description: "mock-description-2",
      done: false,
    }
  ], action);

    expect(state).toStrictEqual([{
      id: 1,
      description: "mock-description",
      done: false,
    }, {
      id: 2,
      description: "mock-description-2",
      done: true,
    }]);

  });

  it("should return the same state when todo id is incorrect", () => {

    action = {
      type: ActionTypesEnum.COMPLETE,
      payload: {
        id: 3,
        description: "mock-description-2",
        done: false,
      }
    };

    const state = todoReducer([{
      id: 1,
      description: "mock-description",
      done: false,
    }, {
      id: 2,
      description: "mock-description-2",
      done: false,
    }
  ], action);

    expect(state).toStrictEqual([{
      id: 1,
      description: "mock-description",
      done: false,
    }, {
      id: 2,
      description: "mock-description-2",
      done: false,
    }]);

  });

});