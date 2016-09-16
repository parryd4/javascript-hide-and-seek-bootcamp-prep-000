function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementsByClassName('target')[0]
}

function increaseRankBy(n) {
  var interestedIn = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0, l = interestedIn.length; i < l; i++) {
    interestedIn[i].innerHTML = parseInt(interestedIn[i].innerHTML)+n;
  }
}

function deepestChild() {
   return document.querySelector('#grand-node div div div div')
   // I can find this by looking at it but I could not figure out how to write code to dig deeper
   // I tried making variables and .children-ing them
}
