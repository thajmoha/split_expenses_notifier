function SendMadelineAlert() {

  // define parameters
  var month_dict = {	1:'Janauary', 2:'February', 3:'March', 4:'April', 5:'May', 6:'June', 7:'July', 8:'August', 9:'September', 10:'October', 11:'November', 12:'December'}
  var months = [1,2,3,4,5,6,7,8,9,10,11,12];
  var sheet_link = 'xxx'
  // var milisec_to_wait = 1000*60*1
  var email_  = 'xxxy@gmail.com'

  // get current month
  var date = new Date();
  var current_month  = months[date.getMonth()];

  // previous month in question (for example january is paid in february)
  var month_value = current_month-1
  // get expenses for that month
  var madeline_spending_month = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("SummaryAction").getRange(`C${current_month}`);
  var madeline_spending_month_value = madeline_spending_month.getValues();

  // console.log(`current month is ${current_month} and previous month is ${month_value} also (${month_dict[month_value]}) current expenses ${madeline_spending_month_value}`)


  // main code
  if (current_month >1){
    if (Number(madeline_spending_month_value)>0) {
      var message = `Thank you for filling expense for ${month_dict[month_value]}.`; //
      var subject = `Thank you for filling ${month_dict[month_value]}`;
      MailApp.sendEmail(email_, subject, message);

    } else {
          var message = `This is your Alert email! Your spending for ${month_dict[month_value]} is not filled!! Take action please. Currently equals to ${madeline_spending_month_value} \n please log in to ${sheet_link}`; //
      var subject = `Expensese Alert for ${month_dict[month_value]}`;
      MailApp.sendEmail(email_, subject, message);
      // Utilities.sleep(milisec_to_wait)
      // SendMadelineEmail()
    }
  }
}