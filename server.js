const express = require('express');
const redis = require('redis');
const crypto = require('crypto');

const app = express();
const PORT = 3000;

const client = redis.createClient({
    socket: { host: '127.0.0.1', port: 6379 }
});

client.on('error', (err) => console.error('❌ Redis error:', err));

(async () => {
    await client.connect();
    console.log('✅ Connected to Redis');
})();

// Hàm tạo hash từ nội dung quan trọng (BỎ timestamp)
const generateHash = (data) => crypto.createHash('md5').update(data.message).digest('hex');

app.get('/data/:key', async (req, res) => {
    const { key } = req.params;
    const { useNewData = 'false' } = req.query;

    // Dữ liệu mới KHÔNG hash timestamp
    const newData = {
        message: useNewData === 'true' 
            ? `🔄 Nội dung mới cho key: ${key}`
            : `Dữ liệu từ API với key: ${key}`,
        time: new Date().toISOString() // Không đưa vào hash
    };

    // Lấy cache cũ
    const cachedData = await client.get(key);
    if (cachedData) {
        const parsedCachedData = JSON.parse(cachedData);
        
        // So sánh chỉ dựa vào `message`
        if (generateHash(parsedCachedData) === generateHash(newData)) {
            console.log(`✅ Không có thay đổi, giữ cache cũ`);
            const ttl = await client.ttl(key);
            return res.json({ source: 'cache', data: parsedCachedData, ttl });
        }

        console.log(`🔄 Dữ liệu thay đổi, cập nhật cache mới`);
    } else {
        console.log(`🚀 Cache miss: ${key}, tạo mới`);
    }

    // Cập nhật cache với TTL 30 giây
    await client.setEx(key, 30, JSON.stringify(newData));

    res.json({ source: 'server', data: newData, ttl: 30 });
});

// Xóa cache theo key
app.delete('/cache/:key', async (req, res) => {
    const { key } = req.params;
    const result = await client.del(key);
    res.json({ message: result ? `🗑️ Cache deleted: ${key}` : `⚠️ No cache found for ${key}` });
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
