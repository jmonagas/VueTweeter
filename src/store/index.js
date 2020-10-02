// import Vue from "vue";
// import Vuex from "vuex";
// import axios from "axios"

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     userBio: " ",
//   },
//   mutations: {
//     updateBio: function (state, userBio) {
//       state.userBio = userBio;
//     }
//   },
//   actions: {
//     newBio: function () {
//       axios.request({
//         url: "https://tweeterest.ml/api/users",
//         method: "PATCH"
//       })
//         .then(response => {
//           this.userBio.commit("updateBio", response.userBio);
//         })
//         .catch(error => {
//           console.log(error);
//         });
//     }
//   },
//   getters: {
//     newBio: function (state) {
//       return state.bio;
//     },
//   },
// });
