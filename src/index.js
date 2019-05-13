//append a ul
//append an li with 'spot','rover','bingo','joe'
const root = document.getElementById('root');


const testList = document.createElement('ul');
const dogNames = ['spot', 'rover', 'bingo', 'joe'];

dogNames.forEach(name => {
  const dogLi = document.createElement('li');
  dogLi.textContent = name;
  testList.appendChild(dogLi);
});
root.appendChild(testList);
