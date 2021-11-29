import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import APIService from './exchange-service.js';

function getElements(response) {
  if (response.result) {
    $('#rate-alert').text(`The exchange rate is: ${response.conversion_rate}`);
    $('#resultDisplay').text(`${response.conversion_result}`);
  } else {
    if (response === "") {
      $('#rate-alert').text(`There was an unknown error`);
    } else {
      $('#rate-alert').text(`There was an error: ${response}`);
    }
  }
}

async function makeAPICall(base, currency, amount){
  const response = await APIService.APIRequest(base, currency, amount);
  console.log(response);
  getElements(response);
}

$(document).ready(function() {
  $('#get-rate').click(function() {
    let base = $('#base-currency :checked').val();
    let currency = $('#select-currency :checked').val();
    let amount = $('#USDAmount').val();
    $('#resultDisplay').text("");
    $('#rate-alert').text("");
    makeAPICall(base, currency, amount);
  });
});