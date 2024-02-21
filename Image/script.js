let user = document.querySelector("#user_input");
let usersubmit = document.querySelector("#submit");
let accesskey = "6PakA5RGuD9JbWdgUriKx1FVyj59KQfcQGiwS_YivTw";
let next = document.querySelector("#showmore");
let data;

let page = 1;

async function images(page) {
  if (page == 1) phto.innerHTML = "";
  Character = user.value;
  let res = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${Character}&client_id=${accesskey}&per_page=12`
  );
  console.log(
    `https://api.unsplash.com/search/photos?page=${page}&query=${Character}&client_id=${accesskey}&per_page=12`
  );
  data = await res.json();
  showdata(data);
}

usersubmit.addEventListener("click", (e) => {
  page = 1;
  images(page);
});

function showdata(data) {
  let currentPhotoIndex = 0;
  for (i = 0; i < 4; i++) {
    let col = document.createElement("div");
    col.classList.add("column");
    for (j = 0; j < data.results.length; j++) {
        if (j == 3) {
          break;
        }
      let photo = document.createElement("img");
      photo.setAttribute("src", data.results[currentPhotoIndex].urls.small);
      col.appendChild(photo);
      currentPhotoIndex++;
    }
    phto.appendChild(col);
  }

  next.style.display = "block";
}

next.addEventListener("click", () => {
  page++;
  images(page);
});

user.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    usersubmit.click();
  }
});
