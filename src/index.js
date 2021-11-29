import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import APIService from './exchange-service.js';

function getElements(response) {
  console.log("It made to getElements");
  if (response.result) {
    console.log("it made it to the if branch");
    $('#rate-alert').text(`The exchange rate is: ${response.conversion_rate}`);
    $('#resultDisplay').text(`${response.conversion_result}`);
  } else {
    console.log("made to else branch");
    if (response === ""){console.log("The if statement says it's an empty string");}
    $('#rate-alert').text(`There was an error: ${response}`);
  }
}

async function clearFields(){
  $('#resultDisplay').text("");
  $('#rate-alert').text("");
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
    clearFields();
    makeAPICall(base, currency, amount);
  });
});