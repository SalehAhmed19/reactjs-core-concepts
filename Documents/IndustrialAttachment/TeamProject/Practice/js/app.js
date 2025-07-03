const data = [
  {
    id: 1,
    title: "Lorem1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore repudiandae minima natus sunt totam sequi vitae neque ipsum dolorem?",
    img: "https://img.freepik.com/premium-photo/white-daisy-with-yellow-center-is-field-grass_967203-173.jpg",
  },
  {
    id: 2,
    title: "Lorem2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eos porro molestiae officia quam perferendis voluptatem hic dolores modi dicta.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6MLT2lpj3M85eFPT2oNNivGYx_saZEww8Q&usqp=CAU",
  },
  {
    id: 3,
    title: "Lorem3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis a amet labore numquam hic, reprehenderit sequi asperiores consequuntur iusto facilis.",
    img: "https://st.depositphotos.com/1038117/1246/i/450/depositphotos_12462950-stock-photo-color-of-autumn-in-paris.jpg",
  },
  {
    id: 4,
    title: "Lorem4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consectetur praesentium illo perferendis vero nostrum aliquid accusamus adipisci similique earum!",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-SaYWlXmVicHWYEEpRgrmFir507tWQk3pA&usqp=CAU",
  },
];

let info = "";
let objects = "";
let tName = "";

data.forEach((d) => {
  info += `
  <div class="col-12 col-md-3 p-3 border rounded-2 container-fluid">
    <img
      class="img-fluid"
      src="${d.img}"
      alt=""
    />
    <div class="mt-3">
      <h3>${d.title}</h3>
      <p>${d.description}</p>
      <button class="px-5 py-3 border-0 rounded-1" onclick="getTitle('${d.title}')">Details</button>
    </div>
  </div>`;
});

const getTitle = (titleName) => {
  console.log(titleName);
  tName = titleName;
  // return tName;

  for (const obj of data) {
    if (obj.title === tName) {
      objects += `
        <div class="p-3 border rounded-2 container w-25">
        <img
          class="w-100"
          src="${obj.img}"
          alt=""
        />
        <div class="mt-3">
          <h3>${obj.title}</h3>
          <p>${obj.description}</p>
        </div>
      </div>`;

      document.getElementById("mainDiv").innerHTML = objects;
      console.log(obj);
      objects = "";
    }
  }
};

document.getElementById("row").innerHTML = info;
