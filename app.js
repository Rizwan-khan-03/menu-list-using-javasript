const menu = [
    {
      id: 1,
      title: "burger crunch ",
      category: "breakfast",
      price: 15.99,
      img: "./img/breakfast-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "egg rice",
        category: "breakfast",
        price: 20.99,
        img: "./img/breakfast-2.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,cold-pressed `,
      },
      {
        id: 3,
        title: "sandwich",
        category: "breakfast",
        price: 8.99,
        img: "./img/breakfast-3.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      },
    {
      id: 4,
      title: "rice test",
      category: "lunch",
      price: 13.99,
      img: "./img/lunch-1.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 5,
        title: "indian classic",
        category: "lunch",
        price: 12.99,
        img:  "./img/lunch-2.jpg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      },
      {
        id: 6,
        title: "light egg attack",
        category: "lunch",
        price: 22.99,
        img:  "./img/dinner-2.jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
    {
      id: 7,
      title: "mozito ",
      category: "drinks",
      price: 6.99,
      img: "./img/shake-1.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
   
  
    {
      id: 8,
      title: "strawberry shake ",
      category: "drinks",
      price: 18.99,
      img: "./img/shake-2.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    
   
    {
      id: 9,
      title: "lemon juce",
      category: "drinks",
      price: 16.99,
      img: "./img/shake-3.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "light dinner",
      category: "dinner",
      price: 39.99,
      img: "./img/dinner-1.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

const card=document.querySelector(".card-container");
const btn_container=document.querySelector(".card-header");
console.log(btn_container)
// load items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
  });
  function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
    //   return `<article class="menu-item">
    //         <img src=${item.img} class="photo" alt=${item.title} />
    //         <div class="item-info">
    //           <header>
    //             <h4>${item.title}</h4>
    //             <h4 class="price">$${item.price}</h4>
    //           </header>
    //           <p class="item-text">
    //             ${item.desc}
    //           </p>${item.price}
    //         </div>
    //       </article>`;
    //<div class="col-sm-3 p-3"></div>
    return `<div class="col-sm-4 p-3"> 
    <div class="card mb-3" style="max-width:440px; ">
    <div class="row" >
      <div class="" >
        <img src=${item.img} class="img-fluid rounded-start"  alt=${item.title} style=" width:100%;border:2px solid #FFC107" >
      </div>
      <div class=" ">
        <div class="card-body text-start">
        <div class="custom-title">
        <h5 class="card-title">${item.title}</h5>
        <h6>$${item.price}</h6>
        </div>
          <p class="text-start"> ${item.desc}</p>
        </div>
      </div>
      <div class="d-grid gap-2 p-2 d-md-flex justify-content-md-end">
        <button class="btn btn-warning me-md-2 md-2" type="button">Order Now</button>
      </div>
    </div>
  </div>
 </div>`
    });
    displayMenu = displayMenu.join("");
  
    card.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["All"]
    );
    const categoryBtns = categories
    .map(function (category) {
    //   return `<button class="filter-btn" type="button" data-id=${category}>
    //   ${category}
    //   </button>`;
    return `<button type="button" class="btn btn-warning m-4 " id="filter-btn" data-id=${category}>${category}</button>`
    })
    .join("");
    btn_container.innerHTML = categoryBtns;
    const filterBtns = btn_container.querySelectorAll("#filter-btn");
    // filter items
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        // console.log(menuCategory);
        if (category === "all") {
          displayMenuItems(menu);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
}


  