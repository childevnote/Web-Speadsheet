

document.addEventListener("DOMContentLoaded", function () {
  // 엑셀 내보내기 버튼에 클릭 이벤트 리스너 추가
  var exportButton = document.getElementById("export-button");
  exportButton.addEventListener("click", function () {
    exportToExcel();
  });
});

function exportToExcel() {
  // HTML 테이블 가져오기
  var table = document.getElementById("spreadsheetTable");

  // 새로운 워크북 생성
  var wb = XLSX.utils.book_new();

  // 테이블 데이터를 워크시트로 변환
  var ws = XLSX.utils.table_to_sheet(table);

  // 워크북에 워크시트 추가
  XLSX.utils.book_append_sheet(wb, ws, "Spreadsheet");

  // 엑셀 파일로 내보내기
  XLSX.writeFile(wb, "spreadsheetTable.xlsx");
}
