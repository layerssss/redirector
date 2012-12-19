# redirector

simply redirect(http 302) traffic to a specific url.

## Usage (xNIX)

	PORT=80 REDIRECTOR_TO="http://192.168.0.254/404.html" node .
	
## Usage (Windows)

	set PORT=80
	set REDIRECTOR_TO=http://192.168.0.254/404.html
	node .