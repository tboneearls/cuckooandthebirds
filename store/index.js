export const state = () => ({
  isMobile: false
});

export const mutations = {
  resize(state, isMobile) {
    state.isMobile = isMobile;
  }
};

export const actions = () => {};

export const modules = () => {};
