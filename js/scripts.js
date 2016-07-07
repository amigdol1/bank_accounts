function initialSignUp(name, deposit) {
  this.name = name;
  this.deposit = deposit;
}

$(document).ready(function() {
  $("form#bank_account").submit(function(event){
    event.preventDefault();
    var inputName = $("input#name").val();
    var inputDeposit = parseInt($("input#deposit").val());
    var newAccount = new initialSignUp(inputName, inputDeposit);

    console.log(newAccount);
  });




});
