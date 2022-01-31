# Split Expenses Notifier
This app is perfect for partners or roomates who share expenses and want to automatically split montly expesnse and notify other
- expense_sheet.xlsx 
  - used to input expeses for every month 
  - a summary of the expenses is listes in Summary Sheet 
- alert_google_app.gs
  - for every month it check if the expense were populated otherwise it will send a reminder to a given email
  - email reminders can be set using google app trigers (i.e. hourly, daily etc.)
