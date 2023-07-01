export function countAssets(extensions) {
  let count = 0;

  extensions.forEach((extension) => {
    const assets = document.getElementsByTagName("link");
    for (let i = 0; i < assets.length; i++) {
      const asset = assets[i];
      if (asset.href.endsWith(extension)) {
        count++;
      }
    }
  });

  return count;
}
