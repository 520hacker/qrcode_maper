const { createApp, onMounted } = Vue;

const App = {
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

            var salt = 4024
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
                drawOutOfBound: true,
                shuffle: true,
                shape: 'circle'
            });
        });

        return {};
    }
};

createApp(App).mount('#app');
