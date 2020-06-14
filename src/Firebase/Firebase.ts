import app from 'firebase/app'

const config = {
  apiKey: "AIzaSyBP28dbMIUWDXdrn0dR94xOF_E9Ih0Bvlk",
  authDomain: "fireauth-e58eb.firebaseapp.com",
  databaseURL: "https://fireauth-e58eb.firebaseio.com",
  projectId: "fireauth-e58eb",
  storageBucket: "fireauth-e58eb.appspot.com",
  messagingSenderId: "325794550944",
  appId: "1:325794550944:web:db38386c64cd68524aa5c5"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase