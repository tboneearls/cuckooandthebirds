export const state = () => ({
  isMobile: false,
  mobileMaxWidth: 768 // anything below this width is considered mobile
});

export const mutations = {
  resize(state, isMobile) {
    state.isMobile = isMobile;
  }
};

export const actions = () => {};

export const modules = () => {};
