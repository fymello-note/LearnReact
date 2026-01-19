export function getImageUrl(imageId, size = 's') {
    console.log(size);
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}
