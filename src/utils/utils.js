import { wordMapping } from './singulars_plurals';
import { inflect } from 'inflection';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// Extend inflection package to allow multiple words and include 'is'<->'are'
function inflectPlus (str, count, singular, plural ){
  count = parseInt( count, 10 );
  if( isNaN( count )) return str;

  const words = str.split(" ")
  const newWords = words.map(word => {
    if (wordMapping.hasOwnProperty(word)) {
      if( count === 0 || count > 1 ){
        return wordMapping[word].plural
      } else {
        return wordMapping[word].singular
      }
    } else {
      return inflect(word, count, singular, plural)
    }
  })
  return newWords.join(" ")
}

export { alphabet, inflectPlus }