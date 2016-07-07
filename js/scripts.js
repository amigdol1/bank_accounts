function initialSignUp(name, deposit) {
  this.name = name;
  this.deposit = deposit;
}

initialSignUp.prototype.newAmount = function(newDeposit, withdraw) {
  this.deposit += newDeposit;
  this.deposit -= withdraw;
}


$(document).ready(function() {

  $("form#bank_account").submit(function(event){
    event.preventDefault();
    var inputName = $("input#name").val();
    var inputDeposit = parseInt($("input#deposit").val());
    var newAccount = new initialSignUp(inputName, inputDeposit);

    console.log(newAccount);

  $("button#final_button").click(function(){
    var inputNewDeposit = parseInt($("input#new_deposit").val());
    var inputWithdraw = parseInt($("input#withdraw").val());
    var endBalance = newAccount.newAmount(inputNewDeposit, inputWithdraw);

    $("#account_balance").append("<p>" + "Your new balance is: " + newAccount.deposit + "</p>");
    console.log(endBalance);

    });
  });
});

//
