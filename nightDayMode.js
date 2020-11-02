var setColor = {
  h1List : function(color) {
    $('h1').css('color', color);
  },
  background : function(color) {
    $('body').css('backgroundColor', color);
  },
  letter : function(color) {
    $('body').css('color', color);
  },
  important : function(color) {
    $('#important').css('color', color);
  },
  liList : function(color) {
    $('li').css('color', color);
  },
  record : function(color) {
    $('.record').css('color', color);
  },
  button : function(color) {
    $('#t_button , #t_reset , #s_button , #s_record , #s_reset').css('backgroundColor', color);
  },
  nightDayModeButtonBack : function(color) {
    $('#nightDayModeButton').css('backgroundColor', color);
  },
  nightDayModeButton : function(color) {
    $('#nightDayModeButton').css('color', color);
  }
}

var setTheme = {
  White : function() {
    setColor.background('#ffffff');
    setColor.letter('#000000');
    setColor.h1List('#5f7d46');
    setColor.important('#ff4747');
    setColor.liList('#717171');
    setColor.record('#282828');
    setColor.button('#ffed91');
    setColor.nightDayModeButtonBack('#2e3131');
    setColor.nightDayModeButton('#e8e8e8');
  },
  Black : function() {
    setColor.background('#222121');
    setColor.letter('#ffffff');
    setColor.h1List('#a7c590');
    setColor.important('#ff7c7c');
    setColor.liList('#b6b6b6');
    setColor.record('#d2d2d2');
    setColor.button('#fff3b5');
    setColor.nightDayModeButtonBack('#e8e8e8');
    setColor.nightDayModeButton('#2e3131');
  },
  Red : function() {
    setColor.background('#b62929');
    setColor.letter('#ffffff');
    setColor.h1List('#b0db8c');
    setColor.important('#74d6d9');
    setColor.liList('#d9d9d9');
    setColor.record('#c9c9c9');
    setColor.nightDayModeButtonBack('#e8e8e8');
    setColor.nightDayModeButton('#2e3131');
  }
}

$(document).on('click', '#nightDayModeButton', function nightDayHandler() {
  if ($(this).val() === '화면 - 밤') {
      setTheme.Black();
      $(this).val('화면 - 낮');
  } else {
    setTheme.White();
    $(this).val('화면 - 밤');
  }
})

// css selector:active 색 변경 //

$(document).on('mousedown', '#nightDayModeButton', function() {
  setColor.nightDayModeButtonBack('#878c8c');
})
