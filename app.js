const blessed = require('blessed');

// Screen
const screen = blessed.screen({
  smartCSR: true,
  title: 'Blessed form',
});

// Form
const form = blessed.form({
  parent: screen,
  width: '90%',
  left: 'center',
  keys: true,
  vi: true,
});

// Name
const usernameLable = blessed.text({
  parent: screen,
  top: 3,
  left: 5,
  content: 'USERNAME:',
});
const username = blessed.textbox({
  parent: form,
  name: 'username',
  top: 2,
  left: 7,
  height: 3,
  width: '50%',
  inputOnFocus: true,
  content: 'username',
  border: {
    type: 'line',
  },
  focus: {
    fg: 'blue',
  },
});

const passwordLabel = blessed.text({
  parent: screen,
  content: 'PASSWORD:',
  top: 7,
  left: 5,
});
const password = blessed.textbox({
  parent: form,
  name: 'password',
  top: 6,
  left: 7,
  height: 3,
  width: '50%',
  inputOnFocus: true,
  content: '********',
  border: {
    type: 'line',
  },
  focus: {
    fg: 'blue',
  },
});

const submit = blessed.button({
  parent: form,
  name: 'submit',
  content: 'Submit',
  top: 10,
  left: 5,
  shrink: true,
  padding: {
    top: 1,
    right: 2,
    bottom: 1,
    left: 2,
  },
  style: {
    bold: true,
    fg: 'white',
    bg: 'green',
    focus: {
      inverse: true,
    },
  },
});

const cancel = blessed.button({
  parent: form,
  name: 'cancel',
  content: 'Cancel',
  top: 10,
  left: 15,
  shrink: true,
  padding: {
    top: 1,
    right: 2,
    bottom: 1,
    left: 2,
  },
  style: {
    bold: true,
    fg: 'white',
    bg: 'red',
    focus: {
      inverse: true,
    },
  },
});

// Message
var msg = blessed.message({
  parent: screen,
  top: 14,
  left: 5,
  style: {
    italic: true,
    fg: 'green',
  },
});

// Event management
submit.on('press', function () {
  form.submit();
});
cancel.on('press', function () {
  screen.destroy();
});

form.on('submit', function (data) {
  msg.setContent(
    'Form Submitted: { Username: ' +
      data.username +
      ', Password: ' +
      data.password +
      ' }',
  );
});

// Key bindings
screen.key('q', function () {
  this.destroy();
});

module.exports = screen;
