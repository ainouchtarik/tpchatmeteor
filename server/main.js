import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { MessagesCollection } from '/imports/db/MessagesCollection';
import '/imports/api/MessagesMethods';
import '/imports/api/MessagesPublications';

const SEED_USERNAME = 'Lily';
const SEED_PASSWORD = 'password';

const SEED_USERNAME2 = 'Tarik';
const SEED_PASSWORD2 = 'password';


Meteor.startup(async () => {

  //MessagesCollection.remove({});

  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  if (!Accounts.findUserByUsername(SEED_USERNAME2)) {
    Accounts.createUser({
      username: SEED_USERNAME2,
      password: SEED_PASSWORD2,
    });
  }

  const user = Accounts.findUserByUsername(SEED_USERNAME);
  const user2 = Accounts.findUserByUsername(SEED_USERNAME2);

});
