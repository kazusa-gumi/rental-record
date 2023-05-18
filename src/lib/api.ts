import { supabase } from '../lib/supabase';

export const saveRoomToDb = async (roomData: any) => {
  const { data, error } = await supabase
    .from('rooms') // あなたのroomsテーブルが保存されている場所
    .insert([
      {
        id: roomData.id,
        title: roomData.title,
        description: roomData.description,
        // ここに他のデータも追加できます。
      },
    ]);

  if (error) {
    throw error;
  }

  return data;
};