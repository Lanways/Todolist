// 初始變數
const input = document.querySelector("#new-todo");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector("#my-todo");
//new
const listArea = document.querySelector("#list-area");
const doneList = document.querySelector("#done-list");
// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

//let of 將 array 裡的元素取出todo
//call addItem function 帶入參數todo

for (let todo of todos) {
  addItem(todo);
}

// 函式
//create一個li節點，
//運用bootstrap label可帶入todo、i class 刪除樣式
//將literal render到list 運用appendChild解析出來
//應該是因為有create element 需要使用到appendchild
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}
//功能一樣的function，只是要render到不同的element
function addDoneItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="done" class="checked">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  doneList.appendChild(newItem);
}
// Create
//運用trim()刪除sting中空白字元
//判斷式如果input的長度大於0，Call function製作todo 避免產生空白todo
//model 運用了別種寫法if (!text.length) return，
//直觀看起來像是，不是文字的長度的話return掉
//但寫起來更簡潔，因為是獨立寫在function，可以運用到兩個監聽器的inputValue
addBtn.addEventListener("click", function () {
  const inputValue = input.value.trim();
  if (inputValue.length > 0) {
    addItem(inputValue);
    input.value = ''
  } else {
    alert('請輸入代辦事項')
  }
});
//在使用者輸入的input也新增一個監聽器，參數改為鍵盤事件
//如果使用者鍵入Enter而且不是只有空白，call function 製作 todo
input.addEventListener("keyup", function (event) {
  const inputValue = input.value.trim();
  if (inputValue.length > 0 && event.key === "Enter") {
    addItem(inputValue);
    input.value = ''
  }
});
// Delete and checkw
//運用 event delegation將監聽器放在所有會需要點擊的節點父層
//如果點擊事件裡的classlist有delete，remove父層的li
listArea.addEventListener("click", function (event) {
  const target = event.target;
  const parentElement = event.target.parentElement;
  if (target.classList.contains("delete")) {
    parentElement.remove();
    //if 1;如果點擊的標籤名稱為LABEL，注意大寫
    //if 2;如果點擊的目標classList不包含checked，否則DonList的LABLE再次被點擊的話會再移動一次
    //新增到donelist 刪除父層li
  } else if (target.tagName === "LABEL" && !target.classList.contains("checked")) {
    addDoneItem(target.textContent);
    parentElement.remove();
    //將todo的li移動到donelist
    //target.classList.toggle(' ')判斷當前元素是否有包含指定的 class name,有的話就把這個 class 移除，沒有的話就把 class 加上去
    // doneList.appendChild(parentElement)
    // target.classList.toggle('checked')     
  } else if (target.classList.contains("checked")) {
    addItem(target.textContent);
    parentElement.remove();
  }
});

// // 階段二：函式包裝，同學想優化程式碼可參考
// // 初始變數
// const listArea = document.querySelector("#list-area");
// const list = document.querySelector("#my-todo");
// const doneList = document.querySelector("#done-list");
// const addBtn = document.querySelector("#add-btn");
// const input = document.querySelector("#new-todo");

// // 資料
// const todos = [
//   "Hit the gym",
//   "Read a book",
//   "Buy eggs",
//   "Organize office",
//   "Pay bills"
// ];

// for (let todo of todos) {
//   addItem(todo, list);
// }

// // 函式
// function addItem(text, listName) {
//   if (!text.length) return
//   const newItem = document.createElement("li");
//   let className = ''

//   if (listName === doneList) {
//     className = 'checked'
//   }
//   newItem.innerHTML = `
//     <label for="todo" class="${className}">${text}</label>
//     <i class="delete fa fa-trash"></i>
//   `;
//   listName.appendChild(newItem);
// }

// // Create
// addBtn.addEventListener("click", function () {
//   const inputValue = input.value.trim();
//   addItem(inputValue, list)
// });
// // 功能2：當使用者在 input#newTodo 裡按下 Enter 鍵時，可以新增 to-do。
// input.addEventListener("keyup", function (event) {
//   const inputValue = input.value.trim();
//   if (event.key === "Enter") {
//     addItem(inputValue, list)
//   }
// });

// // Delete and check
// // 功能3：當使用者點擊完成的 todo 時，該項目會被送進 Done 清單；同時，​Done 清單中的項目也要能夠被刪除
// listArea.addEventListener("click", function (event) {
//   const target = event.target;
//   const parentElement = target.parentElement;

//   if (target.classList.contains("delete")) {
//     parentElement.remove();
//   } else if (target.tagName === "LABEL") {
//     if (!target.classList.contains("checked")) {
//       addItem(target.innerText, doneList)
//       parentElement.remove()
//     }
//   }
// });

// // 階段三：利用appendChild()達成優化功能，同學想優化程式碼可參考
// // 初始變數
// const listArea = document.querySelector("#list-area");
// const list = document.querySelector("#my-todo");
// const doneList = document.querySelector("#done-list");
// const addBtn = document.querySelector("#add-btn");
// const input = document.querySelector("#new-todo");

// // 資料
// const todos = [
//   "Hit the gym",
//   "Read a book",
//   "Buy eggs",
//   "Organize office",
//   "Pay bills"
// ];

// for (let todo of todos) {
//   addItem(todo);
// }

// // 函式
// function addItem(text) {
//   if (!text.length) return
//   const newItem = document.createElement("li");
//   newItem.innerHTML = `
//     <label for="todo">${text}</label>
//     <i class="delete fa fa-trash"></i>
//   `;
//   list.appendChild(newItem);
// }

// // Create
// addBtn.addEventListener("click", function () {
//   const inputValue = input.value.trim();
//   addItem(inputValue);
// });
// // 功能2：當使用者在 input#newTodo 裡按下 Enter 鍵時，可以新增 to-do。
// input.addEventListener("keyup", function (event) {
//   const inputValue = input.value.trim();
//   if (event.key === "Enter") {
//     addItem(inputValue);
//   }
// });

// // Delete and check
// // 功能3：當使用者點擊完成的 todo 時，該項目會被送進 Done 清單；同時，​Done 清單中的項目也要能夠被刪除
// listArea.addEventListener("click", function (event) {
//   const target = event.target;
//   const parentElement = target.parentElement;

//   if (target.classList.contains("delete")) {
//     parentElement.remove();
//   } else if (target.tagName === "LABEL") {
//     if (!target.classList.contains("checked")) {
//       //利用appendChild()實現區塊間的移動
//       doneList.appendChild(parentElement)
//       target.classList.toggle('checked')
//     }
//   }
// });
