export default { // 同步
  changeCity (state, city) {
    state.city = city;
    try {
      localStorage.city = city
    } catch (error) {}
  }
}