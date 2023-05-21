// fetching the waiting list mockdata from db.json
const fetchWaitingListData = async () => {
  try {
    const response = await fetch("db.json");
    const { data } = await response.json();

    const table = document.querySelector(".players-table");

    data?.map((item, index) => {
      const row = document.createElement("tr");
      let rowCount = index + 1;

      // first column
      const img1Cell = document.createElement("td");
      const img1 = document.createElement("img");
      img1.src = item.img1;
      img1.style.width = "37px";
      img1.style.height = "39.27px";
      img1Cell.appendChild(img1);
      row.appendChild(img1Cell);

      // second column
      const img2Cell = document.createElement("td");
      if (item.img2) {
        const img2 = document.createElement("img");
        img2.src = item.img2;
        img2.style.width = "42px";
        img2.style.height = "26.29px";

        img2Cell.appendChild(img2);
      } else {
        const b = document.createElement("b");
        b.innerText = "3.5";
        img2Cell.appendChild(b);
      }
      row.appendChild(img2Cell);

      // third column
      const name1Cell = document.createElement("td");
      name1Cell.innerText = item.name1;
      if (index === 4 || index === 5 || index === 12 || index === 13) {
        name1Cell.classList.add("bold-name");
      }
      row.appendChild(name1Cell);

      // fourth column
      const name2Cell = document.createElement("td");
      name2Cell.innerText = item.name2;
      if (index === 4 || index === 5 || index === 12 || index === 13) {
        name2Cell.classList.add("bold-name");
      }
      if (index === 5 || index === 13) {
        name2Cell.classList.add("my-name");
      }
      row.appendChild(name2Cell);

      // fifth column
      const timeCell = document.createElement("td");
      const time = document.createElement("b");
      time.innerText = item.time;
      const mins = document.createElement("span");
      mins.innerText = " mins";
      timeCell.appendChild(time);
      timeCell.appendChild(mins);
      row.appendChild(timeCell);

      // sixth column
      const img3Cell = document.createElement("td");
      const img3 = document.createElement("img");
      img3.src = item.img3;
      img3Cell.appendChild(img3);

      row.appendChild(img3Cell);
      table.appendChild(row);

      // Adding rowspan and display properties
      if (rowCount % 2 === 1) {
        // Set rowspan to 2 for the specified cells
        img1Cell.setAttribute("rowspan", "2");
        img2Cell.setAttribute("rowspan", "2");
        timeCell.setAttribute("rowspan", "2");
        img3Cell.setAttribute("rowspan", "2");
      } else {
        // Hide the specified cells
        img1Cell.style.display = "none";
        img2Cell.style.display = "none";
        timeCell.style.display = "none";
        img3Cell.style.display = "none";
      }
    });
  } catch (error) {
    console.log(error);
  }
};

fetchWaitingListData();

// created for restarting the page by clicking the rotate icon
const rotateIcon = document.getElementById("rotate-icon");

rotateIcon.addEventListener("click", () => {
  window.location.reload();
});

// created for opening and closing modal by clicking the "?" icon. There is a toggle logic here.
const modal = document.getElementById("announcement-modal");
const modalIcon = document.getElementById("modal-icon");
let modalOpen = false;

modalIcon.addEventListener("click", () => {
  if (!modalOpen) {
    modalOpen = true;
    modal.style.display = "block";
  } else {
    modalOpen = false;
    modal.style.display = "none";
  }
});

// When the expandIcon is clicked, Waiting List table expands, all the list can be seen, arrow icon rotates and innerText ("Show" to "Hide") changes. There is toggle logic here too.
const expandIcon = document.getElementById("arrow-icon");
const tableWrapp = document.querySelector(".players-table-wrapper");
const otherInfo = document.querySelector(".other-info");
let tableOpen = false;

expandIcon.addEventListener("click", () => {
  if (!tableOpen) {
    tableOpen = true;
    tableWrapp.style.height = "380px";
    expandIcon.style.transform = "rotate(180deg)";
    otherInfo.innerText = "Hide other info";
  } else {
    tableOpen = false;
    tableWrapp.style.height = "210px";
    expandIcon.style.transform = "rotate(360deg)";
    otherInfo.innerText = "Show other info";
  }
});

// When the button is clicked, the modal opens for 2.5 seconds.
const modal2 = document.querySelector(".second-modal");
const button = document.querySelector(".btn");
const largeButton = document.querySelector(".large-btn");

button.addEventListener("click", () => {
  modal2.style.display = "block";
  setTimeout(() => {
    modal2.style.display = "none";
  }, 2500);
});

largeButton.addEventListener("click", () => {
  modal2.style.display = "block";
  setTimeout(() => {
    modal2.style.display = "none";
  }, 2500);
});
