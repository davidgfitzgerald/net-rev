import { wordMapping } from './singulars_plurals'
const alphabet = 'abcdefghijklmnopqrstuvwxyz'



// Customised from inflection package
function inflect ( str, count, singular, plural ){
  count = parseInt( count, 10 );
  if( isNaN( count )) return str;

  const words = str.split(" ")
  const newWords = words.map(word => {
    if( count === 0 || count > 1 ){
      return wordMapping[word].plural
    }else{
      return wordMapping[word].singular
    }
  })
  return newWords.join(" ")
}

export { alphabet, inflect }