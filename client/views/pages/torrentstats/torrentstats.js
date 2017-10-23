Template.torrentStats.rendered = function () {
  if (typeof torrentRefresh !== 'undefined') clearInterval(torrentRefresh)
  torrentRefresh = setInterval(function(){
    Template.torrentStats.refreshStats();
  }, 1000)
  Template.torrentStats.refreshStats();
}

Template.torrentStats.refreshStats = function () {
  if (Torrent.torrents.length>0) {
    Stats.upsert({_id: 'torrent'}, {
      _id: 'torrent',
      uploadSpeed: Torrent.uploadSpeed,
      numPeers:Torrent.torrents[0].numPeers
    })
  }
}

Template.torrentStats.helpers({
  stats: function() {
    return Stats.findOne({_id: 'torrent'})
  }
})
