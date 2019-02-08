

node_modules\.bin\jake

if exist node_modules\.bin\jake goto : run_jake
echo building npm modules :
call npm rebuild

:run_jake
call node_modules\.bin\jake %*