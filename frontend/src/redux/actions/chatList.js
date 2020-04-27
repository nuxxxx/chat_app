import { v4 as uuidv4 } from 'uuid';
import DialoguesService from 'services/DialoguesService';

export const addDialogueItem = ({
  photo,
  name,
  date,
  lastMessage
}) => ({
  type: 'ADD_DIALOGUE_ITEM',
  id: uuidv4(),
  photo,
  name,
  date,
  message: lastMessage
});

export const removeDialogueItem = ({
  id
}) => ({
  type: 'REMOVE_DIALOGUE_ITEM',
  id
});

export const chooseMessage = ({
  id
}) => ({
  type: 'SET_DIALOGUE_ACTIVE',
  id
});

// ({
//     type: "SEARCH_USERS",
//     value
//   });
export const searchUsers = ({
  value
}) => {
  return async (dispatch) => {
    const dialogue = new DialoguesService();
    dispatch(
      'FOUND_USERS',
      await dialogue.searchUsers(value)
    );
  }
}