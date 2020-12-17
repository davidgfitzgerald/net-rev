const wordMapping = {}

function addPairs (pairs) {
  pairs.forEach(pair => {
    let singular = pair[0];
    let plural = pair[1];
    wordMapping[singular] = {
      singular,
      plural
    };
    wordMapping[plural] = {
      singular,
      plural
    }
  })
}

addPairs(
  [
  ["is", "are"],
  ["was", "were"]
  ]
)


export { wordMapping }