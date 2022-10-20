# Harbor Garbage Collector Triggerer
Triggers Harbor registry garbage collection using Node.JS and Puppeteer
## Building and Running
Before running, set the following in environment variables:
- HARBOR_URL: Url of your Harbor server
- USERNAME: admin user name
- PASSWORD: Admin password
- IGNORE_HTTPS_ERRORS: Optional variable for ignoring HTTPS certificate errors. It can be used in case of using a self-signed certificate. <true|false>

To build using docker
```
docker build -t harbor-gc .
```
After that run the image by
```
docker run -e "HARBOR_URL=<URL>" -e "USERNAME=<username>" -e "PASSWORD=<password>" -e "IGNORE_HTTPS_ERRORS=<true|false>" iso188/harbor-gc
```
Pre-built Docker image available at https://hub.docker.com/r/iso188/harbor-gc
