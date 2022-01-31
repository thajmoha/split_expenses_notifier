# expense_sheet_alert
This repo contains a montly expenses sheet for two people a javascript for a google app that send a reminders if expenses is not filled.
- expense_sheet.xlsx 
  - used to input expeses for every month 
  - a summary of the expenses is listes in Summary Sheet 
- alert_google_app.gs
  - for every month it check if the expense were populated otherwise it will send a reminder to a given email
  - email reminders can be set using google app trigers (i.e. hourly, daily etc.)
