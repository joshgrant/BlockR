function FindProxyForURL(url, host) {
  host = host.toLowerCase();
  var blocked = [
	"reddit.com", "redd.it", "redditmedia.com",
	"redditstatic.com", "reddituploads.com", "reddit.app.link"
  ];
  for (var i = 0; i < blocked.length; i++) {
	var d = blocked[i];
	if (host === d || dnsDomainIs(host, "." + d)) {
	  return "PROXY 127.0.0.1:9";
	}
  }
  return "DIRECT";
}