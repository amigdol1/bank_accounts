function initialSignUp(name, deposit) {
  this.name = name;
  this.deposit = deposit;
}

function balance(new_deposit, withdraw) {
  this.newDeposit = new_deposit;
  this.withdraw = withdraw;
}

$(document).ready(function() {
  $("form#bank_account").submit(function(event){
    event.preventDefault();
    var inputName = $("input#name").val();
    var inputDeposit = parseInt($("input#deposit").val());
    var newAccount = new initialSignUp(inputName, inputDeposit);

    console.log(newAccount);
  });

  $("form#deposit_withdraw").submit(function(event){
      event.preventDefault();
    var inputNewDeposit = parseInt($("input#deposit").val());
    var inputWithdraw = parseInt($("input#withdraw").val());
    var newBalance = new balance(inputNewDeposit, inputWithdraw);

    console.log(newBalance);
  });
});
