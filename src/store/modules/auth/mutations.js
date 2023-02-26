export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.didLogout = false;
  },
  setLogout(state) {
    state.didLogout = true;
  },
};
