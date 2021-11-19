import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import APIService from './exchange-service.js'

function getElements(response) {
  if (response.conversion_rates) {
    $('#dirham').text(`The exchange amount is: ${response.conversion_rates.AED} Dirham`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#').click(function() {
    let USD = $('#USDAmount').val();
    $('#USDAmount').val("");
    APIService.APIRequest(USD)
      .then(function(response) {
        getElements(response);
      });
  });
});