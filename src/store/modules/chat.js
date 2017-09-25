const now = new Date();

const state = {
  user: {
    name: 'Оператор',
    img: '/static/images/1.jpg'
  },
  session: {
    id: 1,
    user: {
      name: 'Пользователь',
      img: '/static/icon.png'
    },
    messages: [
      {
        content: 'Здравствуйте, это служба поддержки магазина',
        date: now
      }, {
        content: 'Чем можем вам помочь?',
        date: now
      }
    ]
  }

}
const mutations = {
  initData (state) {
    let data = localStorage.getItem('vue-chat-session');
    if (data) {
      state.session = JSON.parse(data);
    }
  },
  sendMessage (state, content) {
    console.log(state, 'state')
    state.session.messages.push({
      content: content,
      date: new Date(),
      self: true
    });
  }
}

const getters = {
  user: state => state.user,
  session: state => state.session
}


const actions = {
  initData ({ commit }) { commit('initData') },
  sendMessage ({commit}, content) { commit('sendMessage', content) }
}
/*
 store.watch(
 (state) => state.sessions,
 (val) => {
 console.log('CHANGE: ', val);
 localStorage.setItem('vue-chat-session', JSON.stringify(val));
 },
 {
 deep: true
 }
 );
 */

export default {
  state,
  getters,
  actions,
  mutations
}

