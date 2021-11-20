import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import APIService from './exchange-service.js';

function getElements(response) {
  console.log("made to getElements");
  if (response.result) {
    console.log("it made it to the if branch");
    $('#rateDisplay').text(`The exchange rate is: ${response.conversion_rate}`);
    $('#resultDisplay').text(`The exchange amount is: ${response.conversion_result} ${response.target_code}`);
  } else {
    if (response === ""){console.log("it is a empty string");}
    console.log("made to else branch");
    $('#showErrors').text(`There was an error: ${response}`);
  }
}

$(document).ready(function() {
  $('#get-rate').click(function() {
    let currency = $('#select-currency :checked').val();
    let amount = $('#USDAmount').val();
    $('#USDAmount').val("");
    APIService.APIRequest(currency, amount).then(function(response) {
      getElements(response);
    });
  });
});