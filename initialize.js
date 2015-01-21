$(function() {
  var editor, mobileToolbar, toolbar;

  toolbar = ['title', 'bold', 'italic', 'underline','color', 'ol', 'ul', 'blockquote', 'code', 'link', 'hr'];
  
  mobileToolbar = ["bold", "underline", "strikethrough", "ul", "ol"];

  if (mobilecheck()) {
    toolbar = mobileToolbar;
  }

  $('.BodyBox').each(function() {
    new Simditor({
      textarea: this,
      toolbar: toolbar,
      defaultImage: 'http://simditor.tower.im/assets/images/logo.png'
    });
  });
});