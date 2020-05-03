const initialState = {
  messages: [],
  assets: [],
  searchValue: '',
  currentUser: null,
  messageValue: ''
};

export default (state = initialState, action) => {
   switch (action.type) {
     case "OPEN_MESSAGES":
       return {
          ...state,
         messages: action.messages,
         toUser: action.toUser,
         currentUser: action.currentUser
       }
     default:
       return state;
   }
}
