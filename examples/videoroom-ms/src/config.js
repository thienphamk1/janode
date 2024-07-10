export default {
  janode: {
    address: [{
      url: 'ws://127.0.0.1:8188/',
      apisecret: 'secret'
    }],
    // seconds between retries after a connection setup error
    retry_time_secs: 10
  },
  web: {
    port: 17801,
    bind: '0.0.0.0',
    // key: '/path/to/key.pem',l
    // cert: '/path/to/cert.pem'
  }
};