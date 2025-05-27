export const getApi = async (url: string) => {
  try {
    const res = await fetch(url);
    if (res.ok) return res.json();
    else throw new Error("An error occured");
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};
