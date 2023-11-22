::copy files to dist folder
::index
copy index.html dist\index.html
::assets
copy *.js dist\
copy *.css dist\
::features
copy login.html dist\login.html
xcopy contact dist\contact /E /I /Y
xcopy post dist\post /E /I /Y
xcopy todo dist\todo /E /I /Y

:: upload files
scp -i c:/keys/mykey.pem -r dist/* ubuntu@ec2-52-79-101-98.ap-northeast-2.compute.amazonaws.com:/home/ubuntu/web/myapp