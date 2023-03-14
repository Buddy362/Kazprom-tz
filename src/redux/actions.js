import { nanoid } from "nanoid";

export const fetchUserError = (error) => ({
    type: 'FETCH_USER_ERROR',
    payload: error
  });

export const setInputValue = (value) => {
    const id = nanoid()
    return {
      type: 'SET_INPUT_VALUE',
      payload: {id, value}
    }
  }