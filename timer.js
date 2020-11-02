
// 숫자 입력 관련 //

$(document).on( 'input change', '#t_hour, #t_minute, #t_second, #s_hour, #s_minute, #s_second', function setValueTwoDigit() {
  var content = $(this).val();
  if ( content.length === 0 ) {
    $(this).val('0' + 0);
  } else {
    if ( content.length < 2 ) {
        $(this).val('0'+ content);
    } else {
      if (content.length === 2) {
        $(this).val(content)
      } else {
        $(this).val(content - 0);
      }
    }
  }
});

$(document).on( 'input', '#t_minute, #t_second, #s_minute, #s_second', function setValueUnder60() {
  var content = $(this).val();
  if (content > 59 || content < 0) {
    alert('0과 60사이의 숫자를 넣으세요.');
    $(this).val('0' + 0);
    $(this).select();
  }
});

$(document).on( 'click', '#t_hour, #t_minute, #t_second, #s_hour, #s_minute, #s_second', function selectAll() {
   $(this).select();
});

// 타이머 실행 //

var downTime;
var endTimer;

$(document).on('click', '#t_button', function timerButton() {
  var second = $('#t_second');
  var minute = $('#t_minute');
  var hour = $('#t_hour');
  if ($(this).val() === '시작' && (second.val() > 0 || minute.val() > 0 || hour.val() > 0)) {
    startTimer();
    $(this).val('정지');
  } else {
    stopTimer();
    $(this).val('시작');
  }
});

$(document).on('click', '#t_reset', function t_reset() {
  var second = $('#t_second');
  var minute = $('#t_minute');
  var hour = $('#t_hour');
  var button = $('#t_button');
  var nDButton = $('#nightDayModeButton');
  clearInterval(downTime);
  clearInterval(endTimer);
  if (nDButton.val() === '화면 - 밤') {
    setTheme.White();
  } else {
    setTheme.Black();
  }
  button.val('시작');
  second.val('0'+0);
  minute.val('0'+0);
  hour.val('0'+0);
});

function startTimer() {
  downTime = setInterval( function() {
    var button = $('#t_button');
    var second = $('#t_second');
    var secondM = second.val()- 0 - 1;
    var minute = $('#t_minute');
    var minuteM = minute.val() - 0 - 1;
    var hour = $('#t_hour');
    var hourM = hour.val() - 0 - 1;
    if (secondM < 0) {
      if (minuteM < 0) {
        if (hourM > 0 || hourM === 0) {
          second.val(59).change();
          minute.val(59).change();
          hour.val(hourM).change();
        }
      } else {
        second.val(59).change();
        minute.val(minuteM).change();
      }
    } else {
      if (hourM < 0 && minuteM < 0 && secondM === 0) {
        button.click();
        second.val('0' + 0).change();
        endAlert();
      }
      second.val(secondM).change();
    }
  }, 1000)
}

function stopTimer() {
  clearInterval(downTime);
}

function endAlert() {
  var nDButton = $('#nightDayModeButton');
  setTheme.Red();
  setTimeout(function() {
    if (nDButton.val() === '화면 - 밤') {
      setTheme.White();
    } else {
      setTheme.Black();
    }
  }, 500)
  endTimer = setInterval(function() {
    setTimeout(function() {
      if (nDButton.val() === '화면 - 밤') {
        setTheme.White();
      } else {
        setTheme.Black();
      }
    }, 500)
    setTheme.Red();
  }, 1000)
}
