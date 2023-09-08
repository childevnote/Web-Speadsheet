document.addEventListener("DOMContentLoaded", function () {
  const cells = document.querySelectorAll(".cell");
  const cellInfo = document.getElementById("cellInfo");
  const columnHeaderCells = document.querySelectorAll("#thead-title td");
  const rowHeaderCells = document.querySelectorAll("tbody tr td:first-child");

  let selectedCell = null; // 선택한 셀을 추적하기 위한 변수

  cells.forEach((cell)=> {
    cell.addEventListener("click", function () {
      const col = cell.getAttribute("data-col");
      const row = cell.getAttribute("data-row");

      cellInfo.textContent = "Cell : " + col + row;

      // 모든 열 헤더 셀의 클래스를 초기화 (이전에 설정된 색상을 제거)
      columnHeaderCells.forEach((headerCell) =>{
        headerCell.classList.remove("highlighted-column");
      });

      // 모든 행 헤더 셀의 클래스를 초기화 (이전에 설정된 색상을 제거)
      rowHeaderCells.forEach((headerCell) => {
        headerCell.classList.remove("highlighted-row");
      });

      // 클릭한 셀의 열과 행 헤더 셀을 강조
      columnHeaderCells[col.charCodeAt(0) - 64].classList.add("highlighted-column");
      rowHeaderCells[row - 1].classList.add("highlighted-row");



      if (selectedCell) {
        selectedCell.innerHTML = selectedCell.querySelector("input").value;
        selectedCell.classList.remove("editing");
      }

      cell.innerHTML = '<input type="text" class="cell-input" value="' + cell.innerText + '">';
      cell.classList.add("editing");
      selectedCell = cell;

      const inputElement = cell.querySelector("input");
      
      // 입력 상자의 blur 이벤트 리스너 추가
      inputElement.addEventListener("blur", function () {
        cell.innerHTML = inputElement.value;
        cell.classList.remove("editing");
        selectedCell = null;
      });

      // 입력 상자에서 Enter 키가 눌렸을 때 blur 이벤트 발생하도록 설정
      inputElement.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          inputElement.blur();
        }
      });

      // 입력 상자에 포커스 설정
      inputElement.focus();
    });
  });
});
