export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const location = searchParams.get("location");
  const url = `https://api.data.gov.my/weather/forecast?contains=Ds@location__location_id`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return new Response(
        "Network response was not ok: " + response.statusText,
        {
          status: response.status,
        }
      );
    }

    const data = await response.json();

    const locationData = data.filter(
      (item) => item.location.location_name === location
    );

    if (locationData) {
      return new Response(
        JSON.stringify(locationData),

        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      return new Response(JSON.stringify({ error: "Location not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
