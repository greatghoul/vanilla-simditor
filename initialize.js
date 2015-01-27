$(function() {
  var toolbar = ['title', 'bold', 'italic', 'underline','color', 'ol', 'ul', 'blockquote', 'code', 'link', 'hr'];
  var mobileToolbar = ["bold", "underline", "strikethrough", "ul", "ol"];
  if (mobilecheck()) {
    toolbar = mobileToolbar;
  }

  var editor = new Simditor({
    textarea: $('.BodyBox'),
    toolbar: toolbar,
    defaultImage: 'http://simditor.tower.im/assets/images/logo.png'
  });

  editor.formatter._allowedAttributes['a'].push('class');

  $(document).on('CommentAdded', function() {
    editor.setValue('');
  });
});
