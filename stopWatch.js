
// 초시계 실행 //

$(document).on('click', '#s_button', function stopWatchButton() {
  if ($(this).val() === '시작') {
    startStopWatch();
    $(this).val('정지');
  } else {
    stopStopWatch();
    $(this).val('시작');
  }
});

$(document).on('click', '#s_reset', function s_reset() {
  var button = $('#s_button');
  var second = $('#s_second');
  var minute = $('#s_minute');
  var hour = $('#s_hour');
  clearInterval(upTime);
  button.val('시작');
  minute.val('0' + 0);
  second.val('0' + 0);
  hour.val('0' + 0);
});

var upTime;

function startStopWatch() {
  upTime = setInterval( function() {
  var button = $('#s_button');
  var second = $('#s_second');
  var secondA = second.val() - 0 + 1;
  var minute = $('#s_minute');
  var minuteA = minute.val() - 0 + 1;
  var hour = $('#s_hour');
  var hourA = hour.val() - 0 + 1;
    if (secondA < 60) {
      second.val(secondA).change();
    } else {
      if (minuteA < 60) {
        second.val('0' + 0).change();
        minute.val(minuteA).change();
      } else {
        second.val('0' + 0).change();
        minute.val('0' + 0).change();
        hour.val(hourA).change();
      }
    }
  }, 1000)
}

function stopStopWatch() {
  clearInterval(upTime);
}


// 초시계 기록 //

$(document).on('click', '#s_record', function recordStopWatch() {
  var box = $('#recordBox');
  var list = $('#recordList');
  var second = $('#s_second');
  var minute = $('#s_minute');
  var hour = $('#s_hour');
  var nDButton = $('#nightDayModeButton');
  if (box.html().length === 0) {
    box.html('<div id="record_t">'+
              '<h2>[초시계 기록]</h2>'+
              '<button id="l_delete">삭제  <i class="fa fa-trash"></i></button>'+
              '<span id="r_hide_span"><button id="r_hide">숨기기  &#9650</button></span></div>'+
              '<ol id="recordList"></ol>');
  } else {
    if ($('#record_t').css('display') === 'none') {
      $('#record_t').css('display', 'block');
      $('#recordList').css('display', 'block');
    } else {
      list.append('<li>'+'<span class="record">'+hour.val()+':'+minute.val()+':'+second.val()+'</span>'+'</li>');
    }
  }
  if (nDButton.val() === '화면 - 밤') {
    setColor.liList('#717171');
    setColor.record('#282828');
  } else {
    setColor.liList('#b6b6b6');
    setColor.record('#d2d2d2');
  }
});

$(document).on('click', '#l_delete', function l_delete() {
  var list = $('#recordList');
  list.html('');
});

$(document).on('click', '#r_hide', function boxHide() {
  $('#record_t').css('display', 'none');
  $('#recordList').css('display', 'none');
});
