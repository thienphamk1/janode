export default {
    janode: {
        address: [{
            url: 'ws://127.0.0.1:8188/',
            apisecret: 'secret'
        }],
        // seconds between retries after a connection setup error
        retry_time_secs: 10
    },
    streaming: {
        recording_path: './recordings/'
        // recording_path: '/opt/janus/share/janus/recordings/'
    },
    web: {
        port: 4445,
        bind: '0.0.0.0',
        key: undefined,
        cert: undefined
    }
};