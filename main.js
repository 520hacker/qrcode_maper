// main.js
const { createApp, onMounted } = Vue;

createApp({
    data() {
        return {
            qrcodeContent: '',
            history: [],
            selectedCountry: '',
            selectedType: '',
            selectedWebsite: '',
            websites: {
                '国产': {
                    'APP': {
                        '360': 'https://ai.360.com/',
                        '通义': 'https://tongyi.aliyun.com/qianwen/mobile',
                        '讯飞': 'https://xinghuo.xfyun.cn/',
                        '文心': 'https://yiyanapp.baidu.com/talk/download',
                        '星绘': 'https://www.butterflyai.cn/',
                        '混元': 'https://hunyuan.tencent.com/',
                        '海螺': 'https://hailuoai.com/',
                        '百川': 'https://www.baichuan-ai.com/home',
                        '豆包': 'https://www.doubao.com/',
                        'Kimi': 'https://kimi.moonshot.cn/',
                        '智谱': 'https://chatglm.cn/',
                        '天工': 'https://work.tiangong.cn/home/writting',
                        '快影': 'https://h5.kwaiying.com/officialWebsite'
                    },
                    '网站': {
                        'Two API': 'https://twoapi-ui.qiangtu.com/chat/base/13/164',
                        '8AI': 'https://www.8ai.link/',
                        'Fish Audio': 'https://fish.audio/',
                        '即梦': 'https://jimeng.jianying.com/',
                        'coze': 'https://www.coze.cn/'
                    }
                },
                '国外': {
                    'APP': {
                        'ChatGPT': 'https://apps.apple.com/us/app/chatgpt/id6448311069',
                        'Discord': 'https://apps.apple.com/us/app/discord-talk-play-hang-out/id985746746',
                        'Slack': 'https://apps.apple.com/us/app/slack/id618783545',
                        'POE': 'https://apps.apple.com/us/app/poe-fast-ai-chat/id1640745955',
                        'H2O GPT': 'https://apps.apple.com/us/app/h2o-ai-personal-gpt/id6504365990',
                        'RunwayML': 'https://apps.apple.com/us/app/runwayml/id1665024375',
                        'Lumai AI': 'https://apps.apple.com/us/app/lumai-ai-ai-video-generator/id6504544251'
                    },
                    '网站': {
                        'ChatGPT': 'https://chatgpt.com/',
                        'Claude': 'http://www.claude.com/',
                        'Coze 国际版': 'https://www.coze.com',
                        'Haiper': 'https://haiper.ai/',
                        'SUNO': 'https://www.suno.ai/'
                    }
                }
            }
        };
    },
    setup() {
        onMounted(() => {
            const words = [
                ['360', 11], ['通义', 17], ['讯飞', 15], ['文心', 13], ['星绘', 12], ['混元', 11], ['可灵', 12],
                ['海螺', 10], ['百川', 16], ['豆包', 14], ['Kimi', 14], ['智谱', 17], ['天工', 15],
                ['快影', 12], ['Two API', 13], ['8AI', 18], ['Fish Audio', 14], ['即梦', 16],
                ['COZE', 15],
                ['ChatGPT', 18],
                ['Discord', 10], 
                ['Slack', 13], 
                ['POE', 14],
                ['H2O', 11],
                ['Runway', 11], ['Luma', 12], ['Claude', 12],
                ['Haiper', 11],
                ['SUNO', 15], ['whee', 13], ['文心一格', 13],
                ['无界AI', 13],
                ['奇域AI', 13],
                ['midjourney', 14],
                ['stable diffusion', 14],
                ['leonardo', 14],
                ['pixverse', 15],
                ['svd', 15],
                ['elevenlabs', 11],
                ['udio', 11],
                ['reecho', 11]
            ];

            var salt = 4000
            // console.log(window.innerWidth)
            WordCloud(document.getElementById('wordcloud'), {
                list: words,
                gridSize: Math.round(16 * window.innerWidth / salt),
                weightFactor: function (size) {
                    return Math.pow(size, 2.3) * window.innerWidth / salt;
                },
                fontFamily: 'Times, serif',
                color: function (word, weight) {
                    return (weight === 12) ? '#f02222' :  (weight === 11) ? '#666' : '#c09292';
                },
                rotateRatio: 0.5,
                rotationSteps: 2,
                backgroundColor: '#ffe0e0',
                drawOutOfBound: false,
                shuffle: true,
                shape: 'circle'
            });
        });
    },
    computed: {
        filteredWebsites() {
            try {
                if (this.selectedCountry && this.selectedType) {
                    return this.websites[this.selectedCountry][this.selectedType] || {};
                }
                return {};
            }
            catch (err) {
                console.log(err);
            }
        }
    },
    watch: {
        selectedWebsite(newUrl) {
            this.qrcodeContent = newUrl;
            this.generateQRCode();
        }
    },
    methods: {
        generateQRCode() {
            QRCode.toCanvas(document.getElementById('qrcode'), this.qrcodeContent, (error) => {
                if (error) console.error(error);
                this.history.unshift({ content: this.qrcodeContent, dataUrl: document.getElementById('qrcode').toDataURL() });
            });
        }
    }
}).mount('#app');
