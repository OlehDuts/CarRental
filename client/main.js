import { Accounts } from 'meteor/accounts-base';
 
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});
import '../imports/startup/accounts-config.js';
import '../imports/ui/body.js';