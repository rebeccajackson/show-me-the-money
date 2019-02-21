export default function users(state = [], action) {
  switch (action.type) {
    case "GET_ALL_USERS":
      return {};
    default:
      return state;
  }
}
