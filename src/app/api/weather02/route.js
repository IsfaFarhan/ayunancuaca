export async function GET(req) {
  const url = `https://api.data.gov.my/weather/forecast?contains=St@location__location_id`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return new Response("Network respond was not OK" + response.statusText, {
        status: response.status,
      });
    }
    const data = await response.json();
    /* const date = data.find((item) => item.date); */
    console.log(data);
    /* console.log(data); */
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-type": "application/json" },
    });
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);

    return new Response(JSON.stringify({ errror: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
