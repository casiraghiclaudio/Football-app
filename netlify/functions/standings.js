export async function handler() {
  try {
    const res = await fetch(
      "https://v3.football.api-sports.io/standings?league=135&season=2025",
      {
        headers: {
          "x-apisports-key": "97e8c2db1fdc1f3990ae0cbcb36bfb79"
        }
      }
    );
    const data = await res.json();
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message })
    };
  }
}
