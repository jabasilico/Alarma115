function searchContactsByCode() {
  let input = document.getElementById("searchInputCode");
  let filter = input.value.toUpperCase();
  let table = document.getElementById("contactsTable");
  let tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      let textValue = td.textContent || td.innerText;
      if (textValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function clearSearch() {
  document.getElementById("searchInputName").value = "";
  document.getElementById("searchInputCode").value = "";
  searchContactsByName();
  searchContactsByCode();
}

function searchContactsByName() {
  let input = document.getElementById("searchInputName");
  let filter = input.value.toUpperCase();
  let table = document.getElementById("contactsTable");
  let tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      let textValue = td.textContent || td.innerText;
      if (textValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function goToLogPage() {
  window.location.href = "log.html";
}

function goBack() {
  history.back();
}

