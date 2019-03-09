const FILENAME = 'Nginx basic operation';

const translateFilename = filename => {
  return filename.toLowerCase().replace(/\s/g, '-');
}
console.log(translateFilename(FILENAME));