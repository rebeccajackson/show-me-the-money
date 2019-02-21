export default function users(state = [], action) {
  switch (action.type) {
    case "GET_ALL_USERS":
      return {
        // we need to return something here!
      };
    default:
      return state;
  }
}
