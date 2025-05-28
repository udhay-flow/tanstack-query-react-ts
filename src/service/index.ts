export const getApi = async (url: string) => {
  try {
    const res = await fetch(url);
    if (res.ok) return res.json();
    else throw new Error("An error occured");
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};

export const postApi = async (url: string, body: Record<string, string>) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (res.ok) return res.json();
    else throw new Error("An error occured");
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};
