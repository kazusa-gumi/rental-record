export async function saveRoom(data: any) {
    const response = await fetch('/api/saveRoom', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error(await response.text());
    }
  }