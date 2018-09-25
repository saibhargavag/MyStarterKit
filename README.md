# MyStarterKit
This is practice starter kit

#Remove Open node plugin
Open Node plugin have security issues so dont use it now when you are going to prod

#Local tunnel for showing your work to others over web not in localhost

We have a simple feature where we can share our local dev url over the web with localtunnel
use the following command to install it once and then other command to run it

step 1: Install local tunnel globally
npm install localtunnel -g

step 2 : Run local tunnel with your choice of subdomain if available

lt --port 3000 -s saitest123

Note : Here while running this command you need to have your local url running and then port specified here must match with your local url port.
And the subdomainName "saitest123" if avaialble it gives you an URL otherwise it gives an error and retrays for its avialability

sample url:

https://saitest123.localtunnel.me/

