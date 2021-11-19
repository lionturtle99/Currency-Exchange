import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import APIService from './exchange-service.js';

function getElements(response) {
  if (response.result) {
    $('#resultDisplay').text(`The exchange rate is: ${response.conversion_rates}`);
    $('#resultDisplay').text(`The exchange amount is: ${response.conversion_result}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#get-rate').click(function() {
    let currency = $('#select-currency :checked').val();
    let amount = $('#USDAmount').val();
    $('#USDAmount').val("");
    APIService.APIRequest(currency, amount).then(function(response) {
      getElements(response);
      console.log(response);
    });
  });
});