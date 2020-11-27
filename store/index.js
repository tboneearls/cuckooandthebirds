export const state = () => ({
  isNavActive: false,
});

export const mutations = {
  toggleNavActive(state) {
    state.isNavActive = !state.isNavActive; 
  },
};

export const actions = () => {};

export const modules = () => {};
