



//getting in a pinch using fetch() to read Cred.json file, it isnt seem to be working. I thought
// I could get away with using just a single json file for both my python and javascript API test
// demos, but it seems like it will not work without more tinkering. 
// I have tried using fetch(), but it keeps giving me the ERR_INVALID_URL error, it might be because
// I am not using a live server, but I am using node to run my js app. So I am not sure why it is not 
// being read. 

// Next I will have to try using AJAX, or jQuery to be able to have my json file be read. We will see.

// or I could just relay the env method used by the API video and call it a day.



// trying to use XMLHttpRequest to obtain JSON file info
// XML is only for browser based application
//back to fetch
// tried using fetch-node, i think it requires me to install the module inside my file directory
// its not able to use my env variables like python. hmm...

// will try to use flask and jinja2 template. scratch that, I will stick to using env variables like the video asked me
// it is too much work since i will have to organize directories and add seperate js/py files with flask and create html 
// template and run the code on locally. 