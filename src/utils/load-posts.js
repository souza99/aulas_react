export const loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');

    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postJson = await posts.json();
    const photoJson = await photos.json();

    //FAZ UM "ZIP", une dois arrays, quando usamos, passamos o array menor primeiro
    //para fazer o map. No caso, o postJson
    const postsAndPhotos = postJson.map((post, index) => {
      return { ...post, cover: photoJson[index].url }
    });

    return postsAndPhotos;
}