const now = new Date();
const state = {
  user: {
    name: 'sunmarket',
    img: '/static/images/1.jpg'
  },
  sessions: [
    {
      id: 1,
      user: {
        name: '示例介绍',
        img: '/static/images/2.png'
      },
      messages: [
        {
          content: 'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
          date: now
        }, {
          content: '项目地址: https://github.com/coffcer/vue-chat',
          date: now
        }
      ]
    },
    {
      id: 2,
      user: {
        name: 'webpack',
        img: '/static/images/3.jpg'
      },
      messages: []
    }
  ],
  // 当前选中的会话
  currentSessionId: 1,
  // 过滤出只包含这个key的会话
  filterKey: ''
}
const mutations = {
  INIT_DATA (state) {
    let data = localStorage.getItem('vue-chat-session');
    if (data) {
      state.sessions = JSON.parse(data);
    }
  },
  // 发送消息
  SEND_MESSAGE ({ sessions, currentSessionId }, content) {
    let session = sessions.find(item => item.id === currentSessionId);
    session.messages.push({
      content: content,
      date: new Date(),
      self: true
    });
  },
  // 选择会话
  SELECT_SESSION (state, id) {
    state.currentSessionId = id;
  } ,
  // 搜索
  SET_FILTER_KEY (state, value) {
    state.filterKey = value;
  }
}

const getters = {
  user: state => state.user,
  sessions: state => state.sessions,
  currentSessionId: state => state.currentSessionId,
  filterKey: state => state.filterKey
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
  actions: {
    initData: ({dispatch}) => dispatch('INIT_DATA'),
    sendMessage: ({dispatch}, content) => dispatch('SEND_MESSAGE', content),
    selectSession: ({dispatch}, id) => dispatch('SELECT_SESSION', id),
    search: ({dispatch}, value) => dispatch('SET_FILTER_KEY', value)
  },
  mutations
}

