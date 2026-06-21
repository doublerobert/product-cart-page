function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProducts() {
  await delay(500);

  const response = await fetch("/data.json");

  if (!response.ok) {
    throw Error("Failed to fetch products");
  }

  return response.json();
}
