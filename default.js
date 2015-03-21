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

  $(document).on('CommentAdded clearCommentForm', function() {
    // Workaground for issue
    // https://github.com/mycolorway/simditor/issues/179
    editor.setValue('<p></p>');
    editor.inputManager.lastCaretPosition = null;
  });
});
