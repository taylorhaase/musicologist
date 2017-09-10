const musicInfo = [];

function addSongFromField(event) {
  event.preventDefault();

  const info = $('#musicField').eq(0).val();

  musicInfo.push(info);
  renderList();
  $('#musicField').eq(0).val('');
}

$('#addButton').click(addSongFromField);
$('#musicField').keyup(function(event) {
  if (event.which == 13) { // User presses Enter
    addSongFromField(event);
  }
});

function renderList() {
  const $list = $('.info').eq(0);

  $list.empty();

  for (const info of musicInfo) {
    const $item = $('<li class="list-group-item">').text(info);

    $list.append($item)
  }
}

$('#getPlaylistBtn').click(function (event) {

  var itunesUrl = 'https://itunes.apple.com/search?media=music&term=pop'
  $.getJSON(itunesUrl)
  .then((res)=>{
    console.log(res);
    for (var i=0; i < res.results.length; i++){
     const $artistName = $('<p>').text(res.results[i].artistName).css({"color":"Crimson", "font-size":"16px", "font-family":"chalkduster, fantasy", "margin-left":"20px"});
     const $trackName = $('<p>').text(res.results[i].trackName).css({"font-family":"courier new", "margin-left":"35px", "font-weight":"bold"});

     $('#playlist').append($artistName)
     $('#playlist').append($trackName);

    };
  })
  .catch((err)=>{
    console.log(err);
  })
  
  console.log('Testing Music Call');
});