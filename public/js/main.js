$(document).ready(() => {
  console.log('js is linked');

  // prevent empty fields in both forms
  $('#add-topic-form').on('submit', (event) => {
    if ($('input[name ="topics[title]"]').val() === "" || $('textarea[name ="topics[content]"]').val() === "" || $('input[name ="topics[username]"]').val() === "") {
      alert('Please fill out all fields!');
      return false;
    }
  })

  $('#add-comment-form').on('submit', (event) => {
    if($('input[name ="comments[username]"]').val() === "" || $('textarea[name="comments[comment]"]').val() === "" ) {
      alert('Please fill out all fields!');
      return false;
    }
  })

});
