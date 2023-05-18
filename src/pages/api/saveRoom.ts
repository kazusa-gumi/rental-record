import { NextApiRequest, NextApiResponse } from 'next';
import { saveRoomToDb } from '../../lib/api'; // データベースに保存する関数をインポート（必要に応じてパスを変更）

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // リクエストボディからroomDataを取得
      const roomData = req.body;

      // saveRoomToDb関数にroomDataを渡して、データベースに保存
      await saveRoomToDb(roomData);
      console.log(roomData)
      // データが正常に保存されたら、200 ステータスコードとメッセージを返す
      res.status(200).json({ message: 'Room successfully saved.' });
    } catch (error) {
        console.log(error)
      // エラーが発生した場合は、500 ステータスコードとエラーメッセージを返す
      res.status(500).json({ message: 'Failed to save room', error: error.message });
    }
  } else {
    // POSTメソッド以外は許可しない
    res.status(405).json({ message: 'Method not allowed' });
  }
}