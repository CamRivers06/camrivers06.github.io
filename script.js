function filterData() {
  event.preventDefault();  // Prevent the form from submitting

  var startdate = document.getElementById("startdate").value;
  var enddate = document.getElementById("enddate").value;

  console.log(startdate);
  console.log(enddate);

  // Convert input dates to Date objects for comparison
  var start = new Date(startdate);
  var end = new Date(enddate);

  // Get all rows from the table body
  var tableRows = document.querySelectorAll("#pitchData tr");

  // Iterate over each row to check the date
  tableRows.forEach(function(row) {
      // Get the date cell from the row (2nd cell in each row, 1st index)
      var dateCell = row.cells[1].textContent;

      // Convert the date from the cell to a Date object
      var rowDate = new Date(dateCell);

      // Check if the row date falls within the specified range
      if (rowDate >= start && rowDate <= end) {
          // Show the row if it matches the filter
          row.style.display = "";
      } else {
          // Hide the row if it doesn't match the filter
          row.style.display = "none";
      }
  });
}

 event.preventDefault();
  var startdate= document.getElementById("startdate").value;
    var enddate= document.getElementById("enddate").value;
  console.log(startdate);
  console.log(enddate);
}

document.addEventListener('DOMContentLoaded', function() {
  // URL to fetch data from
  const url = 'https://compute.samford.edu/zohauth/clients/datajson/1';

  // Fetch data from the URL
  fetch(url)
      .then(response => response.json())
      .then(data => {
          const pitchTableBody = document.getElementById('pitchData');

          // Iterate over each pitch in the data
          data.forEach(pitch => {
              // Create a new row for each pitch
              const row = document.createElement('tr');

              // Create cells for each field
              const pitchNoCell = document.createElement('td');
              pitchNoCell.innerHTML = `<a href="details.html?id=${pitch.PitchNo}">Pitch ${pitch.PitchNo}</a>`;
              
              const dateCell = document.createElement('td');
              dateCell.textContent = pitch.Date;

              const timeCell = document.createElement('td');
              timeCell.textContent = pitch.Time;

              const batterCell = document.createElement('td');
              batterCell.textContent = pitch.Batter;

              const ballsCell = document.createElement('td');
              ballsCell.textContent = pitch.Balls;

              const strikesCell = document.createElement('td');
              strikesCell.textContent = pitch.Strikes;

              const outsCell = document.createElement('td');
              outsCell.textContent = pitch.Outs;

              const pitchCallCell = document.createElement('td');
              pitchCallCell.textContent = pitch.PitchCall;

              const korBBCell = document.createElement('td');
              korBBCell.textContent = pitch.KorBB || '';  // Empty string if no data

              const relSpeedCell = document.createElement('td');
              relSpeedCell.textContent = pitch.RelSpeed || '';  // Empty string if no data

              const spinRateCell = document.createElement('td');
              spinRateCell.textContent = pitch.SpinRate || '';  // Empty string if no data

              const spinAxisCell = document.createElement('td');
              spinAxisCell.textContent = pitch.SpinAxis || '';  // Empty string if no data

              // Append cells to the row
              row.appendChild(pitchNoCell);
              row.appendChild(dateCell);
              row.appendChild(timeCell);
              row.appendChild(batterCell);
              row.appendChild(ballsCell);
              row.appendChild(strikesCell);
              row.appendChild(outsCell);
              row.appendChild(pitchCallCell);
              row.appendChild(korBBCell);
              row.appendChild(relSpeedCell);
              row.appendChild(spinRateCell);
              row.appendChild(spinAxisCell);

              // Append row to the table body
              pitchTableBody.appendChild(row);
          });
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
});