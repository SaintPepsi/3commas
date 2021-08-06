let total = 0;
document
  .querySelector(".grid-table__body")
  .querySelectorAll(".grid-table__item")
  .forEach((table_item) => {
    total += parseFloat(
      table_item
        .querySelector(".grid-table__td:nth-child(5)")
        .querySelector(".text-wrapper:first-child").innerText,
    );
  });
console.log("total", total);
