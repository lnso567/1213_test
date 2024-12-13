const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors'); // 引入 CORS 中介軟體

const app = express();
const port = 3001; // 伺服器監聽的端口
app.use(cors()); // 使用 CORS 中介軟體
app.use(express.json()); // 解析 JSON 格式的請求體

const mongoURL = 'mongodb://localhost:27017';
const dbName = 'bento-shop';
const collectionName = 'users';

async function connectToMongoDB() {
    const client = await MongoClient.connect(mongoURL);
    const db = client.db(dbName);
    return { client, db };
}

// 從 API 獲取資料並儲存到 MongoDB
async function fetchDataAndSaveToMongoDB() {
    const fetch = require('node-fetch'); // 引入 node-fetch
    const apiURL = 'https://fake-json-api.mock.beeceptor.com/users';
    const { client, db } = await connectToMongoDB();
    const users = db.collection(collectionName);

  try{
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const usersData = await response.json();

    const result = await users.insertMany(usersData);
    console.log(`Inserted ${result.insertedCount} documents into MongoDB`);

  } catch(e){
    console.error('Error inserting data:', e);
  } finally{
     if (client) {
      await client.close();
    }
  }
}
fetchDataAndSaveToMongoDB();

//  建立讀取使用者資料 API 端點
app.get('/api/users', async (req, res) => {
    let client;
    try {
        const { client: mongoClient, db } = await connectToMongoDB(); // 呼叫連線函式
        client = mongoClient;
        const users = db.collection(collectionName);
        const usersData = await users.find().toArray(); // 從 MongoDB 讀取所有使用者資料
        res.json(usersData);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Failed to fetch users' }); // 返回 500 錯誤
    } finally {
        if (client) {
            await client.close(); // 確保連線關閉
        }
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});