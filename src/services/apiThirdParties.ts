export async function getCountries() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name");
    const data = res.json();

    if (!res.ok) throw new Error("An error occured while fetchign countries");

    return data;
  } catch (error) {
    console.error(error);
  }
}

// const headers = new Headers();
// headers.append("X-CSCAPI-KEY", "API_KEY");

// const requestOptions = {
//   method: "GET",
//   headers: headers,
//   redirect: "follow",
// };

export async function fetchCountries() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/countries`);
    const data = await res.json();
    console.log("data", data);

    return data;
  } catch (error) {
    console.error(error);
  }
}
