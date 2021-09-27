export const getListView = async ({ number, page, category }) => {
  const apiRoute = `https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/?fields=slu
  g,categories,post_thumbnail,title,slug,date&number=${number}&page=${page}&category=${
    category || ""
  }`;
  try {
    const res = await fetch(apiRoute);
    const response = await res.json();

    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getCategories = async () => {
  const apiRoute = `https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories`;
  try {
    const res = await fetch(apiRoute);
    const response = await res.json();

    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getPost = async ({ slug }) => {
  const apiRoute = `https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/slug:${slug}?fields=featured_image,title,author,content,date`;
  try {
    const res = await fetch(apiRoute);
    const response = await res.json();

    return response;
  } catch (e) {
    console.log(e);
  }
};
